import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';
import { useLazyQuery, useQuery } from 'react-apollo';
import { Redirect } from 'react-router-dom';
import {
    useHistory, useLocation, useRouteMatch,
} from 'react-router';
import moment from 'moment';

import { SubjectProvider } from '@client/ui/components';

import {
    GetCourseSubscriptionForLessonQuery, GetCourseSubscriptionForLessonQueryVariables,
    GetWebinarInfoQueryVariables,
    Lesson as LessonType,
    Maybe,
} from '@client/apollo/schemaTypes';
import { LessonContext } from '@client/pages/Lesson/helpers';
import { getWebinarSubject, getCourseSubscriptionForLesson } from './schemas';
import { Header, Main } from './components';
import { LessonRoot } from './styled';

interface LessonResponse { lesson: Maybe<LessonType> }

const Lesson: FunctionComponent = () => {
    const {
        params,
    } = useRouteMatch();
    const history = useHistory();
    const [lessonEndedAt, setLessonEndedAt] = useState('');
    const [fetchGetSubscription] = useLazyQuery<GetCourseSubscriptionForLessonQuery, GetCourseSubscriptionForLessonQueryVariables>(getCourseSubscriptionForLesson, {
        fetchPolicy: 'network-only',
        onCompleted: (data) => {
            if (data?.userCourses && data?.userCourses?.[0]?.subscriptionExpiredAt && lessonEndedAt) {
                const mLessonEndedAt = moment.utc(lessonEndedAt, 'YYYY-MM-DD HH:mm:ss');
                const mSubscriptionExpiredAt = moment.utc(data?.userCourses[0].subscriptionExpiredAt, 'YYYY-MM-DD HH:mm:ss');
                if (mSubscriptionExpiredAt.isBefore(mLessonEndedAt)) {
                    history.push('/dashboard');
                }
            } else {
                history.push('/dashboard');
            }
        },
        onError: () => history.push('/dashboard'),
    });
    const { data } = useQuery<LessonResponse, GetWebinarInfoQueryVariables>(
        getWebinarSubject,
        {
            variables: {
                id: params.id,
            },
            onCompleted: ({ lesson }) => {
                if (lesson?.module?.course?.id) {
                    setLessonEndedAt(lesson?.endedAt ?? '');
                    fetchGetSubscription({
                        variables: {
                            courseIds: [lesson?.module?.course?.id],
                        },
                    });
                }
            },
            onError: () => {
                history.push('/dashboard');
            },
        },
    );
    const lesson = useMemo(() => data?.lesson ?? null, [data]);

    const subjectType = lesson?.subject?.slug
        ?? lesson?.course?.subject?.slug
        ?? lesson?.module?.course?.subject?.slug
        ?? '';

    if (!params.id) {
        return <Redirect to="/dashboard" />;
    }

    return (
        <LessonRoot>
            <SubjectProvider value={{ subjectType }}>
                <LessonContext.Provider value={lesson}>
                    <Header />
                    <Main />
                </LessonContext.Provider>
            </SubjectProvider>
        </LessonRoot>
    );
};

export default Lesson;
