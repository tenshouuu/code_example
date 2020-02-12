import styled from 'styled-components';

import {
    getColorByName,
    getMediaWidthByName,
} from '@client/helpers';

export const TestWrapper = styled.div`
    height: 360px;
    width: 640px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        background-color: ${getColorByName('purple')};
    }
`;

export const LoadingRoot = styled.div`
    height: 100%;
    width: 100%;
    padding: 30px 6.28vw 30px 30px;
    background-color: ${getColorByName('white')};

    @media (max-width: ${getMediaWidthByName('semiDesktop')}) {
        padding-right: 0;
        width: 100%;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 24px 16px;
        border-radius: 36px;
    }
`;

export const DashboardRoot = styled.div`
    grid-column-gap: 22px;
    display: inline-block;
    padding-right: 6.28vw;
    height: 100%;
    width: 100%;

    @media (min-width: ${getMediaWidthByName('mobile')}) {
        background-color: ${getColorByName('lightGray')};
    }

    @media (max-width: ${getMediaWidthByName('semiDesktop')}) {
        padding-right: 30px;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding-right: 0;
        border-radius: 0 0 36px 36px;
        width: 100%;
        display: block;
    }
`;


/*
@media (max-width: ${getMediaWidthByName('semiDesktop')}) {
        display: flex;
        grid-template-columns: 1fr 0;
        overflow: hidden;
        padding-right: 0;
        width: 100%;
    }
* */
