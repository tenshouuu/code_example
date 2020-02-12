import React, {
    FunctionComponent, useCallback,
} from 'react';
import { useQuery } from '@apollo/react-hooks';
import {
    Course, Lesson, Maybe, Subject,
} from '@client/apollo/schemaTypes';

import { getLastItemById } from '@client/helpers/tools';
import {
    Content,
    Promo,
    Teacher,
} from './components';
import { getCoursesSubject } from './schemas';
import {
    Info,
    Plan,
} from '../index';
import PageWrapper from '../PageWrapper';

type WebinarProps = {
    lesson: Maybe<Lesson>;
};

const Webinar: FunctionComponent<WebinarProps> = (props) => {
    const {
        lesson,
    } = props;

    const { data } = useQuery<{ subject: Maybe<Subject>}>(getCoursesSubject, {
        skip: !lesson?.subject?.slug,
        variables: {
            slug: lesson?.subject?.slug,
        },
    });
    const course: Maybe<Course> = lesson?.course ?? (data?.subject?.courses && getLastItemById(data.subject.courses)) ?? null;

    const getPlan = useCallback(() => (
        lesson?.isPaid
            ? (
                <Plan
                    title="План урока"
                    list={lesson?.plan ?? ['Введение']}
                />
            )
            : (
                <Teacher
                    user={lesson?.teacher}
                    score={course?.counters?.score ?? 97}
                />
            )
    ), [lesson, course]);

    const getInfo = useCallback(() => (
        lesson?.isPaid
            ? (
                <Info
                    title={lesson?.title ?? null}
                    teacher={lesson?.teacher ?? null}
                />
            )
            : (
                <Promo course={course} />
            )
    ), [lesson, course]);

    return (
        <PageWrapper
            mainChildrenPosition="left"
            firstChildren={getInfo()}
            secondChildren={getPlan()}
            mainChildren={(
                <Content
                    timerData={lesson?.startedAt && lesson?.endedAt && lesson?.duration ? {
                        startedAt: lesson.startedAt,
                        endedAt: lesson.endedAt,
                        duration: lesson.duration,
                    } : null}
                    webinar={lesson?.webinar ?? null}
                />
            )}
        />
    );
};

export default Webinar;
