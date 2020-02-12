import React, { FunctionComponent } from 'react';
import { Skeleton, withSubject } from '@client/ui/components';
import {
    Label,
    Teacher,
    About,
    Steps,
    Reviews,
    Prices,
} from './components';
import {
    renderTeacherProps,
    renderLabelProps,
    renderAboutProps,
} from './helpers';
import withData, { ChildProps } from './data';
import { CourseReviewRoot, SkeletonWrapper } from './styled';


type Props = ChildProps & {
    subjectType: string;
};

const CourseReview: FunctionComponent<Props> = ({ data, subjectType }) => {
    const MrSkeleton = (
        <SkeletonWrapper>
            <Skeleton rows={6} loading active />
            <Skeleton avatar loading active />
            <Skeleton rows={8} loading active />
        </SkeletonWrapper>
    );

    if (data.loading) {
        return MrSkeleton;
    }

    return (
        <CourseReviewRoot>
            {data.course ? (
                <>
                    <Label
                        {...renderLabelProps(data.course)}
                    />
                    <Teacher
                        {...renderTeacherProps(data.course)}
                    />
                    <About
                        slug={subjectType}
                        {...renderAboutProps(data.course)}
                    />
                    <Steps />
                    <Reviews />
                    <Prices />
                </>
            ) : MrSkeleton}
        </CourseReviewRoot>
    );
};

export default withSubject(withData(CourseReview));
