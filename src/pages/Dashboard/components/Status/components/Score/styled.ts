import styled from 'styled-components';
import {
    createTypographyStyleByName,
    getColorByName,
} from '@client/helpers';


export const ScoreRoot = styled.div`
    position: relative;
    grid-area: score;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    white-space: nowrap;
    color: ${getColorByName('white')};
    ${createTypographyStyleByName('header4')};
`;
