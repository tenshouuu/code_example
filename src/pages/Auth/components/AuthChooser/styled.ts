import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
    createTypographyStyleByName,
    getColorByName,
    getFamilyByName,
    getMediaWidthByName,
    getShadowByName,
} from '@client/helpers';

export const AuthChooserRoot = styled.div`
    position: relative;
    background-color: ${getColorByName('purple')};
    width: 100%;
    min-width: 460px;
    margin-top: 24px;
    max-width: 350px;
    min-height: 200px;
    border-radius: 30px;
    padding: 32px 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: ${getShadowByName('depth3')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        min-width: 0;
        width: calc(100% - 5vw);
        padding: 24px 40px;
        margin-bottom: 40px;
    }
`;

export const Content = styled.div`
    width: 100%;
    text-align: center;

    & > h2 {
        margin-bottom: 24px;
        color: ${getColorByName('white')};
        ${createTypographyStyleByName('header2')}
    }
`;

export const Social = styled.div`
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
`;

export const LinkStyled = styled(Link)`
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #5181b8;
    color: ${getColorByName('white')};
    font-family: ${getFamilyByName('regular')};
    width: 60px;
    height: 60px;
    border-radius: 50%;
    transition: 0.3s;

    &:hover {
        opacity: 0.8;
    }
`;
