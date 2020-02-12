import React, { FunctionComponent, useMemo } from 'react';
import moment from 'moment';
import { Lesson as LessonType } from '@client/apollo/schemaTypes';
import { declOfNum } from '@client/helpers';
import { useHistory } from 'react-router';
import {
    StyledSubject,
    DeadItem,
    Deadlines,
    StyledButton,
    StyledLocky,
    Footer,
} from './styled';

export interface LessonProps {
    lesson: LessonType;
    courseId: string;
    subscriptionExpiredAt: string;
}

type Props = LessonProps;

const Lesson: FunctionComponent<Props> = ({
    courseId,
    subscriptionExpiredAt,
    lesson: {
        id,
        title,
        startedAt,
        endedAt,
        isCompleted,
        score,
        maxScore,
        homeworkTemplate,
        webinar,
    },
}) => {
    const history = useHistory();

    let buttonText = 'Скоро откроется';

    const isDisabledLesson = useMemo(() => {
        if (subscriptionExpiredAt && endedAt) {
            const mSubscriptionExpiredAt = moment.utc(subscriptionExpiredAt, 'YYYY-MM-DD HH:mm:ss');
            const mLessonEndedAt = moment.utc(endedAt, 'YYYY-MM-DD HH:mm:ss');
            return mSubscriptionExpiredAt.isBefore(mLessonEndedAt);
        }
        return true;
    }, [endedAt, subscriptionExpiredAt]);

    if (webinar?.id && !isDisabledLesson) {
        buttonText = 'Смотреть урок';
    }

    if (isDisabledLesson) {
        buttonText = 'Разблокировать';
    }

    return (
        <>
            <StyledSubject selected>
                <h4>{title}</h4>
            </StyledSubject>
            <Deadlines disabled={!webinar?.id && !isDisabledLesson}>
                <DeadItem>
                    <p>{moment.utc(startedAt, 'YYYY-MM-DD HH:mm:ss').local().format('D MMMM')}</p>
                    <p>Дата урока</p>
                </DeadItem>
                {homeworkTemplate ? (
                    <DeadItem>
                        <p>{moment.utc(homeworkTemplate.deadlineAt, 'YYYY-MM-DD HH:mm:ss').local().format('D MMMM')}</p>
                        <p>Дата сдачи домашки</p>
                    </DeadItem>
                ) : ''}
                <StyledButton
                    color={webinar?.id || isDisabledLesson ? 'purple' : 'gray'}
                    onClick={() => {
                        if (isDisabledLesson) {
                            history.push({
                                pathname: '/pay',
                                state: {
                                    ids: [courseId],
                                },
                            });
                        } else {
                            history.push(webinar?.id ? `/lesson/${id}` : '/dashboard');
                        }
                    }}
                >
                    <>
                        {isDisabledLesson ? <StyledLocky isLocked={false} /> : null}
                        {buttonText}
                    </>
                </StyledButton>
            </Deadlines>
            <Footer disabled={isDisabledLesson}>
                {isDisabledLesson
                    ? <h5>Откроется после покупки</h5>
                    : (
                        <>
                            <p>{`Ты ${isCompleted ? 'заработал' : 'заработаешь'}`}</p>
                            <h5>
                                {`${isCompleted ? score : maxScore} ${declOfNum(
                                    isCompleted ? score : maxScore,
                                    ['балл', 'балла', 'баллов'],
                                )}`}
                            </h5>
                        </>
                    )
                }
            </Footer>
        </>
    );
};

export default Lesson;
