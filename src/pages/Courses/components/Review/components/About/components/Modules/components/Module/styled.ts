import styled from 'styled-components';
import {
    createTypographyStyleByName, getColorByName, getFamilyByName, getShadowByName,
} from '@client/helpers';

const Header = styled.div`
    padding: 12px 20px;
    background-color: ${getColorByName('purple')};
    min-height: 40px;
    width: 100%;
    color: ${getColorByName('white')};
    ${createTypographyStyleByName('paragraph3')};
    font-family: ${getFamilyByName('medium')};
`;

const Content = styled.div`
    padding: 24px 20px 36px;
    background-color: ${getColorByName('white')};
    min-height: 40px;
    width: 100%;

    & > h5 {
        margin-bottom: 12px;
        color: ${getColorByName('purple')};
        ${createTypographyStyleByName('header5')}
    }

    & > p {
        color: ${getColorByName('darkBlue')};
        ${createTypographyStyleByName('paragraph3')}
    }
`;

const StyledModule = styled.article`
    display: flex;
    flex-direction: column;
    border-radius: 6px;
    overflow: hidden;
    text-align: center;
    box-shadow: ${getShadowByName('depth4')};

    & > ${Header},
    & > ${Content} {
        box-sizing: border-box;
    }
`;

export {
    StyledModule,
    Header,
    Content,
};
