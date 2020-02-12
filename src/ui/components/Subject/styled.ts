import styled, { css } from 'styled-components';
import {
    getColorByName,
    getFamilyByName, getMediaWidthByName,
    getTypographyByName,
} from '@client/helpers';
import {
    getBgColor,
    getColor,
    getGradient,
} from '@client/ui/components/Subject/helpers';
import { SubjectProps } from '@client/ui/components/Subject/index';


export const Fx = styled.div`
        position: absolute;
        background: radial-gradient(transparent, ${getColorByName('white')});
        opacity: .3;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        transition: .4s;

        :nth-child(1) {
            top: -100px;
            left: -40px;
        }

        :nth-child(2) {
            bottom: -100px;
            right: -58px;
        }
`;

export const SubjectRoot = styled.div<SubjectProps>`
    overflow: hidden;
    display: flex;
    flex-flow: column;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    text-align: center;
    outline: none;
    appearance: none;
    border-width: 0;
    position: relative;
    height: 70px;
    padding: 0 20px;
    border-radius: 5px;
    font-size: ${props => getTypographyByName('paragraph1')(props).size};
    font-weight: 500;
    color: ${getColor()};
    font-family: ${getFamilyByName('medium')};
    cursor: ${({ selected = false }) => (selected ? 'initial' : 'pointer')};
    background-color: ${getBgColor()};

    :hover {
        -webkit-backdrop-filter: contrast(1.5);
    }

    @media (min-width: ${getMediaWidthByName('mobile')}) {
        ${({ isMinimalistic, ...props }) => !isMinimalistic && getGradient({ ...props })};
    }
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        :hover {
            -webkit-backdrop-filter: initial;
        }

        ${getGradient};
    }

    ${({ animated }) => animated && (
        css`
            :hover {
                & ${Fx} {
                    :nth-child(1) {
                        top: -90px;
                        left: -30px;
                    }

                    :nth-child(2) {
                        bottom: -90px;
                        right: -48px;
                    }
                }
            }
        `
    )};

`;
