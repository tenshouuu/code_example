import React, { FunctionComponent, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import moment from 'moment';

import { Spin } from '@client/ui/components';
import { CourseIdContext } from '@client/pages/Courses';
import {
    ModalWrapperRoot,
    Wrapper,
    StyledLesson,
} from './styled';
import { getModuleLessons, getUserSubscriptionForModuleLessons } from './schemas';

export interface ModalWrapperProps {
    id: string;
}

type Props = ModalWrapperProps;

const ModalWrapper: FunctionComponent<Props> = ({ id }) => {
    const courseId = useContext(CourseIdContext);
    const { data: moduleLessonsData, loading, error } = useQuery(getModuleLessons, {
        variables: {
            id,
        },
    });
    const { data: subscriptionData } = useQuery(getUserSubscriptionForModuleLessons, {
        variables: {
            courseIds: [courseId],
        },
    });

    const subscriptionExpiredAt = subscriptionData?.userCourses?.[0]?.subscriptionExpiredAt ?? '';
    const filteredLessons = (moduleLessonsData?.module?.lessons || []).sort((a, b) => moment.utc(
        a?.startedAt || moment(),
    ).diff(moment.utc(
            b?.startedAt || moment(),
    )));
    return (
        <ModalWrapperRoot>
            <h2>Уроки модуля</h2>
            <div>
                {(loading || error) ? <Spin color="purple" /> : (
                    <Wrapper>
                        {filteredLessons.map(
                            lesson => (
                                <StyledLesson
                                    key={lesson.id}
                                    lesson={lesson}
                                    courseId={courseId}
                                    subscriptionExpiredAt={subscriptionExpiredAt}
                                />
                            ),
                        )}
                    </Wrapper>
                )}
            </div>
        </ModalWrapperRoot>
    );
};

export default ModalWrapper;
