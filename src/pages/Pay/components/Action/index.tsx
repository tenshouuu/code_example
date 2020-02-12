import React, { FunctionComponent } from 'react';

import { SubjectProvider } from '@client/ui/components';
import { SubjectsEnum } from '@client/apollo/schemaTypes';

import {
    ActionRoot,
    PriceWrapper,
    ButtonWrapper,
    StyledButton,
    StyledPacman,
} from './styled';

interface OwnProps {
    title: string;
    price: number;
    label: string;
    link: string;
}

type Props = OwnProps;

const Action: FunctionComponent<Props> = ({
    title,
    price,
    label,
    link,
}) => (
    <SubjectProvider
        value={{
            subjectType: SubjectsEnum.Rus,
        }}
    >
        <ActionRoot>
            <StyledPacman firstColor="#b24fff" secondColor="#b85bff" />
            <h2>{title}</h2>
            <PriceWrapper>
                <p>
                    <span>{`${price} р. `}</span>
                    <span>в месяц</span>
                </p>
                <p>
                    {label}
                </p>
            </PriceWrapper>
            <ButtonWrapper href={link}>
                <StyledButton type="rounded">КУПИТЬ ПРЕМИУМ</StyledButton>
            </ButtonWrapper>
        </ActionRoot>
    </SubjectProvider>
);

export default Action;
