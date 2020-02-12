import React, { FunctionComponent } from 'react';

import { Button } from '@client/ui/components';
import { StyledContainer, Info, LinkedButton } from './styled';

interface OwnProps {
    title: string;
    label: string;
    price: string;
    period?: string;
    link?: string;
}

type Props = OwnProps;

const Container: FunctionComponent<Props> = ({
    title,
    label,
    price,
    period = 'месяц',
    link = '#',
}) => (
    <StyledContainer isPrice={!!price}>
        <h4>{title}</h4>
        <p>{label}</p>
        <Info>
            {price ? (
                <div>
                    <h2>{`${price} р.`}</h2>
                    <p>{`за ${period}`}</p>
                </div>
            ) : ''}
            <LinkedButton to={link}>
                <Button color={price ? 'yellow' : 'purple'}>
                    {price ? 'Оплатить' : 'Смотреть'}
                </Button>
            </LinkedButton>
        </Info>
    </StyledContainer>
);

export default Container;
