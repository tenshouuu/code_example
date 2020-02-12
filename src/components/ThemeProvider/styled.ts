import slickCss from 'slick-carousel/slick/slick.css';
import slickCssTheme from 'slick-carousel/slick/slick-theme.css';

import { createGlobalStyle, getColorByName, getMediaWidthByName } from '@client/helpers';
import RubikMediumWoff from '@client/assets/fonts/Rubik-Medium.woff';
import RubikMediumWoff2 from '@client/assets/fonts/Rubik-Medium.woff2';
import RubikLight from '@client/assets/fonts/Rubik-Light.ttf';
import RubikRegularWoff from '@client/assets/fonts/Rubik-Regular.woff';
import RubikRegularWoff2 from '@client/assets/fonts/Rubik-Regular.woff2';
import RubikBoldWoff from '@client/assets/fonts/Rubik-Bold.woff';
import RubikBoldWoff2 from '@client/assets/fonts/Rubik-Bold.woff2';
import IconsWoff from '@client/ui/assets/icons/example.woff';

/* eslint-disable max-len */

export default createGlobalStyle`
    ${slickCss}
    ${slickCssTheme}

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        outline: 0;
        font-size: 100%;
        vertical-align: baseline;
        box-sizing: border-box;
    }

    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    a, area, button,[
    role='button'], input:not([type='range']),
    label, select, summary, textarea {
        touch-action: manipulation;
    }

    textarea {
        overflow: auto;
        resize: vertical;
    }

    blockquote::before, blockquote::after,
    q::before, q::after {
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a {
        text-decoration: none;
    }

    @font-face {
        font-display: block;
        font-family: RubikMedium;
        src:
            url(${RubikMediumWoff2}) format('woff2'),
            url(${RubikMediumWoff}) format('woff');
    }

    @font-face {
        font-display: block;
        font-family: RubikBold;
        src:
            url(${RubikBoldWoff2}) format('woff2'),
            url(${RubikBoldWoff}) format('woff');
    }

    @font-face {
        font-display: block;
        font-family: RubikLight;
        src: url(${RubikLight});
    }

    @font-face {
        font-display: swap;
        font-family: RubikRegular;
        src:
            url(${RubikRegularWoff2}) format('woff2'),
            url(${RubikRegularWoff}) format('woff');
    }

    @font-face {
        font-display: block;
        font-family: Examica;
        src:
            url(${IconsWoff}) format('woff');
        font-weight: normal;
        font-style: normal;
    }

    [class^="icon-"], [class*=" icon-"] {
        font-family: Examica, RubikMedium, -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
        speak: none;
        font-style: normal;
        font-weight: normal;
        font-variant: normal;
        text-transform: none;
        line-height: 1;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    .icon-close:before {
        content: "\\e916";
    }

    .icon-message:before {
        content: "\\e915";
    }

    .icon-unlock:before {
        content: "\\e914";
    }

    .icon-vk:before {
        content: "\\e913";
    }

    .icon-search::before {
        content: "\\e900";
    }

    .icon-view::before {
        content: "\\e901";
    }

    .icon-score::before {
        content: "\\e902";
    }

    .icon-ruble::before {
        content: "\\e903";
    }

    .icon-ring::before {
        content: "\\e904";
    }

    .icon-rate::before {
        content: "\\e905";
    }

    .icon-lock::before {
        content: "\\e906";
    }

    .icon-like::before {
        content: "\\e907";
    }

    .icon-chat::before {
        content: "\\e908";
    }

    .icon-schedule::before {
        content: "\\e909";
    }

    .icon-settings::before {
        content: "\\e90a";
    }

    .icon-pazzle::before {
        content: "\\e90b";
    }

    .icon-user::before {
        content: "\\e90c";
    }

    .icon-job::before {
        content: "\\e90d";
    }

    .icon-guard::before {
        content: "\\e90e";
    }

    .icon-attention::before {
        content: "\\e90f";
    }

    .icon-checked::before {
        content: "\\e910";
    }

    .icon-arrow::before {
        content: "\\e911";
    }

    .icon-add::before {
        content: "\\e912";
    }

    .icon-play:before {
        content: "\\ea15";
    }

    svg {
        height: auto;
    }

    html {
        font-size: 16px;
        line-height: 16px;
        background-color: ${getColorByName('purple')};
    }

    body {
        margin: 0;
        min-height: 100vh;
        min-width: ${getMediaWidthByName('min')};
        font-family: RubikMedium, -apple-system, BlinkMacSystemFont, "Roboto", sans-serif;
        -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
    }

    *::-moz-selection,
    *::selection {
        color: ${getColorByName('white')};
        background-color: ${getColorByName('purple', 0.8)};
    }


    ::-webkit-scrollbar {
        width: 10px;
        height: 10px;
    }

    ::-webkit-scrollbar-track {
        border-radius: 10px;
        background-color: ${getColorByName('white')};
    }

    ::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background-color: ${getColorByName('gray')};
    }

    @media (min-width: ${getMediaWidthByName('desktop')}) {
        html {
            font-size: calc((100vw - 1400px) / (1920 - 1400) * (18 - 16) + 16px);
            line-height: calc((100vw - 1400px) / (1920 - 1400) * (18 - 16) + 16px);
        }
    }

    @media (min-width: ${getMediaWidthByName('min')}) and (max-width: ${getMediaWidthByName('mobile')}) {
        html {
            font-size: calc((100vw - 320px) / (500 - 320) * (18 - 16) + 16px);
            line-height: calc((100vw - 320px) / (500 - 320) * (18 - 16) + 16px);
        }
    }
`;
