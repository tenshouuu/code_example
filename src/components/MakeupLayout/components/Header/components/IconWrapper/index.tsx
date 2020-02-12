import React from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

import { AwesomeIcon as Icon } from '@client/ui/components';
import { IconProps } from '@client/ui/components/AwesomeIcon';
import { getColorByName, getTypographyByName } from '@client/helpers';

interface LinkIconProps extends IconProps {
    to?: string;
    disabled?: boolean;
}

function getDisabledStyles() {
    return ({ disabled }) => (disabled ? css`
        opacity: 0.5;
        pointer-events: none;
    ` : '');
}

const IconWrapperRoot = styled(Link)<{ disabled: boolean }>`
    visibility: hidden;
    cursor: pointer;
    width: 40px;
    min-width: 40px;
    height: 40px;
    min-height: 40px;
    border-radius: 50%;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${props => getTypographyByName('paragraph1')(props).size};
    transition: 0.3s;
    color: ${getColorByName('darkGray')};
    background-color: ${getColorByName('lightGray')};

    ${getDisabledStyles()}

    &:hover {
        background-color: ${getColorByName('gray')};
    }
`;

export default function IconWrapper(props: LinkIconProps): React.ReactElement {
    const {
        to = '/dashboard',
        disabled = false,
        type = 'ring',
        ...newProps
    } = props;
    return (
        <IconWrapperRoot to={to} disabled={disabled} {...newProps}>
            <Icon type={type} />
        </IconWrapperRoot>
    );
}
