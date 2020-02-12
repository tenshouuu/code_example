import styled from 'styled-components';
import {
    getColorByName,
    getMediaWidthByName,
} from '@client/helpers';
import { Teacher } from './components';
import { FeaturesList } from '../../../../../src/components';

export const StyledTeacher = styled(Teacher)`
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        clip-path: inset(0px round 0 0 36px 36px);
    }
`;

export const StartRoot = styled.div`
    padding: 26px 0 30px 30px;

    & > *:not(:last-child) {
        margin-bottom: 32px;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 0;

        & > *:not(:last-child) {
            margin-bottom: 0;
        }
    }
`;

export const StyledFeaturesList = styled(FeaturesList)`
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: none;
    }
`;

export const LoadingRoot = styled.section`
    padding: 30px;
    margin: 30px 0 30px 30px;
    border-radius: 16px;
    background-color: ${getColorByName('white')};

    & > *:not(:last-child) {
        margin-bottom: 32px;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 30px 16px;
        overflow: hidden;
        border-radius: 36px;
        margin: 0;
        width: 100%;
        height: 100%;
    }
`;
