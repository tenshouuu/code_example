import React, { FunctionComponent } from 'react';
import { useHistory } from 'react-router';
import { useSubject } from '@client/ui/components';

import {
    FeaturesListRoot,
    GridArea,
    StyledCheckedIcon,
    StyledCloseIcon,
    FreeFeature,
    PayFeature,
    FreeBlock,
    PayBlock,
    StyledTitle,
    Label,
    Promo,
    StyledButton,
    StyledLink,
    BgLabel,
    MainTitle,
    SubscribtionWrapper,
    SecondaryTitle,
} from './styled';

export interface FeaturesListProps {
    price?: number;
    courseId?: string;
    isPaid?: boolean;
    responsiveMode?: boolean;
}

type Props = FeaturesListProps;

const fetures = [
    {
        name: 'Вебинаров в неделю',
        free: 1,
        pay: 3,
    },
    {
        name: 'Рассылка материалов',
        free: true,
        pay: true,
    },
    {
        name: 'Индивидуальное обучение',
        free: false,
        pay: true,
    },
    {
        name: 'Личный наставник',
        free: false,
        pay: true,
    },
    {
        name: 'Командная работа',
        free: false,
        pay: true,
    },
    {
        name: 'Подарки за успехи',
        free: false,
        pay: true,
    },
];

const FeaturesList: FunctionComponent<Props> = (props) => {
    const history = useHistory();
    const slug = useSubject();

    const renderIcon = (val: boolean | number) => {
        if (typeof val === 'boolean') {
            return val ? <StyledCheckedIcon /> : <StyledCloseIcon />;
        }
        return val;
    };
    const {
        price = 0,
        courseId = '',
        isPaid = false,
        responsiveMode = false,
        ...rest
    } = props;

    return (
        <FeaturesListRoot
            isResponsive={responsiveMode}
            {...rest}
        >
            <MainTitle>Смотреть бесплатно или купить курс?</MainTitle>
            <SecondaryTitle>Выбери, что выгоднее для тебя</SecondaryTitle>
            <BgLabel>VS</BgLabel>
            <GridArea>
                <FreeBlock>
                    <div />
                </FreeBlock>
                <PayBlock>
                    <Promo>суперхит</Promo>
                </PayBlock>
                <StyledTitle>Бесплатное обучение</StyledTitle>
                <StyledTitle>Платное обучение</StyledTitle>
                {fetures.map(({ name, free, pay }, i) => (
                    <React.Fragment key={i}>
                        <Label>{name}</Label>
                        <FreeFeature>{renderIcon(free)}</FreeFeature>
                        <PayFeature>{renderIcon(pay)}</PayFeature>
                    </React.Fragment>
                ))}
                <SubscribtionWrapper>
                    <StyledLink slug={slug}>
                        <>
                            Подписаться на вебинары
                        </>
                    </StyledLink>
                </SubscribtionWrapper>
                <StyledButton
                    color="purple"
                    onClick={() => {
                        if (courseId ?? price !== 0) {
                            history.push(isPaid ? {
                                pathname: '/courses',
                                state: {
                                    slug,
                                },
                            } : {
                                pathname: '/pay',
                                state: {
                                    ids: [courseId],
                                },
                            });
                        }
                    }}
                >
                    {isPaid ? 'Продолжить обучение' : `Купить курс от ${price} руб.`}
                </StyledButton>
            </GridArea>
        </FeaturesListRoot>
    );
};

export default FeaturesList;
