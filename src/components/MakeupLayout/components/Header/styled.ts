import styled from 'styled-components';
import {
    getColorByName,
    getMediaWidthByName,
} from '@client/helpers';
import { Icon } from '@client/ui/components';

export const LogoWrapper = styled.div`
    cursor: pointer;
    width: 170px;
    margin-right: 10px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        position: absolute;
        margin: 0 auto;
        left: calc(50% - 18vw);
        display: initial;
        width: 37.5vw;
    }
`;
export const Logo = styled(Icon.Logo)`
    width: 100%;
`;

export const HeaderRoot = styled.header`
    grid-area: header;
    width: 100%;
    position: relative;
    box-shadow: 0 2px 14px rgba(140, 91, 249, 0.1);
    padding: 16px 6.28vw 16px 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${getColorByName('white')};

    & > div:first-child {
        display: none;
    }

    & > img:nth-child(3) {
        display: initial;
        margin-right: 10px;
    }

    & > *:last-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex: 1;
    }

    @media (max-width: ${getMediaWidthByName('semiDesktop')}) {
        & {
            padding: 16px 30px 16px;
        }
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        & {
            background-color: ${getColorByName('purple')};
            padding: 5vw 5vw 6.25vw;
            width: 100%;
            height: 100%;
        }

        & > div:first-child {
            display: block;
        }

        & > *:last-child {
            flex: initial;
        }
    }
`;
