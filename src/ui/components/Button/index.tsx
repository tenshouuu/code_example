import React, { ButtonHTMLAttributes, FunctionComponent } from 'react';
import { ColorType } from '@client/helpers/theme';
import {
    ButtonType,
    ButtonGutter,
} from './helpers/consts';
import { ButtonRoot } from './styled';

export interface ButtonProps {
    children?: any;
    type?: ButtonType;
    color?: ColorType;
    gutter?: ButtonGutter;
    htmlType?: ButtonHTMLAttributes<any>['type'];
    disabled?: boolean;
    [key: string]: any;
}

export interface StyledButtonProps extends ButtonProps {
    styleType?: ButtonType;
}

const Button: FunctionComponent<ButtonProps> = ({
    gutter = '24',
    type = 'default',
    color = 'purple',
    htmlType = 'button',
    children,
    disabled = false,
    ...props
}) => (
    <ButtonRoot
        gutter={gutter}
        color={color}
        styleType={type}
        type={htmlType}
        disabled={disabled}
        {...props}
    >
        { children }
    </ButtonRoot>
);


export default Button;
