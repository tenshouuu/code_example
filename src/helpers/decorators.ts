import {
    ColorType,
    FamiliesType,
    FontStyleType,
    MediaWidthType,
    ShadowsType,
    TypographyType,
} from './theme';

function hexToRgbA(hex, opacity = 1) {
    let c;
    if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
        c = hex.substring(1).split('');
        if (c.length === 3) {
            c = [c[0], c[0], c[1], c[1], c[2], c[2]];
        }
        c = `0x${c.join('')}`;
        // eslint-disable-next-line no-bitwise
        return [(c >> 16) & 255, (c >> 8) & 255, c & 255, opacity];
    }
    return hex;
}

function convertCssRgbA(hex, opacity = 1) {
    const valuesArray = hexToRgbA(hex, opacity);
    if (valuesArray.length === 4) {
        return `rgba(${valuesArray.join(',')})`;
    }
    return hex;
}

function getColorByName(colorName: ColorType, opacity = 1): (props: any) => string {
    return (props) => {
        const { theme } = props;
        return colorName
            ? convertCssRgbA(theme.palette[colorName], opacity)
            : convertCssRgbA(theme.palette.white, opacity);
    };
}

function getGradientColorByName(colorName: string, opacity = 1): (props: any) => string {
    return (props) => {
        const { theme } = props;
        return convertCssRgbA(theme.gradientColors[colorName] || '#fff', opacity);
    };
}

function getTypographyByName(typographyName: keyof TypographyType): (props: any) => FontStyleType {
    return (props) => {
        const { theme } = props;
        return theme.typography[typographyName] || '';
    };
}

function getShadowByName(shadowName: keyof ShadowsType, opacity?: number): (props: any) => string {
    return (props) => {
        const { theme } = props;
        return theme.shadows[shadowName](opacity) || '';
    };
}

function getMediaWidthByName(mediaName: keyof MediaWidthType): (props: any) => string {
    return (props) => {
        const { theme } = props;
        return `${theme.mediaWidths[mediaName] || 0}px`;
    };
}

function getFamilyByName(familyName: keyof FamiliesType): (props: any) => string {
    return (props) => {
        const { theme } = props;
        return theme.families[familyName] || '';
    };
}

function createTypographyStyleByName(typographyName: keyof TypographyType): (props: any) => string {
    return (props) => {
        const {
            family,
            weight,
            size,
            spacing,
            lineHeight,
        } = getTypographyByName(typographyName)(props);
        return `
            font-family: ${family};
            font-weight: ${weight};
            font-size: ${size};
            letter-spacing: ${spacing};
            line-height: ${lineHeight};
        ` || '';
    };
}

export {
    getColorByName,
    getMediaWidthByName,
    getShadowByName,
    getTypographyByName,
    getFamilyByName,
    getGradientColorByName,
    createTypographyStyleByName,
};
