import styled, { css } from 'styled-components';
import {
    getColorByName,
    getMediaWidthByName,
} from '@client/helpers';
import {
    Icon,
} from './components';


export const AuthRoot = styled.div`
    width: 100%;
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    background-color: ${getColorByName('purple')};
    position: relative;
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        justify-content: flex-start;
    }
`;

export const Background = styled.img`
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: top;
`;

export const PlayerUi = styled.div`
    position: absolute;
    bottom: 70px;
    width: 70%;
    &::after, &::before {
        position: absolute;
        content: '';
        left: 0;
        top: 0;
        border-radius: 8px;
        display: block;
        height: 8px;
        width: 100%;
        background-color: ${getColorByName('white', 0.5)};
    }
    &::before{
        width: 40%;
        background-color: ${getColorByName('white')};
    }
`;

const uiIcon = css`
    position: absolute;
    top: -18px;
    width: 44px;
    height: 44px;
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        top: -11px;
        width: 30px;
        height: 30px;
    }
`;

export const PlayIcon = styled(Icon.Play)`
    ${uiIcon};
    left: -65px;
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        left: -35px;        
    }
`;

export const FullscreenIcon = styled(Icon.Fullscreen)`
    ${uiIcon};
    right: -75px;
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 25px;
        height: 25px;
        right: -35px;        
    }
`;

export const Logo = styled.img`
    position: relative;
    margin: 16px auto;
`;
