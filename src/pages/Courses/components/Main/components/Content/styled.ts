import styled, { css } from 'styled-components';
import {
    createTypographyStyleByName,
    getColorByName, getFamilyByName,
    getGradientColorByName,
    getMediaWidthByName,
} from '@client/helpers';

import { Button } from '@client/ui/components';
import {
    Stage,
    FuryRoad,
    Info,
    Teacher,
} from './components';

export const StyledStage = styled(Stage)`
    grid-area: stage;
`;
export const StyledTeacher = styled(Teacher)`
    grid-area: teacher;
`;
export const StyledFuryRoad = styled(FuryRoad)`
    grid-area: snake;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        max-width: 100vw;
    }
`;
export const StyledInfo = styled(Info)`
    grid-area: info;
`;

export const ContentRoot = styled.article`
    display: flex;
    flex-direction: column;
    background-color: ${getColorByName('white')};
    padding: 28px 28px 0;

    ${StyledFuryRoad} {
        margin-top: 24px;
        width: 100%;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        max-width: 100vw;
        padding: 16px 0 24px;

        ${StyledFuryRoad} {
            margin-top: 0;
        }
    }
`;

export const StageWrapper = styled.div`
    display: flex;
    grid-row: 2 / span 1;
    grid-column: 1 / span 3;

    & > ${StyledStage} {
        margin-right: 16px;
        width: calc(27% - 16px);
    }

    & > ${StyledTeacher} {
        width: 46%;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        flex-wrap: wrap-reverse;
        flex-direction: row;
        margin: 0 16px 20px;

        & > ${StyledStage} {
            width: calc(50% - 5px);
            margin-right: 0;
            margin-left: 0;
        }

        & > ${StyledStage}:first-child {
            margin-right: 10px;
        }

        & > ${StyledTeacher} {
            min-width: 100%;
            margin-bottom: 10px;
        }
    }
`;

export const StyledButton = styled(Button)`
    width: 100%;
    height: 54px;
    border-radius: 8px;
    ${createTypographyStyleByName('paragraph1')};
    font-family: ${getFamilyByName('medium')};
    background-image: linear-gradient(75deg, ${getGradientColorByName('darkElectricViolet')} -7%, ${getGradientColorByName('darkHeliotrope')} 57%);
`;
export const ButtonWrapper = styled.div`
    position: relative;
    width: 100%;
    padding: 20px 16px;
    background-color: ${getColorByName('white')};

    &:before {
        content: "";
        width: 100%;
        height: 46px;
        background-image: linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(225,225,242,1) 95%);
        position: absolute;
        top: -46px;
        left: 0;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        position: sticky;
        bottom: 0;
    }
`;

function renderStylesByCourseAccess({ isAccess }) {
    return isAccess
        ? css`
                ${StyledInfo} {
                    grid-row: 1;
                    grid-column: 1 / span 3;
                }

                ${StyledFuryRoad} {
                    grid-row: 3;
                    grid-column: 1 / span 3;
                }

                ${StyledFuryRoad} {
                    margin-top: 24px;
                }

                @media (max-width: ${getMediaWidthByName('mobile')}) {
                    ${StyledInfo} {
                        grid-row: 1;
                        grid-column: 1;
                    }

                    ${StyledFuryRoad} {
                        grid-row: 3;
                        grid-column: 1;
                    }

                    ${StyledTeacher} {
                        flex: 1;
                    }

                    ${StyledFuryRoad} {
                        margin-top: 0;
                    }
                }
        `
        : css`
                grid-template-areas:
                      "info teacher"
                      "snake snake";
                grid-column-gap: 8px;
                grid-template-columns: 1fr minmax(290px,calc(270px + 2vw));


                @media (min-width: ${getMediaWidthByName('semiLight')}) {
                    grid-template-columns: 1fr minmax(300px,calc(340px + 2vw));
                }

                @media (max-width: ${getMediaWidthByName('mobile')}) {
                    ${StyledTeacher} {
                        margin: 0 16px 20px;
                    }
                }
          `;
}


export const Wrapper = styled.div<{ isAccess: boolean }>`
    flex: 1;
    max-height: 100%;
    display: grid;
    grid-template-rows: min-content min-content 1fr;

    & > * {
        box-sizing: border-box;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: flex;
        flex-direction: column;
    }

    ${renderStylesByCourseAccess}
`;
