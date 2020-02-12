import * as styledComponents from 'styled-components';

import { Tokens } from './theme';

const {
    default: styled,
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Tokens>;

export {
    css,
    createGlobalStyle,
    keyframes,
    ThemeProvider,
};
export default styled;
