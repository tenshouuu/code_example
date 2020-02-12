import React, { FunctionComponent } from 'react';

import { Lesson, Maybe, Module } from '@client/apollo/schemaTypes';

import { ColorType } from '@client/helpers/theme';
import withWebinars, { ChildProps } from './data';
import {
    StyledAbout,
    StyledTitle,
    Content,
    Info,
    Features,
    Feature,
    WebinarWrapper,
    StyledWebinar,
    StyledButton,
    StyledLinkWrapper,
    StyledDisabledButton,
} from './styled';
import { Modules } from './components';
import Title from '../Title';

export interface AboutProps {
    courseId: string;
    description: string;
    modules: Maybe<Module>[];
}

interface FeatureType {
    label: string;
    color: ColorType;
}

const features: FeatureType[] = [
    {
        label: 'Награды за успеваемость',
        color: 'lightGreen',
    },
    {
        label: 'Блок тайм-менеджмента',
        color: 'purple',
    },
    {
        label: 'Проверка домашних работ',
        color: 'yellow',
    },
    {
        label: 'Блок о саморазвитии',
        color: 'pink',
    },
];

const About: FunctionComponent<AboutProps & ChildProps> = ({
    description,
    courseId,
    modules,
    data,
}) => {
    let lessonItem: Maybe<Lesson> | undefined;
    if (!data.error && !data.loading
        && data.dashboardStartWebinarsV2 && data.dashboardStartWebinarsV2.length > 0) {
        // eslint-disable-next-line prefer-destructuring
        lessonItem = data.dashboardStartWebinarsV2[0];
    }
    return (
        <StyledAbout>
            <StyledTitle>О курсе обучения</StyledTitle>
            <Content>
                <Info>
                    <p>
                        {description}
                    </p>
                    <Features>
                        {features.map(({ label, color }, i) => (
                            <Feature
                                key={i}
                                color={color || 'white'}
                            >
                                <div>{label[0]}</div>
                                <p>{label}</p>
                            </Feature>
                        ))}
                    </Features>
                </Info>
                {lessonItem
                    ? (
                        <WebinarWrapper>
                            <StyledWebinar
                                data={lessonItem}
                                desktopType="verticalLarge"
                                mobileType="semiHorizontalSmall"
                            />
                        </WebinarWrapper>
                    )
                    : ''}
            </Content>
            <Modules data={modules} />
            <Title>
                Присоединяйся к курсу прямо
                сейчас и получи доступ к будущим урокам
            </Title>
            <StyledLinkWrapper to={{
                pathname: '/pay',
                state: {
                    ids: [courseId],
                },
            }}
            >
                <StyledButton color="yellow">Купить курс</StyledButton>
            </StyledLinkWrapper>
        </StyledAbout>
    );
};

export default withWebinars(About);
