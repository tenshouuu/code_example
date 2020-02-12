import React, { FunctionComponent } from 'react';
import { ColorType } from '@client/helpers/theme';
import { LinkButtonRoot } from './styled';

export interface LinkButtonProps {
    children?: string;
    href?: string;
    color?: ColorType;
    [key: string]: any;
}

export interface StyledLinkButtonProps extends LinkButtonProps {
    color: ColorType;
}


type Props = LinkButtonProps;

const LinkButton: FunctionComponent<Props> = ({
    color = 'purple',
    children,
    ...props
}) => (
    <LinkButtonRoot
        color={color}
        {...props}
    >
        { children }
    </LinkButtonRoot>
);


export default LinkButton;
