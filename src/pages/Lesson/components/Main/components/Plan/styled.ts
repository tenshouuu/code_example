import styled from 'styled-components';
import { createTypographyStyleByName, getColorByName, getMediaWidthByName } from '@client/helpers';

export const PlanRoot = styled.section`
    background-color: ${getColorByName('gray')};

    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar{
      width: 5px;
    }
    &::-webkit-scrollbar-track {
      background-color: ${getColorByName('lightGray')};
    }
    &::-webkit-scrollbar-thumb {
      background-color: ${getColorByName('darkGray')};
    }

    & > h2 {
        margin-bottom: 18px;
        color: ${getColorByName('darkBlue')};
        ${createTypographyStyleByName('header3')};
    }


    @media (max-width: ${getMediaWidthByName('mobile')}) {
      height: min-content;
      max-height: 400px;
    }
`;
