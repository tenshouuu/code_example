import styled from 'styled-components';
import { StyledLinkButtonProps } from './index';
import { getColorByName } from '../../../helpers';
import {
    getHoverStyles,
} from './helpers';

export const LinkButtonRoot = styled.div<StyledLinkButtonProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    width: fit-content;
    height: 20px;
    padding: 4px 12px;
    cursor: pointer;
    background-color: ${getColorByName('gray')};
    font-size: 10px;
    font-weight: 500;
    line-height: 1em;
    border-radius: 4px;
    transition: 0.3s;
    color: ${({ color }) => getColorByName(color)};

    &:hover, & > a:hover {
        ${getHoverStyles}
    }
`;
