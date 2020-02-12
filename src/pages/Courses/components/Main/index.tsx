import React, { FunctionComponent, useContext } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Skeleton } from '@client/ui/components';

import { CourseIdContext } from '@client/pages/Courses';
import { getCourseData } from './schemas';
import { GetPrivateCourseDataResponse } from './schemas/getPrivateCourseData';

import {
    MainRoot,
    Panel,
    StyledPayment,
    StyledContent,
    SkeletonWrapper,
} from './styled';
import {
    getContentProps,
    getPaymentProps,
} from './helpers';

interface MainProps {}

const Main: FunctionComponent<MainProps> = () => {
    const courseId = useContext(CourseIdContext);
    const { data, loading, error } = useQuery<GetPrivateCourseDataResponse>(getCourseData, {
        variables: {
            courseIds: [courseId],
            courseId,
        },
    });

    return (
        <MainRoot>
            {loading || error || !data?.course || !data?.userCourses || !data?.courseStage
                ? (
                    <SkeletonWrapper>
                        <Skeleton avatar rows={5} />
                        <Skeleton rows={4} />
                        <Skeleton rows={4} />
                    </SkeletonWrapper>
                )
                : (
                    <Panel>
                        <StyledContent {...getContentProps(data)} />
                        <StyledPayment {...getPaymentProps(data)} />
                    </Panel>
                )}
        </MainRoot>
    );
};

export default Main;
