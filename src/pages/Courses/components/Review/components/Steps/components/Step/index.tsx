import React, { FunctionComponent } from 'react';

import { Icon } from '@client/ui/components';

import { StyledStep, NumberOval, Info } from './styled';

export interface StepProps {
    index: number;
    title: string;
    description: string;
}

type Props = StepProps;

const Step: FunctionComponent<Props> = ({
    title,
    description,
    index,
    ...props
}) => (
    <StyledStep {...props}>
        <div>
            <NumberOval>
                <h2>{`0${index}`}</h2>
                <Icon.Oval />
            </NumberOval>
            <h5>{title}</h5>
        </div>
        <Info>
            <h5>{title}</h5>
            <p>{description}</p>
        </Info>
    </StyledStep>
);

export default Step;
