import styled from 'styled-components';
import { getColorByName, getFamilyByName } from '@client/helpers';
import { StyledButtonProps } from '@client/ui/components/Button';
import {
    getBgColor,
    getFontSize,
    getHeight,
    getRadius,
    getWidth,
    getGutter,
    getHoverEffects,
    getDisabledStyles,
} from './helpers';

export const ButtonRoot = styled.button<StyledButtonProps>`
    display: inline-block;
    cursor: pointer;
    text-align: center;
    appearance: none;
    border-width: 0;
    outline: none;
    position: relative;
    transition: 0.3s;
    font-family: ${getFamilyByName('medium')};
    height: ${getHeight()}px;
    width: ${getWidth()}px;
    min-width: ${getWidth()}px;
    border-radius: ${getRadius()}px;
    font-size: ${getFontSize()};
    color: ${getColorByName('white')};
    background-color: ${getBgColor()};
    ${getGutter};
    ${getHoverEffects};
    ${getDisabledStyles};
`;
