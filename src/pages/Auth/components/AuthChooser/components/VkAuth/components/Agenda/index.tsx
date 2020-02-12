import React, { FunctionComponent } from 'react';
import {
    AgendaRoot,
    Step,
    StepText,
} from './styled';

export interface StepProps {
    active: boolean;
}

const Steps = [
    {
        id: 'firstStep',
        active: true,
        name: 'Вход',
    },
    {
        id: 'secondStep',
        active: false,
        name: 'Тест',
    },
    {
        id: 'thirdStep',
        active: false,
        name: 'Бесплатный урок',
    },
];

const Agenda: FunctionComponent<{}> = props => (
    <AgendaRoot>
        {
            Steps.map(({ active, name, id }) => (
                <Step
                    active={active}
                    key={id}
                >
                    <StepText>{name}</StepText>
                </Step>
            ))
        }
    </AgendaRoot>
);

export default Agenda;
