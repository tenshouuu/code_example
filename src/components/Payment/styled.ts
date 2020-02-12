import styled, { css } from 'styled-components';

import {
    createTypographyStyleByName,
    getColorByName, getFamilyByName,
    getMediaWidthByName,
} from '@client/helpers';
import {
    Button, CheckBox, Icon, Input,
} from '@client/ui/components';
import { Animate } from '@client/containers';
import { Select, LabelBlock } from './components';
/* eslint-disable max-len */

export const Title = styled.h3`
    ${createTypographyStyleByName('header3')};
    color: ${getColorByName('white')};
    text-align: center;

    & > p {
      ${createTypographyStyleByName('header4')};
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        ${createTypographyStyleByName('header4')};
    }
`;

export const StyledSelect = styled(Select)`
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        max-width: 240px;
        margin: 14px calc((100% - 240px) / 2) 16px;
    }
`;


export const PromoInput = styled(Input)`
    background-color: ${getColorByName('white', 0)};
    outline: 0;
    border-width: 0;
    color: ${getColorByName('white')};
    ${createTypographyStyleByName('header5')};
    text-align: center;
    line-height: inherit;
    height: inherit;
    padding: 0;
    margin: 0;

    &::placeholder {
        color: ${getColorByName('white')};
    }

    @media (min-width: ${getMediaWidthByName('semiLight')}) {
        ${createTypographyStyleByName('paragraph1')};
        font-family: ${getFamilyByName('medium')};
    }
`;
export const StyledAnimate = styled(Animate)`
    margin-left: 8px;
    width: min-content;
`;

export const StyledChecked = styled(Icon.Checked)`
    width: 14px;
`;

export const InputWrapper = styled.div`
    transition: 0.3s;
    display: flex;
    align-items: center;
    width: 100%;
    text-align: center;
    height: 48px;
    border-radius: 24px;
    margin-top: 16px;
    margin-bottom: 12px;
    background-color: ${getColorByName('darkPurple')};
    line-height: 48px;
    border: 0;
    padding: 0 24px;

    @media (min-width: ${getMediaWidthByName('semiLight')}) {
        height: 56px;
        line-height: 56px;
        border-radius: 28px;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        max-width: 240px;
        margin: 0 calc((100% - 240px) / 2);
    }
`;


export const Price = styled.h2`
    text-align: center;
    color: ${getColorByName('white')};
    ${createTypographyStyleByName('header2')};

`;

export const PromoText = styled.h3`
    margin: 4px 0 0;
    text-align: center;
    color: ${getColorByName('white')};
    ${createTypographyStyleByName('header4')};
`;

export const DateInfo = styled.h5`
    text-align: center;
    color: ${getColorByName('yellow')};
    ${createTypographyStyleByName('header5')};
    margin: 14px 0 20px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        text-align: left;
    }
`;

export const Check = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 36px 18px;

    & > p {
        cursor: pointer;
        width: calc(100px + 2vw);
        color: ${getColorByName('white')};
        ${createTypographyStyleByName('paragraph4')};

        & > span {
            border-bottom: 1px dashed ${getColorByName('white')};
        }
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        & > p {
            width: calc(120px + 2vw);
        }
    }
`;

export const StyledCheckBox = styled(CheckBox)`
    margin-right: 12px;
    background-color: ${({ checked, ...props }) => getColorByName(checked ? 'darkPurple' : 'lightPurple')(props)};
`;

export const StyledButton = styled(Button)`
    display: block;
    margin: 0 auto 20px;
    min-width: 222px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        min-width: 284px;
    }

    ${({ disabled = false }) => (disabled ? css`
        pointer-events: none;
        opacity: 0.5;
    ` : '')}

`;

export const DetailsLink = styled.a`
  display: block;
  width: max-content;
  margin: 0 auto 20px;
  cursor: pointer;
  ${createTypographyStyleByName('paragraph4')};
  color: ${getColorByName('white')};
  border-bottom: 1px dashed ${getColorByName('white')};
`;

export const Wrapper = styled.div`
    padding: 32px 20px 20px;
    transition: 0.3s;

    @media (min-width: ${getMediaWidthByName('mobile')}) {
        position: sticky;
        top: 0;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        position: relative !important;
        border-radius: 16px 16px 0 0;
        padding: 32px 16px 20px;
    }
`;

export const StyledLabelBlock = styled(LabelBlock)`
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        border-radius: 0;
        padding: 26px 30px 44px;
    }
`;


function renderStylesByAccess({ accesscourse, checked }) {
    return accesscourse ? css`

            ${DateInfo} {
                text-align: center;
                color: ${getColorByName('white')}
            }

            @media (max-width: ${getMediaWidthByName('mobile')}) {
                background-color: ${getColorByName('darkPurple')};

                ${InputWrapper} {
                    background-color: ${getColorByName('purple')};
                }

                ${StyledCheckBox} {
                        background-color: ${getColorByName(checked ? 'purple' : 'lightPurple')};
                    }
                }
            }
        `
        : css`
             ${DateInfo} {
                & > br {
                    display: none;
                }
             }

             @media (max-width: ${getMediaWidthByName('mobile')}) {
                ${Wrapper} {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    justify-content: center;
                    padding: 32px 0 0;
                }

                ${DateInfo} {
                    max-width: calc(100px + 2vw);
                    margin-left: 16px;

                    & > br {
                        display: initial;
                    }
                }

                ${Price} {
                    margin: 14px 0 20px;
                }
             }
        `;
}

export const PaymentRoot = styled.div<{
    accesscourse: number;
    checked: boolean;
}>`
    height: 100%;
    background-color: ${getColorByName('purple')};
    color: ${getColorByName('white')};

    ${renderStylesByAccess}
`;
