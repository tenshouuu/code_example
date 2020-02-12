import styled from 'styled-components';
import { createTypographyStyleByName, getColorByName, getMediaWidthByName } from '@client/helpers';
import { Animate } from '@client/containers';

export const FuryRoadRoot = styled.div`
    position: relative;
    box-sizing: border-box;
    height: 100%;
    max-height: 100%;
    overflow: hidden;
    padding: 0;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 0;
    }
`;
// background-image: linear-gradient(180deg, ${getColorByName('white', 0.001)} 0%, ${getColorByName('white')} 100%);

export const Title = styled.h3`
    ${createTypographyStyleByName('header3')};
    color: ${getColorByName('darkBlue')};
    margin-bottom: 18px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin-bottom: 12px;
        text-align: center;
    }
`;

export const AnimateWrapper = styled(Animate)`
    width: 100%;
    height: 100%;
    max-height: 100%;
    overflow: hidden;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: block;
        height: min-content;
        overflow-x: scroll;
        overflow-y: hidden;
    }
`;
