import React, { FunctionComponent, useContext } from 'react';
import moment from 'moment';
import { useMediaQuery } from 'react-responsive';
import { useQuery } from '@apollo/react-hooks';

import { Course, Maybe, Stage } from '@client/apollo/schemaTypes';
import {AccessCourseContext, CourseIdContext} from '@client/pages/Courses';
import { theme } from '@client/helpers';
import { useHistory } from 'react-router';
import { getCourseStage } from './schemas';
import {
    ContentRoot,
    Wrapper,
    StageWrapper,
    StyledStage,
    StyledInfo,
    StyledTeacher,
    StyledFuryRoad,
    ButtonWrapper,
    StyledButton,
} from './styled';

export interface ContentProps {
    course: Maybe<Course>;
    subscriptionExpiredAt: string;
    subscriptionStartedAt: string;
}

type Props = ContentProps;

const Content: FunctionComponent<Props> = ({
    course,
    subscriptionExpiredAt,
    subscriptionStartedAt,
    ...props
}) => {
    const courseAccess = useContext(AccessCourseContext);
    const courseId = useContext(CourseIdContext);
    const isMobile = useMediaQuery({
        query: `(max-width: ${theme.tokens.mediaWidths.mobile}px)`,
    });

    const { data } = useQuery<{ courseStage: Stage }>(getCourseStage, {
        variables: { courseId },
        skip: !courseAccess ?? !courseId,
    });

    const history = useHistory();

    return (
        <ContentRoot {...props}>
            <Wrapper isAccess={courseAccess}>
                <StyledInfo
                    title={course?.title ?? ''}
                    description={course?.description ?? ''}
                />
                {courseAccess
                    ? (
                        <StageWrapper>
                            {data?.courseStage ? Object
                                .keys(data.courseStage)
                                .map((key, i) => ((data?.courseStage?.[key] && typeof data?.courseStage?.[key] === 'object')
                                    ? (
                                        <StyledStage
                                            key={data.courseStage[key]?.id ?? key}
                                            title={data.courseStage[key]?.title ?? 'Вводное занятие'}
                                            isLocked={key === 'nextLesson'}
                                            lessonId={key === 'currentLesson'
                                            && data?.courseStage?.[key]?.webinar?.id
                                            && data?.courseStage?.[key]?.endedAt
                                            && moment
                                                .utc(subscriptionExpiredAt, 'YYYY-MM-DD HH:mm:ss')
                                                .isAfter(
                                                    moment.utc(
                                                        data?.courseStage?.[key]?.endedAt ?? '2099-11-11 00:00:00',
                                                        'YYYY-MM-DD HH:mm:ss',
                                                    ),
                                                )
                                                ? data.courseStage[key]?.id
                                                : ''}
                                        />
                                    ) : null)) : null}
                            <StyledTeacher
                                user={course?.teacher ?? null}
                                score={course?.counters?.score ?? 97}
                            />
                        </StageWrapper>
                    )
                    : (
                        <StyledTeacher
                            user={course?.teacher ?? null}
                            score={course?.counters?.score ?? 97}
                        />
                    )}
                {isMobile && !courseAccess
                    ? (
                        <ButtonWrapper>
                            <StyledButton
                                onClick={() => history.push({
                                    pathname: '/pay',
                                    state: {
                                        ids: [course?.id],
                                    },
                                })}
                            >
                                {`Купить курс от ${course?.cost} руб.`}
                            </StyledButton>
                        </ButtonWrapper>
                    )
                    : null}
            </Wrapper>
            <StyledFuryRoad
                currentModuleId={data?.courseStage?.currentLesson?.module?.id || ''}
                subscriptionExpiredAt={subscriptionExpiredAt}
            />
        </ContentRoot>
    );
};

export default Content;
