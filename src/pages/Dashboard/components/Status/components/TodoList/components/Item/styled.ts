import styled from 'styled-components';
import { createTypographyStyleByName, getColorByName } from '@client/helpers';


export const ItemRoot = styled.div`
    display: grid;
    grid-template:
        "text rating";
    align-items: center;
    ${createTypographyStyleByName('button1')};
    padding: 13px 0 ;
        
    & + & {
        border-top: 2px solid ${getColorByName('gray')};
    }
`;

export const Text = styled.div`
    grid-area: text;
`;

export const Rating = styled.div`
    grid-area: rating;
    justify-self: end;
    text-align: right;
    color: ${getColorByName('purple')};

    &::before {
        content: 'Ты получишь';
        display:block;
        color: ${getColorByName('darkGray')};
        ${createTypographyStyleByName('paragraph3')};
    }
`;
