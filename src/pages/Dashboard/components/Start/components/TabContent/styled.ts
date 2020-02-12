import styled, { css } from 'styled-components';
import {
    createTypographyStyleByName,
    getColorByName,
    getFamilyByName,
    getGradientColorByName,
    getMediaWidthByName,
} from '@client/helpers';
import {
    AwesomeIcon,
    Button, Icon,
    Skeleton,
} from '@client/ui/components';
import { SubscribeWebinarsLink } from '@client/containers';

export interface HideProps {
    hide: boolean;
}

export const StyledAwesomeIcon = styled(AwesomeIcon)``;
export const StyledSkeleton = styled(Skeleton)``;

export const SkeletonWrapper = styled.div`
  & > *:not(:last-child) {
      margin-bottom: 32px;
  }
`;

export const EmptyPlaceholder = styled.div`
    color: ${getColorByName('darkBlue')};
    ${createTypographyStyleByName('header4')};
`;
export const WebinarArea = styled.div<HideProps>`
    border-radius: 6px;
    grid-row: 1 / span 2;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${getColorByName('lightGray')};
    margin-right: 42px;
    min-height: 430px;
    height: 31vw;

    & > ${StyledSkeleton} {
        height: 100%;
        border-radius: 6px;
        overflow: hidden;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 100%;
        grid-row: 1 / span 1;
        min-height: 280px;
        margin-bottom: 20px;

        ${({ hide }) => (hide ? 'display: none' : '')};
    }
`;

export const Label = styled.div<HideProps>`
    margin-bottom: 16px;
    display: flex;
    justify-content: space-between;
    color: ${getColorByName('darkBlue')};
    ${createTypographyStyleByName('paragraph3')};
    font-family: ${getFamilyByName('medium')};
    ${({ hide }) => (hide ? 'display: none' : '')};
`;

export const Title = styled.div`
    margin-bottom: 16px;
    color: ${getColorByName('purple')};
    ${createTypographyStyleByName('header2')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin-bottom: 12px;
        ${createTypographyStyleByName('header3')};
    }
`;

export const Description = styled.p`
    margin-bottom: 26px;
    color: ${getColorByName('darkBlue')};
    ${createTypographyStyleByName('paragraph1')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        ${createTypographyStyleByName('paragraph3')};
        margin-bottom: 20px;
    }
`;

export const StyledIconPrize = styled(Icon.Gift)`
    width: 28px;
    margin-right: 16px;
`;
export const SaleInfo = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 22px;

    & > h5 {
        ${createTypographyStyleByName('paragraph1')};
        font-family: ${getFamilyByName('medium')};
        color: ${getColorByName('darkBlue')};
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        & > h5 {
            ${createTypographyStyleByName('header5')};
        }
    }
`;

export const FeatureList = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin-bottom: 22px;
    }
`;

export const Feature = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    width: calc(50% - 12px);

    &:nth-child(2n + 1) {
        margin-right: 24px;
    }

    & > *:first-child {
        margin-right: 12px;
        width: 32px;
    }

    & > ${StyledAwesomeIcon} {
        font-size: 32px;
        color: ${getColorByName('purple')};
    }

    & > p {
        color: ${getColorByName('darkGray')};
        ${createTypographyStyleByName('paragraph2')};
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin-bottom: 12px;
        width: calc(50% - 6px);

        &:nth-child(2n + 1) {
            margin-right: 12px;
        }

        & > p {
           ${createTypographyStyleByName('paragraph3')};
           & > br {
              display: none;
           }
        }
    }
`;

export const StyledButton = styled(Button)`
    height: 54px;
    min-height: 54px;
    width: 190px;
    min-width: max-content;
    border-radius: 6px;
    display: flex;
    align-items: center;
    margin-right: 16px;
    justify-content: center;
    background-image: linear-gradient(
        67deg,
        ${getGradientColorByName('darkElectricViolet')} -9%,
        ${getGradientColorByName('darkHeliotrope')} 56%
    );
    color: ${getColorByName('white')};
    ${createTypographyStyleByName('paragraph1')};
    font-family: ${getFamilyByName('medium')};

    &:hover {
        background-position: 100%;
    }

    @media (min-width: ${getMediaWidthByName('mobile')}) {
        & > span {
            display: none;
        }
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        flex: 1;
        margin: 0 auto;
        min-width: 280px;
        width: 100%;
    }
`;

export const InfoArea = styled.div`
    width: 100%;
    position: relative;
    min-width: 430px;
    display: flex;
    flex-direction: column;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        grid-row: 2 / span 1;
        min-width: 100%;
    }
`;

export const ShadowWrapper = styled.div`
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin: 0 -16px;
        padding: 0 16px;
        box-shadow: 0 -30px 30px 0px ${getColorByName('gray')};
    }
`;

export const StyledSubscribeWebinarsLink = styled(SubscribeWebinarsLink)`
    margin-top: 22px;
    width: max-content;
    display: inline-block;
    color: ${getColorByName('purple')};
    ${createTypographyStyleByName('header5')};
    border-bottom: 1px dashed ${getColorByName('purple')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: block;
        margin: 24px auto 0;
    }
`;

export const Price = styled.div`
    align-items: center;
    align-self: flex-start;
    color: ${getColorByName('darkBlue')};

    & > h2 {
        ${createTypographyStyleByName('header3')};
    }

    & > h4 {
        ${createTypographyStyleByName('header4')};
    }
`;


function renderStylesByIsPaid({ isPaid }) {
    return isPaid ? css`
        flex-direction: column;

        ${Price} {
            display: none;
        }

        @media (max-width: ${getMediaWidthByName('mobile')}) {
            align-items: center;
        }
    ` : css`
        flex-wrap: wrap;

        ${Price} {
            flex: auto;
        }

        @media (max-width: ${getMediaWidthByName('mobile')}) {
            align-items: center;
            border-top: 0;

            ${Price} {
                display: none;
                flex: initial;
            }
        }
    `;
}

export const PriceInfo = styled.div<{ isPaid: boolean }>`
    border-top: 2px solid ${getColorByName('gray')};
    padding-top: 28px;
    display: flex;
    align-self: flex-start;
    grid-row: 2 / span 1;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        grid-row: 3 / span 1;
        position: sticky;
        bottom: 0;
        margin: 0 -16px;
        border-top: 0;
        padding: 20px 16px 26px;
        background-color: ${getColorByName('white')};

        &:before {
            content: "";
            width: 100%;
            height: 46px;
            background-image: linear-gradient(
                to bottom,
                rgba(255,255,255,0) 0%,
                rgba(225,225,242,1) 95%
            );
            position: absolute;
            top: -46px;
            left: 0;
        }
    }

    ${renderStylesByIsPaid}
`;

export const Locky = styled.div<HideProps>`
    width: 40px;
    min-width: 40px;
    height: 40px;
    margin-top: -18px;
    margin-right: -12px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    background-color: ${getColorByName('darkBlue')};

    & > ${StyledAwesomeIcon} {
        font-size: 16px;
        color: ${getColorByName('white')};
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin-top: 0;
        margin-right: 0;

        ${({ hide }) => (hide ? 'display: none' : '')};
    }

`;

export const TabContentRoot = styled.div`
    display: grid;
    grid-template-columns: 1fr minmax(430px, 34%);
    grid-template-rows: min-content 1fr;
    position: relative;
    padding: 30px 24px;
    background-color: ${getColorByName('white')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        grid-template-columns: 1fr;
        grid-template-rows: min-content min-content min-content;
        clip-path: initial !important;
        flex-direction: column;
        padding: 24px 16px 0;
    }
`;
