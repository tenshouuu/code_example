import styled from 'styled-components';
import { createTypographyStyleByName, getColorByName, getMediaWidthByName } from '@client/helpers';

export const BottomGradient = styled.div`
    display: none;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 28px;
    opacity: 0.27;
    background-image: linear-gradient(to top, ${getColorByName('purple')}, transparent);

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: block;
    }
`;

export const DescriptionRoot = styled.div`
    position: relative;
    display: flex;
    flex-flow: column nowrap;
    flex-grow: 1;
    background-color: ${getColorByName('white')};
    color: ${getColorByName('darkBlue')};
    box-shadow: inset 10px 0 8px -2px rgba(111,71,211,0.1);

    & > h2 {
        ${createTypographyStyleByName('header4')};
        margin-bottom: 16px;
    }

    & > p {
        ${createTypographyStyleByName('paragraph3')};
        color: ${getColorByName('darkGray')};
    }

    & > p:not(:last-child) {
        margin-bottom: 8px;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        box-shadow: initial;
    }
`;

export const PaymentsBox = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
`;
export const PaymentItem = styled.div`
    width: 22%;
    min-width: 50px;
    max-width: 60px;
`;
