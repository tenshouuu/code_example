import styled from 'styled-components';
import {
    createTypographyStyleByName,
    getColorByName,
    getMediaWidthByName,
} from '@client/helpers';

export const BasketRoot = styled.div`
    background-color: ${getColorByName('white')};
    color: ${getColorByName('darkBlue')};

    & > h2 {
        ${createTypographyStyleByName('header3')};
        margin-bottom: 20px;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        & > h2 {
            text-align: center;
        }
    }
`;

export const CourseArea = styled.div`
    width: 100%;

    & > *:not(:last-child) {
        margin-bottom: 20px;
    }
`;

export const EmptyBlock = styled.div`
    text-align: center;
    color: ${getColorByName('darkGray')};
`;
