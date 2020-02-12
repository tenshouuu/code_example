import styled from 'styled-components';

import { getColorByName, getMediaWidthByName } from '@client/helpers';

import { Payment } from '@client/components';
import { Plan } from './components';

export const SkeletonWrapper = styled.div`
    flex: 1;
    width: 100%;
    min-height: 100%;
    padding: 20px;
    background-color: ${getColorByName('white')};
`;

export const StyledPayment = styled(Payment)`
    grid-area: payment;
`;
export const StyledContent = styled(Plan)`
    grid-area: content;
`;

export const Panel = styled.div`
    max-height: 100%;
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-areas: "content payment";
    grid-template-columns: 1fr minmax(262px, 22%);
    grid-template-rows: 1fr;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        grid-template-areas: "content" "payment";
        grid-template-columns: 1fr;
        grid-template-rows: min-content min-content;
        border-radius: 0 0 36px 36px;
    }
`;

export const MainRoot = styled.div`
    height: 100%;
    min-height: 100%;
    width: 100%;
    display: flex;
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: block;
        max-height: 100%;
        min-height: auto;
    }
`;
