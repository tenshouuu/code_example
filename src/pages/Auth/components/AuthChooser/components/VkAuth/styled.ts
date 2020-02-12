import styled from 'styled-components';
import { Button } from '@client/ui/components';
import {
    createTypographyStyleByName,
    getColorByName,
    getMediaWidthByName,
    getShadowByName,
} from '@client/helpers';


export const VkAuthRoot = styled.div`
    position: relative;
    background-color: ${getColorByName('purple')};
    width: 100%;
    min-width: 460px;
    margin-top: 24px;
    padding: 66px 66px;
    max-width: 350px;
    min-height: 200px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: ${getShadowByName('depth3')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        min-width: 0;
        width: calc(100% - 5vw);
        padding: 0 0 60px;
        margin-bottom: 40px;
    }
`;

export const Content = styled.div`
    width: 100%;
    padding-bottom: 30px;
    text-align: center;
    box-sizing: border-box;
    color: ${getColorByName('white')};
    
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 30px 30px 20px;
    }    

    & > h2 {
        ${createTypographyStyleByName('header3')};
        @media (max-width: ${getMediaWidthByName('mobile')}) {
            ${createTypographyStyleByName('header4')}
        }
    }

    & > p {
        margin-top: 20px;
        ${createTypographyStyleByName('paragraph1')};
        @media (max-width: ${getMediaWidthByName('mobile')}) {
            ${createTypographyStyleByName('paragraph3')}
        }
    }

`;

export const VkLogo = styled.img`
    margin-right: 8px;
`;

export const StyledButton = styled(Button)`
    margin-top: 18px;
    text-transform: uppercase;
    white-space: nowrap;
`;
