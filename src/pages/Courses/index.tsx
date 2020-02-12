import React, {
    FunctionComponent,
} from 'react';
import { RouteComponentProps, StaticContext } from 'react-router';

import { Skeleton, SubjectProvider, SubjectTabs } from '@client/ui/components';
import { Course, Subject } from '@client/apollo/schemaTypes';

import { useQuery } from '@apollo/react-hooks';
import { LoadingRoot } from '@client/pages/Dashboard/components/Start/styled';
import { getLastItemById } from '@client/helpers/tools';
import { CoursesRoot } from './styled';
import { Main } from './components';
import { getCoursesProfileData } from './schemas';

interface CoursesBySlugObjType {
    [key: string]: Course['id'];
}

function filterSubjectsByCourses(subjs: Subject[]) {
    return subjs.filter(({ courses }) => courses && (courses.length > 0));
}

export const AccessCourseContext = React.createContext(false);
export const CourseIdContext = React.createContext('');

const Courses: FunctionComponent<RouteComponentProps<{}, StaticContext, { slug: string }>> = (props) => {
    const { data, refetch, loading } = useQuery(getCoursesProfileData);
    let subjects: Subject[] = [];
    const {
        location: {
            state,
        },
    } = props;

    const defaultCourseTab = state?.slug ?? null;

    const coursesBySlugObj: CoursesBySlugObjType = {};
    const privateCoursesBySlugObj: CoursesBySlugObjType = {};
    if (!loading && data?.me?.subjects) {
        subjects = filterSubjectsByCourses(data.me.subjects);

        subjects.forEach(({ slug, courses }) => {
            if (slug) {
                coursesBySlugObj[slug] = (courses && getLastItemById(courses)?.id) || '';
            }
        });
    }

    if (!loading && data?.me?.courses) {
        const privateCourses = data.me.courses;
        privateCourses.forEach(({ id, subject }) => {
            if (id && subject && subject.slug) {
                privateCoursesBySlugObj[subject.slug] = id;
            }
        });
    }

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

    return (
        <CoursesRoot>
            <SubjectTabs
                defaultTab={defaultCourseTab}
                userSubjects={subjects.map(({ slug }) => (slug || ''))}
                onAdd={(resp) => {
                    refetch();
                }}
                background="white"
                minTabsToSlide={2}
                mixedPanel={
                    ({ slug, ...mixedProps }) => (
                        <SubjectProvider
                            value={{
                                subjectType: slug,
                            }}
                        >
                            <AccessCourseContext.Provider value={!!privateCoursesBySlugObj[slug]}>
                                <CourseIdContext.Provider value={privateCoursesBySlugObj[slug] || coursesBySlugObj[slug]}>
                                    <Main />
                                </CourseIdContext.Provider>
                            </AccessCourseContext.Provider>
                        </SubjectProvider>
                    )
                }
            />
        </CoursesRoot>
    );
};

export default Courses;
