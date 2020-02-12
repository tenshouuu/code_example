import * as theme from './theme';

export { theme };
export { useInterval, useMergeState } from './hooks';
export {
    getColorByName,
    getMediaWidthByName,
    getShadowByName,
    getTypographyByName,
    getFamilyByName,
    getGradientColorByName,
    createTypographyStyleByName,
} from './decorators';

export {
    default as styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider,
} from './styled-components';

export {
    RoutesType,
    RouteType,
    TextFormsType,
} from './types';

export {
    replaceNull,
    isTestHost,
    declOfNum,
    getStaticMediaWidthNyName,
    convertCssRgbA,
    hexToRgbA,
    mapSubjects,
    slugDeclension,
} from './tools';
