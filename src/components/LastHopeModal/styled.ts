import styled from 'styled-components';
import {
    createTypographyStyleByName,
    getColorByName,
    getMediaWidthByName,
    getShadowByName,
} from '@client/helpers';

import {
    Button,
    Modal,
    Input, Icon,
} from '@client/ui/components';

export const StyledPacman = styled(Icon.Pacman)`
    position: absolute;
    right: -320px;
    bottom: -460px;
`;

export const Doggy = styled(Icon.Doggy)`
    position: absolute;
    top: -160px;
    left: -22px;
    width: 136px;
    animation-name: doggy-animation;
    animation-duration: 1.5s;
    animation-timing-function: ease;
    animation-delay: 500ms;
    animation-iteration-count: infinite;
    animation-direction: normal;
    
    @keyframes doggy-animation {
        0%{
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
        20%{
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
        40%{
          -webkit-transform: translateY(-30px);
          transform: translateY(-40px);
        }
        50%{
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
        60%{
          -webkit-transform: translateY(-20px);
          transform: translateY(-20px);
        }
        80%{
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
        100%{
          -webkit-transform: translateY(0);
          transform: translateY(0);
        }
    }
`;

export const Placeholder = styled.div`
    width: 98px;
    height: 10px;
    border-radius: 50%;
    background-color: #580da0;
`;

export const DoggyArea = styled.div`
    position: relative;
    display: inline-block;
    margin: 126px auto 24px;
`;


export const StyledInput = styled(Input.MaskInput)`
    width: 248px;
    text-align: center;
    margin: 0 auto;
    color: ${getColorByName('darkGray')};
`;

export const Title = styled.h2`
    ${createTypographyStyleByName('header2')};
    margin-bottom: 22px;
`;

export const Label = styled.h4`
    ${createTypographyStyleByName('header4')};
    margin-bottom: 16px;
`;

export const ContentWrapper = styled.div`
    position: relative;
    width: 100%;
    color: ${getColorByName('white')};
    background-color: ${getColorByName('purple')};
    padding: 46px 54px 64px;
    border-radius: 16px;
    
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        min-width: 0;
    }
    
    & > *:not(${StyledPacman}) {
        position: relative;
    }
`;

export const LastHopeModalRoot = styled(Modal)`
    padding: 30px 0 0 0;
    width: 560px;
    overflow: hidden;
    background-color: transparent;
    
    & > svg:last-child {
        width: 20px;
        right: 22px;
        top: 50px;
    }
`;

export const StyledButton = styled(Button)`
    margin-top: 24px;
    min-width: 248px;
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
