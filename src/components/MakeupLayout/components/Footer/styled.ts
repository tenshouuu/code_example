import styled from 'styled-components';
import {
    createTypographyStyleByName,
    getColorByName, getMediaWidthByName,
    getTypographyByName,
} from '@client/helpers';

import { FooterProps } from './index';

export const FooterRoot = styled.footer<{ isShowMenu: boolean }>`
    grid-area: footer;
    padding: 0;
    display: flex;
    overflow: hidden;
    flex-direction: ${({ isShowMenu }) => (isShowMenu ? 'column' : 'column-reverse')};
    justify-content: center;
    align-items: center;
    background-color: ${getColorByName('purple')};
    @media(max-width: ${getMediaWidthByName('mobile')}) {
        padding: 18px 5vw 20px;
    }

    & > div,
    & > p,
    & > div:hover,
    & > div:visited {
        display: block;
        color: ${getColorByName('white')};
        text-align: center;
    }

    & > p,
    & > div:first-child {
        font-size: ${props => getTypographyByName('paragraph3')(props).size};
    }

    & > div:first-child {
        ${({ isShowMenu }) => (isShowMenu ? 'margin-bottom' : 'margin-top')}: 12px;
    }

    & > p {
        ${createTypographyStyleByName('paragraph3')};
    }
`;
