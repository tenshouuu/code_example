import { StyledButtonProps } from '@client/ui/components/Button';
import { css, FlattenSimpleInterpolation } from 'styled-components';
import { getColorByName, getTypographyByName } from '@client/helpers';

import { ButtonTypes } from './consts';

export const getHoverEffects = () => css`
    :hover {
         box-shadow: inset 0 0 100px 100px rgba(0,0,0,0.1);
    }
    :disabled:hover {
      box-shadow: none;
    }
  `;

export const getHeight = () => ({ styleType }: StyledButtonProps): number => {
    let height = 40;
    switch (styleType) {
        case ButtonTypes.rounded:
            height = 60;
            break;
        case ButtonTypes.large:
            height = 54;
            break;
        case ButtonTypes.long:
        case ButtonTypes.arrow:
        default:
            break;
    }
    return height;
};

export const getWidth = () => ({ styleType }: StyledButtonProps): number => {
    let width = 139;
    switch (styleType) {
        case ButtonTypes.rounded:
            width = 200;
            break;
        case ButtonTypes.large:
            width = 190;
            break;
        case ButtonTypes.long:
            width = 208;
            break;
        case ButtonTypes.arrow:
            width = 92;
            break;
        default:
            break;
    }
    return width;
};

export const getRadius = () => ({ styleType }: StyledButtonProps): number => {
    let radius = 6;
    switch (styleType) {
        case ButtonTypes.rounded:
            radius = 32;
            break;
        case ButtonTypes.large:
            radius = 8;
            break;
        default:
            break;
    }
    return radius;
};

export const getFontSize = () => ({ styleType, ...props }: StyledButtonProps): string => {
    let fontSize = '12px';
    switch (styleType) {
        case ButtonTypes.rounded:
            fontSize = getTypographyByName('paragraph2')(props).size;
            break;
        case ButtonTypes.large:
            fontSize = getTypographyByName('paragraph1')(props).size;
            break;
        default:
            fontSize = getTypographyByName('paragraph3')(props).size;
            break;
    }
    return fontSize;
};

export const getBgColor = () => (componentProps: StyledButtonProps): string => {
    const { styleType, color = 'purple', ...props } = componentProps;
    let colorValue = getColorByName(color)(props);
    switch (styleType) {
        case ButtonTypes.rounded:
            if (color !== 'yellow' && color !== 'purple') {
                colorValue = getColorByName('purple')(props);
            }
            break;
        case ButtonTypes.large:
            colorValue = getColorByName('pink')(props);
            break;
        case ButtonTypes.long:
            if (color !== 'gray' && color !== 'white') {
                colorValue = getColorByName('pink')(props);
            }
            break;
        case ButtonTypes.arrow:
            if (color !== 'darkGray') {
                colorValue = getColorByName('darkGray')(props);
            }
            break;
        default:
            if (color !== 'purple' && color !== 'lightGreen'
                    && color !== 'darkGray' && color !== 'yellow') {
                colorValue = getColorByName('darkGray')(props);
            }
            break;
    }
    return colorValue;
};

export const getGutter = () => (componentProps: StyledButtonProps): FlattenSimpleInterpolation => {
    const { gutter } = componentProps;
    return css`
        width: auto;
        max-width: 100%;
        padding: 0 ${gutter}px;
    `;
};

export const getDisabledStyles = () => (componentProps: StyledButtonProps): FlattenSimpleInterpolation => {
    const { disabled } = componentProps;
    return disabled ? css`
        pointer-events: none;
        opacity: 0.8;
    ` : css``;
};
