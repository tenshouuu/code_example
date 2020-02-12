import React, { FunctionComponent, useEffect } from 'react';
import { useHistory } from 'react-router';
import { useQuery } from '@apollo/react-hooks';
import { Webinar } from '@client/components';

import { Lesson, Maybe } from '@client/apollo/schemaTypes';
import { StartStateType } from '@client/pages/Dashboard/components/Start';

import { Icon } from '@client/ui/components';
import {
    GetTabContentResponseType,
} from './schemas/getTabContent';
import { getTabContent } from './schemas';
import {
    TabContentRoot,
    WebinarArea,
    InfoArea,
    Label,
    Title,
    Description,
    FeatureList,
    Feature,
    StyledAwesomeIcon,
    PriceInfo,
    StyledButton,
    Price,
    StyledSubscribeWebinarsLink,
    Locky,
    SkeletonWrapper,
    StyledSkeleton,
    EmptyPlaceholder,
    SaleInfo,
    StyledIconPrize,
} from './styled';

interface TabContentProps {
    isPaid?: boolean;
    init(p: StartStateType): void;
    courseId: StartStateType['courseId'];
    slug: StartStateType['slug'];
}

type Props = TabContentProps;

const features = [
    {
        Icon: Icon.CheckList,
        text: <>
            Разбор всех
            <br />
            {' '}
            заданий егэ
        </>,
    },
    {
        Icon: Icon.SearchList,
        text: <>
            Проверка и анализ
            <br />
            {' '}
            домашних заданий
        </>,
    },
    {
        Icon: Icon.Fisting,
        text: <>
            Личный наставник
            <br />
            {' '}
            и мотивация
        </>,
    },
    {
        Icon: () => <StyledAwesomeIcon type="score" />,
        text: <>
            Реальные награды
            <br />
            {' '}
            за успеваемость
        </>,
    },
];

const TabContent: FunctionComponent<Props> = ({
    init,
    courseId,
    slug,
    isPaid = false,
}) => {
    const history = useHistory();
    const resp = useQuery<GetTabContentResponseType>(getTabContent, {
        variables: {
            id: courseId,
            slug,
        },
        errorPolicy: 'all',
        onCompleted: (data) => {
            if (data?.course?.teacher) {
                init({
                    show: true,
                    isPaid,
                    courseId: data.course.id,
                    score: data.course?.counters?.score ?? 97,
                    price: data.course.cost || 0,
                    slug: slug || '',
                    teacher: data.course.teacher,
                });
            }
        },
    });
    const { data, loading } = resp;

    useEffect(() => () => {
        init({
            show: false,
            isPaid: false,
            courseId: '',
            price: 0,
            score: 97,
            slug: '',
            teacher: null,
        });
    }, []);

    const lesson: Maybe<Lesson> = data?.dashboardStartWebinarsV2 || null;
    return (
        <TabContentRoot>
            <WebinarArea hide={!loading && !lesson}>
                <>
                    {loading || !lesson
                        ? <StyledSkeleton video loading={loading || lesson} />
                        : <Webinar data={lesson} desktopType="simple" />}
                    {!loading && !lesson
                        ? <EmptyPlaceholder>Тут скоро появится вебинар</EmptyPlaceholder>
                        : ''}
                </>
            </WebinarArea>
            {loading ? (
                <SkeletonWrapper>
                    <StyledSkeleton rows={2} />
                    <StyledSkeleton avatar />
                    <StyledSkeleton rows={4} />
                </SkeletonWrapper>
            ) : (
                <>
                    <InfoArea>
                        <Label hide={(!loading && !lesson) || isPaid}>
                            <span>Посмотрел вебинар? Обрати внимание на курс!</span>
                            <Locky hide={!loading && !lesson}>
                                <StyledAwesomeIcon type="lock" />
                            </Locky>
                        </Label>
                        <Title>{data?.course?.title ?? ''}</Title>
                        <Description>{data?.course?.description ?? ''}</Description>
                        <FeatureList>
                            {features.map(({ Icon: IconComponent, text }, i) => (
                                <Feature key={i}>
                                    <IconComponent color="purple" />
                                    <p>{text}</p>
                                </Feature>
                            ))}
                        </FeatureList>
                        {isPaid
                            ? null
                            : (
                                <SaleInfo>
                                    <StyledIconPrize color="purple" />
                                    <h5>Неделя тест-драйва за 200 р.</h5>
                                </SaleInfo>
                            )}
                    </InfoArea>
                    <PriceInfo isPaid={isPaid}>
                        <StyledButton
                            onClick={() => history.push(isPaid ? {
                                pathname: '/courses',
                                state: {
                                    slug,
                                },
                            } : {
                                pathname: '/pay',
                                state: {
                                    ids: [courseId],
                                },
                            })}
                        >
                            {isPaid ? 'Продолжить обучение' : (
                                <>
                                    Купить курс&nbsp;
                                    <span>
                                        от
                                        {' '}
                                        {data?.course?.cost ?? 0}
                                        {' '}
                                        руб
                                    </span>
                                </>
                            )}
                        </StyledButton>
                        <Price>
                            <h2>{`от ${data?.course?.cost ?? 0} руб.`}</h2>
                            <h4>в месяц</h4>
                        </Price>
                    </PriceInfo>
                </>
            )}
        </TabContentRoot>
    );
};

export default TabContent;
