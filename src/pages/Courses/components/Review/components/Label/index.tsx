import React, { FunctionComponent } from 'react';
import * as moment from 'moment';

import {
    Icon, withSubject, Button,
} from '@client/ui/components';
import { WithSubjectProps } from '@client/ui/components/SubjectProvider';

import {
    StyledSubject,
    CourseInfo,
    PaymentInfo,
    PacmanWrapper,
    InfoBlock,
    FeatureList,
    StyledAwesomeIcon,
    StyledLink,
} from './styled';

export interface LabelProps {
    id: string;
    title: string;
    cost: number;
    startsAt: string;
    endsAt: string;
    lessonsCount: number;
}

const featureList = [
    '72 урока',
    '100 часов занятий',
    '3 этапа обучения',
    '6 месяцев подготовки',
];

const Label: FunctionComponent<WithSubjectProps & LabelProps> = ({
    id,
    title,
    cost,
    startsAt,
}) => (
    <StyledSubject selected={false}>
        <PacmanWrapper>
            <Icon.Pacman />
        </PacmanWrapper>
        <CourseInfo>
            <h2>{title}</h2>
            <div>
                <StyledAwesomeIcon type="schedule" />
                <InfoBlock>
                    <p>Старт занятий</p>
                    <p>{moment.utc(startsAt).local().format('DD.MM.YYYY')}</p>
                </InfoBlock>
                <InfoBlock>
                    <p>Уже на курсе</p>
                    <p>252 ученика</p>
                </InfoBlock>
            </div>
            <FeatureList>
                {featureList.map((text, i) => <li key={i}><span>{text}</span></li>)}
            </FeatureList>
        </CourseInfo>
        <PaymentInfo>
            <p>
                <span>{`${cost} р.`}</span>
                    в месяц
            </p>
            <StyledLink
                to={{
                    pathname: '/pay',
                    state: {
                        ids: [id],
                    },
                }}
            >
                <Button type="rounded" color="yellow">НАЧАТЬ ОБУЧЕНИЕ</Button>
            </StyledLink>
            <p>Дешевле 210 р. за час занятий</p>
        </PaymentInfo>
    </StyledSubject>
);

export default withSubject(Label);
