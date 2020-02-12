import styled from 'styled-components';
import { getColorByName, getMediaWidthByName } from '@client/helpers';

export const MainRoot = styled.main<{ isFixedHeight: boolean }>`
    grid-area: main;
    height: 100%;
    width: 100%;
    background-color: ${getColorByName('white')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        background-color: transparent;
        ${({ isFixedHeight }) => (isFixedHeight ? 'overflow: hidden;' : '')};
    }
`;

export const Fallback = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${getColorByName('white')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        border-radius: 36px;
    }
`;
