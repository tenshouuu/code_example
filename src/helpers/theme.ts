interface PaletteType {
    yellow: string;
    orange: string;
    lightPink: string;
    pink: string;
    lightPurple: string;
    semiPurple: string;
    purple: string;
    darkPurple: string;
    darkBlue: string;
    semiBlue: string;
    lightBlue: string;
    white: string;
    lightGray: string;
    gray: string;
    darkGray: string;
    lightGreen: string;
    red: string;
}

export interface GradientTypes {
    yellow: string;
    gold: string;
    sunsetOrange: string;
    orange: string;
    monaLisa: string;
    red: string;
    supernova: string;
    chartreuse: string;
    greenYellow: string;
    lima: string;
    caribbeanGreen: string;
    malachite: string;
    azureRadiance: string;
    blue: string;
    lightElectricViolet: string;
    carnationPink: string;
    electricViolet: string;
    heliotrope: string;
    darkElectricViolet: string;
    darkHeliotrope: string;
    snuff: string;
    goldenTainoi: string;
    razzleDazzleRose: string;
}

export interface FontStyleType {
    family: string;
    weight: number;
    size: string;
    spacing: string;
    lineHeight: string;
}

export interface TypographyType {
    header1: FontStyleType;
    header2: FontStyleType;
    header3: FontStyleType;
    header4: FontStyleType;
    header5: FontStyleType;
    paragraph1: FontStyleType;
    paragraph2: FontStyleType;
    paragraph3: FontStyleType;
    paragraph4: FontStyleType;
    button1: FontStyleType;
}

export interface MediaWidthType {
    full: number;
    semiFull: number;
    semiLight: number;
    desktop: number;
    semiDesktop: number;
    desktopMini: number;
    tabletFull: number;
    tabletMini: number;
    tablet: number;
    mobile: number;
    min: number;
}

export interface ShadowsType {
    depth1: ((opacity?: number) => string);
    depth2: ((opacity?: number) => string);
    depth3: ((opacity?: number) => string);
    depth4: ((opacity?: number) => string);
    depthInset: ((opacity?: number) => string);
    depthWhite: ((opacity?: number) => string);
}

interface GradientType {
    space: string;
    sunrise: string;
    freshCitrus: string;
}

export interface FamiliesType {
    medium: string;
    regular: string;
    bold: string;
}

interface Tokens {
    families: FamiliesType;
    palette: PaletteType;
    typography: TypographyType;
    shadows: ShadowsType;
    mediaWidths: MediaWidthType;
    gradientColors: GradientTypes;
}

const mediaWidths: MediaWidthType = {
    full: 1920,
    semiFull: 1600,
    semiLight: 1500,
    desktop: 1400,
    semiDesktop: 1366,
    desktopMini: 1280,
    tabletFull: 1024,
    tablet: 900,
    tabletMini: 768,
    mobile: 500,
    min: 320,
};
const palette: PaletteType = {
    yellow: '#f5b500',
    orange: '#ff7c00',
    lightPink: '#ff6cab',
    pink: '#f95cde',
    lightPurple: '#8457f6',
    semiPurple: '#7651ff',
    purple: '#6f47d3',
    darkPurple: '#5f38bf',
    lightBlue: '#9cd7ff',
    semiBlue: '#673bff',
    darkBlue: '#363c5f',
    white: '#ffffff',
    lightGray: '#eef1f5',
    gray: '#e1e1f2',
    darkGray: '#9c98c1',
    lightGreen: '#00ce98',
    red: '#ff0407',
};

const gradientColors: GradientTypes = {
    // chemistry
    yellow: '#ffab00',
    gold: '#ffd500',

    // math
    sunsetOrange: '#ff4b45',
    orange: '#ffb439',

    // eng
    monaLisa: '#FF9D9E',
    red: '#ff0407',

    // physics
    supernova: '#FFCD00',
    chartreuse: '#83DF00',

    // history
    greenYellow: '#ABFF2A',
    lima: '#42db35',

    // literature
    caribbeanGreen: '#00ce98',
    malachite: '#00de66',

    // socialStudies
    azureRadiance: '#00A9FF',
    blue: '#1800ff',

    // biology
    lightElectricViolet: '#f500ff',
    carnationPink: '#FF8AD3',

    // informatics
    electricViolet: '#b537ff',
    heliotrope: '#f937ff',

    // rus
    darkElectricViolet: '#6534FF',
    darkHeliotrope: '#AE43FF',

    // inactive
    snuff: '#E1E1F2',

    // chemistry
    goldenTainoi: '#fec65b',
    razzleDazzleRose: '#FF46BD',
};

const families: FamiliesType = {
    medium: 'RubikMedium, OpenSans, OpenSans-Bold',
    regular: 'RubikRegular, OpenSans, OpenSans-Regular',
    bold: 'RubikBold, OpenSans, OpenSans-Regular',
};

const typography: TypographyType = {
    header1: {
        family: families.medium,
        weight: 700,
        size: '2.75rem', // 44px
        spacing: 'normal',
        lineHeight: '3.25rem', // 52px
    },
    header2: {
        family: families.medium,
        weight: 500,
        size: '1.875rem', // 30px
        spacing: 'normal',
        lineHeight: '2.25rem', // 36px
    },
    header3: {
        family: families.medium,
        weight: 500,
        size: '1.5rem', // 24px
        spacing: 'normal',
        lineHeight: '1.75rem', // 28px
    },
    header4: {
        family: families.medium,
        weight: 500,
        size: '1.125rem', // 18px
        spacing: 'normal',
        lineHeight: '1.375rem', // 22px
    },
    header5: {
        family: families.medium,
        weight: 500,
        size: '0.875rem', // 14px
        spacing: 'normal',
        lineHeight: '1.125', // 18px
    },
    paragraph1: {
        family: families.regular,
        weight: 400,
        size: '1rem', // 16px
        spacing: 'normal',
        lineHeight: '1.375rem', // 22px
    },
    paragraph2: {
        family: families.regular,
        weight: 400,
        size: '0.875rem', // 14px
        spacing: 'normal',
        lineHeight: '1.125rem', // 18px
    },
    paragraph3: {
        family: families.regular,
        weight: 400,
        size: '0.75rem', // 12px
        spacing: 'normal',
        lineHeight: '1rem', // 16px
    },
    paragraph4: {
        family: families.regular,
        weight: 400,
        size: '0.625rem', // 10px
        spacing: 'normal',
        lineHeight: '0.875rem', // 14px
    },
    button1: {
        family: families.medium,
        weight: 500,
        size: '0.75rem', // 12px
        spacing: 'normal',
        lineHeight: '0.875rem', // 14px
    }
};

const shadows: ShadowsType = {
    depth1: (opacity = 0.25) => (`0px 2px 16px rgba(0, 0, 0, ${opacity})`),
    depth2: (opacity = 0.39) => `0 2px 14px rgba(156, 152, 193, ${opacity})`,
    depth3: (opacity = 0.4) => `0 15px 55px rgba(54, 60, 95, ${opacity})`,
    depth4: (opacity = 0.1) => `0 2px 24px 0 rgba(111, 71, 211, ${opacity})`,
    depthInset: (opacity = 0.04) => `inset 0px 2px 4px rgba(0, 0, 0, ${opacity})`,
    depthWhite: (opacity = 0.5) => `0 2px 10px rgba(209, 209, 209, ${opacity})`,
};

const tokens: Tokens = {
    families,
    palette,
    typography,
    shadows,
    mediaWidths,
    gradientColors,
};

export type ColorType = keyof PaletteType | null;

export {
    tokens,
    Tokens,
};
