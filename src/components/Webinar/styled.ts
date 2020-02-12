/* eslint-disable max-len */
import styled, { css, FlattenInterpolation } from 'styled-components';

import {
    Button, AvatarBlock, AwesomeIcon, Icon,
} from '@client/ui/components';
import { MixedWebinarType } from '@client/components/Webinar/index';
import {
    createTypographyStyleByName,
    getColorByName,
    getFamilyByName, getGradientColorByName,
    getMediaWidthByName,
    getShadowByName,
} from '@client/helpers';
import { Countdown } from '@client/components/Webinar/components';

export const Play = styled(AwesomeIcon)`
    position: relative;
    font-size: 50px;
    color: ${getColorByName('white')};
    text-shadow: 0px 0px 6px ${getColorByName('gray')};
`;

export const SvgPreview = styled(Icon.VideoPreview)`
    position: absolute;
    max-height: 100%;
`;

export const Preview = styled.img`
    position: absolute;
    background-color: ${getColorByName('gray')};
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Label = styled.div<{ show: boolean }>`
    left: 0;
    bottom: 24px;
    position: absolute;
    background-color: ${getColorByName('purple')};
    color: ${getColorByName('white')};
    ${createTypographyStyleByName('header4')};
    min-height: 34px;
    min-width: 104px;
    text-align: center;
    line-height: 34px;
    border-top-right-radius: 24px;
    border-bottom-right-radius: 24px;

     ${({ show }) => (show ? '' : 'display: none !important')};
`;

export const PreviewArea = styled.div`
    flex: 1;
    width: 100%;
    display: flex;
    cursor: pointer;
    overflow: hidden;
    position: relative;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background-color: ${getColorByName('gray')};
`;

export const Title = styled.h5`
    width: 100%;
    color: ${getColorByName('purple')};
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    flex-shrink: 0;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
`;

export const Description = styled.p`
    color: ${getColorByName('darkBlue')};
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    flex-shrink: 0;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
`;

export const Panel = styled.div`
    display: flex;
`;

export const Item = styled.div<{ hide?: boolean }>`
    & > p {
        color: ${getColorByName('darkGray')};
    }

    & > h5 {
        color: ${getColorByName('darkBlue')};
    }

    ${({ hide }) => (hide ? 'display: none !important' : '')};
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${getColorByName('white')};
`;

export const StyledAvatarBlock = styled(AvatarBlock)`
    width: 100%;
`;

export const StyledButton = styled(Button)`
    width: 100%;
    height: 54px;
    padding: 0 35px;
    background-image: linear-gradient(90deg, ${getGradientColorByName('darkElectricViolet')} -7%, ${getGradientColorByName('darkHeliotrope')} 57%);
    ${createTypographyStyleByName('paragraph1')};
    font-family: ${getFamilyByName('medium')};
`;

export const StyledLink = styled.a`
    display: block;
    margin-right: 24px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin: 0 auto;
    }
`;

export const StyledCountdown = styled(Countdown)``;

function renderStylesByType() {
    return ({ type }): FlattenInterpolation<any> => {
        let styles: FlattenInterpolation<any> = css``;
        switch (type) {
            case 'horizontalLarge':
                styles = css`
                    flex-direction: column;

                    ${PreviewArea} {
                        min-height: 300px;
                    }

                    ${Info} {
                        flex-direction: row;
                        justify-content: space-between;
                        flex-wrap: wrap;
                        padding: 20px 30px;
                    }

                    ${Title} {
                        ${createTypographyStyleByName('header4')};
                        margin-bottom: 14px;
                    }

                    ${Description} {
                        ${createTypographyStyleByName('header5')};
                        width: calc(60% - 50px);
                        margin-right: 50px;
                        margin-bottom: 14px;
                    }

                    ${StyledAvatarBlock} {
                        width: 40%;
                        margin-bottom: 14px;

                        & > div:first-child {
                            min-width: 58px;
                            min-height: 58px;
                        }
                    }

                    ${Panel} {
                        width: calc(60% - 50px);
                        margin-right: 50px;
                    }

                    ${Item} {
                        &:first-child {
                            margin-right: 30px;
                        }

                        & > p {
                            ${createTypographyStyleByName('paragraph4')};
                        }

                        & > h5 {
                            ${createTypographyStyleByName('header3')};
                        }
                    }

                    ${StyledLink} {
                        width: 40%;
                    }
                `;
                break;
            case 'verticalLarge':
                styles = css`
                    background-color: ${getColorByName('white')};
                    box-shadow: ${getShadowByName('depth4')};
                    flex-direction: row;
                    padding: 24px;

                    ${PreviewArea} {
                        border-radius: 6px;
                    }

                    ${Info} {
                        width: 34%;
                        flex-direction: column;
                        padding: 16px 24px;
                        max-width: 260px;
                        min-width: 200px;
                    }

                    ${Title} {
                        ${createTypographyStyleByName('header4')};
                        margin-bottom: 14px;
                    }

                    ${Description} {
                        ${createTypographyStyleByName('paragraph2')};
                        color: ${getColorByName('darkGray')};
                        margin-bottom: 26px;
                    }

                    ${Panel} {
                        flex-direction: column;
                    }

                    ${Item} {
                        &:first-child {
                            margin-bottom: 16px;
                        }

                        & > p {
                            ${createTypographyStyleByName('paragraph4')};
                        }

                        & > h5 {
                            ${createTypographyStyleByName('header4')};
                        }
                    }

                    ${StyledLink},
                    ${StyledAvatarBlock} {
                        display: none;
                    }
                `;
                break;
            case 'roundedHorizontalSmall':
                styles = css`
                    padding: 20px;
                    border-radius: 16px;
                    flex-direction: column;
                    background-color: ${getColorByName('white')};

                    ${PreviewArea} {
                        height: 48vw;
                        min-height: 154px;
                        border-radius: 6px;
                    }

                    ${Play} {
                        font-size: 38px;
                    }

                    ${Label} {
                        min-height: 26px;
                        ${createTypographyStyleByName('header5')};
                        line-height: 26px;
                        min-width: 84px;
                        bottom: 16px;
                    }

                    ${Info} {
                        width: 100%;
                        flex-wrap: wrap;
                        padding: 16px 0;
                    }

                    ${Title} {
                        ${createTypographyStyleByName('paragraph1')};
                        font-family: ${getFamilyByName('medium')};
                        margin-bottom: 4px;
                    }

                    ${Description} {
                        ${createTypographyStyleByName('paragraph3')};
                        font-family: ${getFamilyByName('medium')};
                        margin-bottom: 8px;
                    }

                    ${StyledAvatarBlock} {
                        margin-bottom: 14px;
                    }

                    ${Panel} {
                        display: flex;
                        flex-direction: row-reverse;
                        justify-content: flex-end;
                        width: 100%;
                    }

                    ${Item} {
                        &:first-child {
                            margin-left: 16px;
                            padding-left: 12px;
                            border-left: 2px solid ${getColorByName('gray')};
                        }

                        & > p {
                            ${createTypographyStyleByName('paragraph4')};
                        }

                        & > h5 {
                            ${createTypographyStyleByName('paragraph3')};
                            font-family: ${getFamilyByName('medium')};
                        }
                    }

                    ${StyledLink} {
                        display: none;
                    }
                `;
                break;
            case 'horizontalSmall':
                styles = css`
                    flex-direction: column;

                    ${PreviewArea} {
                        min-height: 124px;

                        @media (min-width: ${getMediaWidthByName('desktop')}) {
                            flex: initial;
                            height: 8.8vw;
                        }
                    }

                    ${Play} {
                        font-size: 38px;
                    }

                    ${Label} {
                        min-height: 26px;
                        ${createTypographyStyleByName('header5')};
                        line-height: 26px;
                        min-width: 84px;
                        bottom: 16px;
                    }

                    ${Info} {
                        padding: 16px;
                    }

                    ${Title} {
                        ${createTypographyStyleByName('paragraph3')};
                        font-family: ${getFamilyByName('medium')};
                    }

                    ${Description} {
                        ${createTypographyStyleByName('paragraph3')};
                        margin-bottom: 12px;
                    }

                    ${Panel} {
                        display: flex;
                        flex-direction: row-reverse;
                        justify-content: flex-end;
                        width: 100%;
                    }

                    ${Item} {
                        &:first-child {
                            margin-left: 16px;
                            padding-left: 12px;
                            border-left: 2px solid ${getColorByName('gray')};
                        }

                        & > p {
                            ${createTypographyStyleByName('paragraph4')};
                        }

                        & > h5 {
                            ${createTypographyStyleByName('paragraph3')};
                            font-family: ${getFamilyByName('medium')};
                        }
                    }

                    ${StyledLink},
                    ${StyledAvatarBlock} {
                        display: none;
                    }
                `;
                break;
            case 'semiHorizontalSmall':
                styles = css`
                    padding: 20px;
                    border-radius: 16px;
                    flex-direction: column;
                    box-shadow: ${getShadowByName('depth4')};
                    background-color: ${getColorByName('white')};

                    ${PreviewArea} {
                        height: 65vw;
                        min-height: 210px;
                        border-radius: 6px;
                    }

                    ${Play} {
                        font-size: 38px;
                    }

                    ${Label} {
                        min-height: 26px;
                        ${createTypographyStyleByName('header5')};
                        line-height: 26px;
                        min-width: 84px;
                        bottom: 16px;
                    }

                    ${Info} {
                        width: 100%;
                        flex-wrap: wrap;
                        padding: 16px 0;
                    }

                    ${Title} {
                        ${createTypographyStyleByName('paragraph1')};
                        font-family: ${getFamilyByName('medium')};
                        margin-bottom: 4px;
                    }

                    ${Description} {
                        ${createTypographyStyleByName('paragraph3')};
                        color: ${getColorByName('darkGray')};
                        margin-bottom: 20px;
                    }

                    ${StyledAvatarBlock},
                    ${StyledLink} {
                        display: none;
                    }

                    ${Panel} {
                        display: flex;
                        width: 100%;
                        justify-content: space-between;
                    }

                    ${Item} {
                        & > p {
                            ${createTypographyStyleByName('paragraph4')};
                        }

                        & > h5 {
                            ${createTypographyStyleByName('header4')};
                            font-family: ${getFamilyByName('medium')};
                        }
                    }

                    ${StyledLink} {
                        display: none;
                    }
                `;
                break;
            case 'simple':
                styles = css`
                    flex-direction: column;

                    ${PreviewArea} {
                        min-height: auto;
                    }

                    ${Info} {
                        background-color: ${getColorByName('lightGray')};
                        flex-direction: row;
                        flex-wrap: wrap;
                        padding: 20px 24px 0 24px;
                    }

                    ${Play} {
                        font-size: 64px;

                        @media (max-width: ${getMediaWidthByName('mobile')}) {
                            font-size: 52px;
                        }
                    }

                    ${Title} {
                        ${createTypographyStyleByName('header5')};
                        color: ${getColorByName('darkBlue')};
                        margin-bottom: 14px;
                    }

                    ${StyledCountdown},
                    ${StyledLink} {
                        margin-bottom: 20px;
                    }

                    ${StyledCountdown} {
                        margin-right: 2rem;

                        @media (max-width: ${getMediaWidthByName('mobile')}) {
                            order: 5;
                            margin: 0 0 1rem 0;
                        }
                    }

                    ${StyledLink} {
                        @media (max-width: ${getMediaWidthByName('mobile')}) {
                            order: 6;
                            width: 100%;
                        }
                    }

                    ${StyledButton} {
                        @media (max-width: ${getMediaWidthByName('mobile')}) {
                            padding: 0;
                        }
                    }

                    ${Panel},
                    ${Description},
                    ${StyledAvatarBlock} {
                        display: none;
                    }
                `;
                break;
            default:
                break;
        }
        return styles;
    };
}

export const WebinarRoot = styled.article<{ type: MixedWebinarType }>`
    width: 100%;
    height: 100%;
    display: flex;
    overflow: hidden;
    border-radius: 6px;

    ${renderStylesByType()};
`;
