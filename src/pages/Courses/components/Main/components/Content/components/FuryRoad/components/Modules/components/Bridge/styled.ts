import styled, {
    css,
    FlattenInterpolation,
} from 'styled-components';
import { AwesomeIcon } from '@client/ui/components';
import {
    createTypographyStyleByName,
    getColorByName,
    getFamilyByName, getMediaWidthByName,
} from '@client/helpers';
import { ColorType } from '@client/helpers/theme';
import {
    BridgeProps, BridgeStatusEnum, BridgeTestStatusEnum, OrientationEnum,
} from './index';

/* eslint-disable max-len */
export const StyledAwesomeIcon = styled(AwesomeIcon)``;

export const Circle = styled.div`
    position: relative;
    transition: 0.1s;
    box-sizing: border-box;
    text-align: center;
    padding: 0 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    min-width: 44px;
    height: 44px;

    ${StyledAwesomeIcon} {
        color: ${getColorByName('white')};
        display: none;
    }

    & > span {
        color: ${getColorByName('darkGray')};
        ${createTypographyStyleByName('paragraph3')};
        font-family: ${getFamilyByName('medium')};
    }
`;


const getLineGradient:
    (firstColor?: ColorType, secondColor?: ColorType) => (any) => FlattenInterpolation<any> = (firstColor = 'gray', secondColor = 'gray') => ({ orientation = 'center', reverse = false, ...props }) => {
        let styles = css`
                    background-image: linear-gradient(90deg, ${getColorByName(reverse ? secondColor : firstColor)} 50%, ${getColorByName(reverse ? firstColor : secondColor)} 50%);
                `;
        const baseStyles = css`
                    box-shadow: inset 0 0 0 10px ${getColorByName(secondColor)};

                    &:after {
                        content: "";
                        display: block;
                        box-shadow: inset 0 0 0 10px ${getColorByName(firstColor)};
                    }
                `;
        switch (orientation) {
            case OrientationEnum.RIGHT:
                styles = css`
                            ${baseStyles}

                            &:after {
                                clip-path: polygon(50% 0, 100% 0, 100% 50%, 50% 50%);
                            }
                        `;
                break;
            case OrientationEnum.LEFT:
                styles = css`
                            ${baseStyles}

                            &:after {
                                clip-path: polygon(50% 0, 0 0, 0 100%, 50% 100%);
                            }
                        `;
                break;
            default:
                break;
        }
        return styles;
    };

export const Line = styled.div`
    position: absolute;
    transition: 0.3s;
    width: 100%;
    height: 10px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        height: 8px;
    }
`;


const setStylesByStatus = ({ status }) => {
    let styles: FlattenInterpolation<any> = css``;
    switch (status) {
        case BridgeStatusEnum.UNAVAILABLE:
            styles = css`
                    ${Line} {
                        ${getLineGradient()} !important;
                    }

                    ${Circle} {
                        pointer-events: none;
                        background-color: ${getColorByName('gray')};
                    }
                `;
            break;
        case BridgeStatusEnum.AVAILABLE:
            styles = css`
                    ${Line} {
                        ${getLineGradient('purple', 'purple')};
                    }

                    ${Circle} {
                        background-color: ${getColorByName('purple')};

                        & > span {
                            color: ${getColorByName('white')};
                        }
                    }
                `;
            break;
        default:
            break;
    }
    return styles;
};

const setStylesByTestStatus = ({ status, testStatus, disabled }) => {
    let styles: FlattenInterpolation<any> = css``;
    if (status === BridgeStatusEnum.AVAILABLE) {
        switch (testStatus) {
            case BridgeTestStatusEnum.LOCKED:
                styles = css`
                    ${Line} {
                        ${getLineGradient('lightPurple', 'lightPurple')};
                    }

                    ${Circle} {
                        background-color: ${getColorByName('lightPurple')};
                        pointer-events: none;
                    }
                `;
                break;
            case BridgeTestStatusEnum.COMPLETED:
                styles = css`
                    ${Circle} {
                        ${disabled ? css`
                            pointer-events: none;
                        ` : css`
                            cursor: pointer;

                            &:hover {
                                cursor: pointer;
                                background-color: ${getColorByName('lightPurple')};
                            }
                        `};

                         & > span {
                             display: none;
                         }
                         & > ${StyledAwesomeIcon} {
                             display: inline-block;
                         }}
                    }
                `;
                break;
            case BridgeTestStatusEnum.ACTIVE:
                styles = css`
                   ${Circle}:hover {
                            cursor: pointer;
                            background-color: ${getColorByName('lightPurple')};
                   }
            `;
                break;
            default:
                break;
        }
    }
    return styles;
};


const setPositionByStatus = (orientation = OrientationEnum.CENTER): FlattenInterpolation<any> => {
    if (orientation === OrientationEnum.CENTER) {
        return css``;
    }

    const direction = orientation === OrientationEnum.LEFT
        ? 'right'
        : 'left';

    return css`
            bottom: -58px;
            ${direction}: 54px;
    `;
};

const setStylesByOrientation = ({
    orientation = OrientationEnum.CENTER,
}) => {
    let styles: FlattenInterpolation<any> = css``;
    const baseStyles = css`
        width: 44px;
        max-width: 44px;
        margin-bottom: -25%;

        ${Line} {
            top: calc(50% - 40px);
            height: 360px;
            width: 360px;
            border-radius: 360px;

            &:after {
                height: 360px;
                width: 360px;
                border-radius: 360px;
            }
        }

        ${Circle} {
            position: absolute;
            ${setPositionByStatus(orientation)}
        }
    `;
    switch (orientation) {
        case OrientationEnum.RIGHT:
            styles = css`
                height: 100%;
                grid-row: none;
                ${baseStyles};
                right: 0;

                ${Line} {
                    left: -278px;
                    clip-path: polygon(50% 0, 100% 0, 100% 100%, 50% 100%);
                }
            `;
            break;
        case OrientationEnum.LEFT:
            styles = css`
                height: 100%;
                grid-row: none;
                ${baseStyles};
                left: 0;

                ${Line} {
                    right: -278px;
                    clip-path: polygon(50% 0, 0 0, 0 100%, 50% 100%);
                }
            `;
            break;
        default:
            break;
    }
    return styles;
};

const setMinWidth = ({
    maxWidthLimit = 0,
}): FlattenInterpolation<any> => ((maxWidthLimit === 0 || !maxWidthLimit) ? css`` : css`
        @media (max-width: ${getMediaWidthByName('mobile')}) {
            max-width: initial;
        }
    `);
// max-width: ${`calc((100% - (152px + 2vw) * ${maxWidthLimit}) / ${maxWidthLimit - 1})`};


type BridgeRootType = Omit<BridgeProps, 'test' | 'moduleEndedAt'> & {
    disabled: boolean;
    testStatus: BridgeTestStatusEnum;
};

export const BridgeRoot = styled.div<BridgeRootType>`
    flex: 1;
    position: relative;
    align-self: initial;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    ${setStylesByStatus};
    ${setStylesByTestStatus};
    ${setStylesByOrientation};
    ${setMinWidth};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 80px;
    }
`;
