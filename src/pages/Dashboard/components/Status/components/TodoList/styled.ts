import styled from 'styled-components';
import {
    createTypographyStyleByName,
    getColorByName,
    getMediaWidthByName,
} from '@client/helpers';


export const TodoListRoot = styled.div`
    margin-top: 20px;
    color: ${getColorByName('darkBlue')};
    width: 100%;
    background-color: ${getColorByName('white')};
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: none;
    }
`;

export const Title = styled.div`
    ${createTypographyStyleByName('header4')};
    text-align: center;
`;
