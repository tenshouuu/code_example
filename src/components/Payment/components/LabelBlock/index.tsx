import React, { FunctionComponent } from 'react';

import {
    Title,
    Description,
    Block,
    Price,
    StyledLinkButton,
    LabelBlockRoot,
} from './styled';

export interface LabelBlockProps {
    title: string;
    price: number;
    submitText?: string;
    description: string | React.ReactElement;
    submitAction(...args: any): void;
}

type Props = LabelBlockProps;

const LabelBlock: FunctionComponent<Props> = ({
    title,
    price,
    description,
    submitText,
    submitAction,
    ...props
}) => (
    <LabelBlockRoot {...props}>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Block>
            <Price>{`${price} р.`}</Price>
            <StyledLinkButton onClick={() => submitAction()}>{submitText ?? 'Купить'}</StyledLinkButton>
        </Block>
    </LabelBlockRoot>
);

export default LabelBlock;
