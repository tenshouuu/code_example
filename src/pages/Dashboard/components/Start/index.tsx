import React, {
    FunctionComponent, useCallback, useMemo, useState,
} from 'react';
import { Element } from 'react-scroll';
import { useQuery } from '@apollo/react-hooks';
import { mapSubjects } from '@client/helpers';
import {
    Course as CourseType, Maybe, Subject, Users,
} from '@client/apollo/schemaTypes';
import { Skeleton, SubjectProvider, SubjectTabs } from '@client/ui/components';
import Animate from '@client/containers/Animate';

import { useLocation } from 'react-router';
import {
    StartRoot,
    LoadingRoot,
    StyledFeaturesList,
    StyledTeacher,
} from './styled';
import { getDashboard } from './schemas';
import { TabContent } from './components';
import {getLastItemById} from "@client/helpers/tools";

interface StartProps {}
export interface StartStateType {
    show: boolean;
    slug: string;
    isPaid: boolean;
    price: number;
    score: number;
    courseId: string;
    teacher: Maybe<Users>;
}

type Props = StartProps;

function getFilteredSlugsByCourses(subjs: Subject[]) {
    return subjs.map(({
        slug,
        courses,
    }) => (courses && (courses.length > 0) ? (slug ?? '') : '')).filter(Boolean);
}

const Start: FunctionComponent<Props> = (props) => {
    const [startState, toggleStartState] = useState<StartStateType>({
        show: false,
        isPaid: false,
        slug: '',
        price: 0,
        score: 97,
        courseId: '',
        teacher: null,
    });
    const { data, loading, refetch } = useQuery(getDashboard);
    const { state } = useLocation();

    const handleToggleContent = useCallback((newState: StartStateType) => {
        toggleStartState({
            ...startState,
            ...newState,
        });
    }, [startState, toggleStartState]);

    const subjects = data?.me?.subjects ?? [];
    const [slugs, mappedSubjects] = useMemo(() => [
        mapSubjects(subjects, 'slug'),
        mapSubjects(subjects, ['slug', 'courses']),
    ], [subjects]);

    const handleGetMappedSubjectsId: (p: CourseType[]) => string = courseIdsArray => (
        getLastItemById(courseIdsArray)?.id ?? ''
    );

    if (loading || subjects.length === 0) {
        return (
            <LoadingRoot>
                <Skeleton rows={2} loading active />
                <Skeleton rows={3} loading active />
                <Skeleton avatar loading active />
                <Skeleton rows={3} loading active />
            </LoadingRoot>
        );
    }

    const privateCoursesBySlugObj = {};
    const privateCourses = data?.me?.courses ?? [];
    privateCourses.forEach(({ id, subject }) => {
        if (id && subject && subject.slug) {
            privateCoursesBySlugObj[subject.slug] = id;
        }
    });

    const filteredSlugs = getFilteredSlugsByCourses(subjects);
    const defaultSlug = state?.slug ?? null;
    const {
        show,
        isPaid,
        slug,
        price,
        score,
        courseId,
        teacher,
    } = startState;

    return (
        <StartRoot>
            <SubjectProvider
                value={{ subjectType: startState.slug }}
            >
                <SubjectTabs
                    defaultTab={defaultSlug}
                    background="white"
                    userSubjects={filteredSlugs}
                    mixedPanel={({ slug: panelSlug }) => (
                        <>
                            {/* eslint-disable-next-line no-nested-ternary */
                                privateCoursesBySlugObj[panelSlug]
                                    ? (
                                        <TabContent
                                            init={handleToggleContent}
                                            isPaid={!!privateCoursesBySlugObj[panelSlug]}
                                            courseId={privateCoursesBySlugObj[panelSlug]}
                                            slug={panelSlug}
                                        />
                                    )
                                    : (handleGetMappedSubjectsId(mappedSubjects[panelSlug]) ? (
                                        <TabContent
                                            init={handleToggleContent}
                                            courseId={handleGetMappedSubjectsId(mappedSubjects[panelSlug])}
                                            slug={panelSlug}
                                        />
                                    ) : '')
                            }
                        </>
                    )}
                    onAdd={() => refetch()}
                />
                <Animate show={show}>
                    <StyledTeacher
                        courseId={courseId}
                        coursePrice={price}
                        score={score}
                        slug={slug}
                        data={teacher}
                    />
                </Animate>
                <Animate show={show}>
                    <Element name="featuresList">
                        <StyledFeaturesList
                            isPaid={isPaid}
                            courseId={courseId}
                            price={price}
                        />
                    </Element>
                </Animate>
            </SubjectProvider>
        </StartRoot>
    );
};

export default Start;
