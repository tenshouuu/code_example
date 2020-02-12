import styled, { css, FlattenInterpolation } from 'styled-components';
import {
    Button,
    Modal,
    Icon,
} from '@client/ui/components';
import {
    createTypographyStyleByName,
    getColorByName, getMediaWidthByName, getShadowByName,
} from '@client/helpers';

export const PreviewModalRoot = styled(Modal)`
    color: ${getColorByName('white')};
    background-color: ${getColorByName('purple')};
    padding: 46px 100px 36px;
    overflow: hidden;
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        min-width: 0;
    }
    & > * {
        position: relative;
    }
    
    & > svg:last-child {
        width: 16px;
        right: 22px;
        top: 22px;
    }
`;

export const Title = styled.div`
    ${createTypographyStyleByName('header3')};
    margin-bottom: 20px;
`;

export const Description = styled.div`
    ${createTypographyStyleByName('paragraph1')};
    margin-bottom: 24px;
`;

export const Area = styled.div`
    position: relative;
    background-color: ${getColorByName('white')};
    padding: 10px 12px;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: ${getShadowByName('depth4')};

    &:before {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: ${getColorByName('purple', 0.6)};
    }
`;

export const Panel = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    margin-bottom: 8px;

    & > div {
        width: 8px;
        height: 8px;
        margin-right: 4px;
        border-radius: 50%;
        background-color: ${getColorByName('white')};
    }
`;

export const PreviewImg = styled.img`
    position: relative;
    width: 360px;
    border-radius: 0 0 6px 6px;
    box-shadow: ${getShadowByName('depth4')};
`;


export const StyledButton = styled(Button)`
    margin-top: 26px;
    min-width: 206px;
    background-image: linear-gradient(
        225deg,
        ${getColorByName('yellow')} 0%,
        ${getColorByName('orange')} 100%
    );
    box-shadow: ${getShadowByName('depth4')};

    &:hover {
        opacity: 1;
    }
`;

export const StyledPacman = styled(Icon.Pacman)`
    position: absolute;
    width: 500px;
    right: -78px;
    transform: translateX(35%);
    top: 38%;
`;
