import styled from 'styled-components';

import { css, getColorByName, getMediaWidthByName } from '@client/helpers';
import { MakeupLayoutState } from './index';

export const MakeupLayoutRoot = styled.div<MakeupLayoutState>`
    display: grid;
    min-height: 100vh;
    grid-template-areas:
        ". header"
        "nav main"
        "nav footer";
    grid-template-columns: 88px 1fr;
    grid-template-rows: 72px 1fr 0;
    background-color: ${getColorByName('purple')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        background-color: ${getColorByName('purple')};
        grid-template-areas:
            "header"
            "nav"
            "main"
            "footer";
        grid-template-columns: 1fr;
        grid-template-rows:
            calc(28px + 11.25vw)
            ${({ isShowMenu }) => (isShowMenu ? '1fr 0 98px' : '0 1fr 98px')};
    }
`;
