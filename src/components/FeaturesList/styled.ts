import styled, { css } from 'styled-components';
import {
    createTypographyStyleByName,
    getColorByName,
    getFamilyByName,
    getMediaWidthByName,
} from '@client/helpers';
import { Button, Icon } from '@client/ui/components';
import { SubscribeWebinarsLink } from '@client/containers';

export const SecondaryTitle = styled.div`
    display: none;
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: block;
        ${createTypographyStyleByName('paragraph1')};
        color: ${getColorByName('white')};
    }

`;

export const MainTitle = styled.div`
    color: ${getColorByName('white')};
    ${createTypographyStyleByName('header2')};
    margin-bottom: 28px;
`;

export const StyledCheckedIcon = styled(Icon.Checked)`
    width: 28px;
`;
export const StyledCloseIcon = styled(Icon.Close)`
    width: 24px;
    margin: -12px;
    padding: 12px;

`;

export const BgLabel = styled.div`
   font-family: ${getFamilyByName('bold')};
   color: ${getColorByName('white', 0.1)};
   font-size: 386px;
   position: absolute;
   left: -40px;
   bottom: 0;
`;

export const Label = styled.div`
    padding-left: 30px;
    grid-column: 1 / span 1;
    ${createTypographyStyleByName('paragraph1')};
    font-family: ${getFamilyByName('medium')};
    color: ${getColorByName('white')};
    text-align: right;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 40px;
    position: relative;
`;

export const FreeFeature = styled.div`
    padding-right: 40px;
`;
export const PayFeature = styled.div``;

export const StyledTitle = styled.h2`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    ${createTypographyStyleByName('header3')};
    color: ${getColorByName('white')};

    &:nth-child(3n) {
        padding-right: 40px;
    }
`;

export const FreeBlock = styled.div`
    grid-row: 1 / span 8;
    grid-column: 2 / span 1;
    filter: contrast(120%) brightness(0.8);
    padding-right: 40px;
    height: 100%;

    & > div {
        border-radius: 36px;
        width: 100%;
        height: 100%;
        background-color: ${getColorByName('purple')};
    }
`;

export const Promo = styled.div`
    position: absolute;
    right: -44px;
    top: 12px;
    color: ${getColorByName('white')};
    background-color: ${getColorByName('darkBlue')};
    padding: 4px 32px;
    transform: rotate(26deg);
    width: 160px;
    text-align: center;

    ${createTypographyStyleByName('button1')};
`;

export const PayBlock = styled.div`
    position: relative;
    border-radius: 36px;
    margin-top: -28px;
    height: calc(100% + 28px);
    grid-row: 1 / span 10;
    grid-column: 3 / span 1;
    overflow: hidden;
    background-image: linear-gradient(
        208deg,
        ${getColorByName('yellow')} 16%,
        ${getColorByName('orange')} 100%
    );
`;

export const StyledLink = styled(SubscribeWebinarsLink)`
    margin-top: 16px;
    display: inline-block;
    color: ${getColorByName('white')};
    ${createTypographyStyleByName('header5')};
    border-bottom: 1px dashed ${getColorByName('white')};
`;

export const SubscribtionWrapper = styled.div`
    position: relative;
    text-align: center;
    grid-row: 8 / span 1;
    grid-column: 2 / span 1;
    padding-right: 40px;
`;

export const StyledButton = styled(Button)`
    width: calc(100% - 40px);
    margin: 0 auto;
    height: 54px;
    border-radius: 6px;
    grid-row: 8 / span 1;
    grid-column: 3 / span 1;
    ${createTypographyStyleByName('paragraph1')};
    font-family: ${getFamilyByName('medium')};
`;

export const GridArea = styled.div`
    display: grid;
    position: relative;
    margin-top: 28px;
    grid-template-columns: 1fr 366px 326px;
    grid-template-rows: 78px repeat(3, 55px 70px) 64px 28px;

    ::before {
        content: '';
        display: block;
        width: 0;
        height: 0;
    }

    ${FreeBlock},
    ${PayBlock} {
        width: 100%;
        position: absolute;
    }

    ${FreeFeature},
    ${PayFeature} {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        ${createTypographyStyleByName('header3')};
        color: ${getColorByName('white')};
    }

    ${FreeFeature}:nth-child(2n) {
        background-color: ${getColorByName('white', 0.15)};
    }

    ${Label},
    ${PayFeature} {
        &:nth-child(2n + 1) {
            background-color: ${getColorByName('white', 0.15)};
        }
    }
`;

function renderResponsiveStyles({ isResponsive }) {
    return isResponsive ? css`
        @media (max-width: ${getMediaWidthByName('semiDesktop')}) {
            padding: 30px;
            ${GridArea} {
                grid-template-columns: 1fr 320px 280px;
                grid-template-rows: 58px repeat(3, 45px 50px) 64px 28px;
            }

            ${StyledTitle} {
                ${createTypographyStyleByName('header4')};
            }

            ${Label},
            ${StyledButton} {
                ${createTypographyStyleByName('paragraph2')};
                font-family: ${getFamilyByName('medium')};
            }

            ${FreeFeature},
            ${PayFeature} {
                ${createTypographyStyleByName('header4')};
            }

            ${StyledCheckedIcon} {
                width: 20px;
            }
            ${StyledCloseIcon} {
                width: 16px;
            }
        }
        @media (max-width: ${getMediaWidthByName('mobile')}) {
            ${GridArea} {
                ::before {
                    display: none;
                }
                margin-top: 12px;
                grid-template-columns: 1fr 1fr;
                grid-template-rows: 74px repeat(6, 32px 50px) [buy] 54px [subscription] 64px;
                column-gap: 12px;
            }
            ${StyledButton} {
                width: 100%;
                grid-column: 1 / span 2;
                box-shadow: 0 -12px 40px 12px ${getColorByName('darkPurple')};
                background-image: linear-gradient(
                    208deg,
                    ${getColorByName('yellow')} 16%,
                    ${getColorByName('orange')} 100%
                );
                grid-row: buy;
            }
            ${Label} {
                padding: 0;
                grid-column: 1 / span 2;
                justify-content: center;
                background-color: ${getColorByName('white', 0.15)};
            }
            ${FreeBlock} {
                padding-right: 0;
                grid-column: 1 / span 1;
                grid-row: 1 / span 13;
                filter: contrast(80%) brightness(1.1);
            }
            ${FreeFeature} {
                padding: 0;
                background-color: transparent;
                filter: none;
                :nth-child(2n + 1) {
                    background-color: transparent;
                }
            }
            ${PayFeature} {
                background-color: transparent;
                filter: none;
                :nth-child(2n) {
                    background-color: transparent;
                }
            }
            ${PayBlock} {
                grid-column: 2 / span 1;
                grid-row: 1 / span 13;
                margin-top: 0;
                height: 100%;
            }
            ${StyledTitle} {
                padding: 0 20px;
                ${createTypographyStyleByName('header5')};
            }
            ${SubscribtionWrapper} {
                grid-row: subscription;
                grid-column: 1 / span 2;
                text-align: center;
                padding: 0;
                margin-top: 12px;
            }
            ${MainTitle} {
                margin-bottom: 12px;
                ${createTypographyStyleByName('header4')};
            }
            ${BgLabel} {
                font-size: 200px;
            }
            ${Promo} {
                transform: rotate(37deg);
                right: -52px
            }
        }
    ` : css``;
}


export const FeaturesListRoot = styled.div<{ isResponsive: boolean }>`
    position: relative;
    overflow: hidden;
    background-color: ${getColorByName('purple')};
    padding: 60px 74px 60px 84px;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: ${getMediaWidthByName('desktopMini')}) {
        padding: 60px 44px 60px;
    }

    ${renderResponsiveStyles};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        background-color: ${getColorByName('darkPurple')};
        padding: 32px 16px;
        border-radius: 0;
    }


`;
