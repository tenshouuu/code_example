import styled from 'styled-components';
import {
    createTypographyStyleByName, getColorByName, getFamilyByName, getMediaWidthByName,
} from '@client/helpers';

export const Title = styled.h2`
    ${createTypographyStyleByName('header2')};
    color: ${getColorByName('darkBlue')};
    margin-bottom: 14px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        text-align: center;
        ${createTypographyStyleByName('header4')};
    }
`;
export const Description = styled.p`
    ${createTypographyStyleByName('paragraph1')};
    color: ${getColorByName('darkBlue')};
    margin-bottom: 20px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin-bottom: 16px;
    }
`;
export const List = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin-bottom: 14px;
        flex-wrap: nowrap;
        justify-content: space-around;
    }
`;
export const Feature = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 12px;

    & > *:first-child {
        width: 42px;
    }

    & > p {
        margin-left: 12px;
        margin-right: 16px;
        max-width: calc(70px + 5vw);
        ${createTypographyStyleByName('paragraph2')};
        color: ${getColorByName('darkGray')};
    }

    &:first-child > p {
        max-width: 100px;
    }

    &:last-child > p {
        margin-right: 0;
    }

    @media (min-width: ${getMediaWidthByName('semiLight')}) {
        & > p {
            max-width: calc(80px + 5vw);
        }
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        flex-direction: column;

        &:not(:last-child) {
            margin-right: 8px;
        }

        &:first-child {
            padding-top: 4px;

            & > p {
                max-width: 80px;
                margin: 18px 0 0;
            }
        }

        &:nth-child(2) > p {
            max-width: 110px;
            margin: 16px 0 0;
        }

        &:nth-child(3) > p {
            max-width: 100px;
            margin: 12px 0 0;
        }

        & > p {
            text-align: center;

            & > br {
                display: none;
            }
        }
    }
`;


export const InfoRoot = styled.div<{ isFeatures: boolean }>`
    ${List} {
        ${({ isFeatures }) => (isFeatures ? '' : 'display: none')};
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 0 16px;
    }
`;
