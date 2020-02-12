import { getColorByName, getGradientColorByName } from '@client/helpers';

import { subjectType as rootSubjectType } from '@client/ui/components';
import { css, FlattenInterpolation } from 'styled-components';
import { ButtonTypes } from './consts';

function createGradient(leftColor, rightColor, deg = 135, animated) {
    // eslint-disable-next-line max-len
    return props => (
        animated
            ? css`
                transition: background .3s;
                background-size: 200%;
                background-image:
                    linear-gradient(${deg}deg,
                        ${getGradientColorByName(leftColor)(props)} 0%,
                        ${getGradientColorByName(rightColor)(props)} 100%,
                        ${getGradientColorByName(leftColor)(props)} 200%);
                :hover {
                    background-position: 100%;
                }
            `
            : css`
                background-image:
                    linear-gradient(${deg}deg,
                    ${getGradientColorByName(leftColor)(props)} 0%,
                    ${getGradientColorByName(rightColor)(props)} 100%);
            `
    );
}

const getGradient: (componentProps) => FlattenInterpolation<any> = (componentProps) => {
    const {
        animated,
        subjectType,
        ...props
    } = componentProps;
    let gradient;
    switch (subjectType) {
        case rootSubjectType.chemistry:
            gradient = createGradient(
                'yellow',
                'gold',
                253,
                animated,
            )(props);
            break;
        case rootSubjectType.physics:
            gradient = createGradient(
                'chartreuse',
                'supernova',
                253,
                animated,
            )(props);
            break;
        case rootSubjectType.math:
            gradient = createGradient(
                'orange',
                'sunsetOrange',
                253,
                animated,
            )(props);
            break;
        case rootSubjectType.eng:
            gradient = createGradient(
                'monaLisa',
                'red',
                51,
                animated,
            )(props);
            break;
        case rootSubjectType.history:
            gradient = createGradient(
                'greenYellow',
                'lima',
                56,
                animated,
            )(props);
            break;
        case rootSubjectType.literature:
            gradient = createGradient(
                'caribbeanGreen',
                'malachite',
                253,
                animated,
            )(props);
            break;
        case rootSubjectType.socialStudies:
            gradient = createGradient(
                'azureRadiance',
                'blue',
                55,
                animated,
            )(props);
            break;
        case rootSubjectType.biology:
            gradient = createGradient(
                'lightElectricViolet',
                'carnationPink',
                69,
                animated,
            )(props);
            break;
        case rootSubjectType.informatics:
            gradient = createGradient(
                'electricViolet',
                'heliotrope',
                53,
                animated,
            )(props);
            break;
        case rootSubjectType.rus:
            gradient = createGradient(
                'darkElectricViolet',
                'darkHeliotrope',
                66,
                animated,
            )(props);
            break;
        default:
            gradient = createGradient(
                'snuff',
                'snuff',
                66,
                animated,
            )(props);
            break;
    }
    return gradient;
};

function getBgColor() {
    return (componentProps): string => {
        const { color, ...props } = componentProps;
        const bg = 'initial';
        switch (color) {
            case ButtonTypes.lightBlue:
            case ButtonTypes.default:
            default:
                break;
        }
        return bg;
    };
}

function getColor() {
    return (componentProps): string => {
        const { color, ...props } = componentProps;
        let fontColor = getColorByName('white')(props);
        switch (color) {
            case ButtonTypes.gray:
                fontColor = getColorByName('darkGray')(props);
                break;
            case ButtonTypes.lightBlue:
            case ButtonTypes.default:
            default:
                break;
        }
        return fontColor;
    };
}

export {
    getGradient,
    getColor,
    getBgColor,
};
