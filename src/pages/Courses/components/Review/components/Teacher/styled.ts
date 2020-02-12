import styled from 'styled-components';

import { Avatar, Subject } from '@client/ui/components';
import {
    createTypographyStyleByName,
    getColorByName,
    getFamilyByName,
    getMediaWidthByName,
    getShadowByName,
} from '@client/helpers';

const StyledSubjectText = styled(Subject.Text)`
    display: inline-block;

    & > div:first-child {
        display: none;
    }

    & p {
        display: inline;
        width: min-content;
        margin: 0;
    }
`;

const StyledAvatar = styled(Avatar)`
    width: calc(158px + 2vw);
    min-width: calc(158px + 2vw);
    min-height: calc(158px + 2vw);
    height: calc(158px + 2vw);

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 74px;
        min-width: 74px;
        min-height: 74px;
        height: 74px;
        margin-right: 16px;
    }
`;

const StyledTeacher = styled.article`
    display: flex;
    flex-flow: row-reverse;
    align-items: center;
    margin-bottom: 36px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        flex-direction: column;
        margin-bottom: 20px;

        & > ${StyledAvatar} {
            display: none;
        }
    }
`;

const PersonaInfo = styled.div`
    min-width: 180px;
    margin-right: 32px;

    & > ${StyledAvatar} {
        display: none;
    }

    & > div:last-child > * {
        margin-bottom: 4px;
    }

    & > div > h4 {
        color: ${getColorByName('purple')};
        ${createTypographyStyleByName('header4')}
    }

    & > div > h5 {
        color: ${getColorByName('darkBlue')} !important;
        ${createTypographyStyleByName('header5')};
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: flex;
        align-items: center;
        width: 100%;
        margin-right: 0;
        margin-bottom: 16px;
        min-width: auto;

        & > ${StyledAvatar} {
            display: flex;
        }
    }
`;

const Persona = styled.div`
    display: flex;
    align-items: center;
    background-color: white;
    flex: 1;

    & > p {
        max-width: 200px;
    }

    & > ${PersonaInfo} > div > p,
    & > p {
        color: ${getColorByName('darkGray')};
        ${createTypographyStyleByName('paragraph3')};
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        flex-direction: column;
        align-items: flex-start;
    }
`;

const ScoreFeature = styled.div`
    display: flex;
    flex-direction: column;
    max-width: calc(136px + 2%);
    color: ${getColorByName('white')};

    & > h2 {
        ${createTypographyStyleByName('header2')};
        margin-bottom: 4px;
    }

    & > p {
        ${createTypographyStyleByName('paragraph4')};
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        max-width: calc(154px + 2%);

        & > h2 {
            ${createTypographyStyleByName('header4')};
        }

        & > p {
            font-family: ${getFamilyByName('medium')};
        }
    }
`;

const Score = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: max-content;
    background-color: ${getColorByName('purple')};

    & > *:not(${ScoreFeature}) {
        display: none;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        flex-wrap: nowrap;
        align-items: initial;

        & > *:not(${ScoreFeature}) {
            display: flex;
            flex-direction: column;
            flex-grow: 1;
            justify-content: space-between;
            min-width: 30%;

            & > ${ScoreFeature} {
                margin-bottom: 16px;
            }
        }

        & > ${ScoreFeature} {
            display: none;
        }
    }
`;


const Informer = styled.div`
    display: flex;
    flex: 1;
    border-radius: 6px;
    overflow: hidden;
    box-shadow: ${getShadowByName('depth4')};
    margin-left: -90px;

    & > ${Persona},
    & > ${Score} {
        width: 50%;
        box-sizing: border-box;
        padding: 36px;
    }

    & > ${Persona} {
        padding-left: 126px;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 100%;
        flex-direction: column;
        margin-left: 0;

        & > ${Persona},
        & > ${Score} {
            width: 100%;
            box-sizing: border-box;
            padding: 5vw 7.5vw;
        }
    }
`;

export {
    StyledSubjectText,
    StyledTeacher,
    StyledAvatar,
    Informer,
    Persona,
    PersonaInfo,
    Score,
    ScoreFeature,
};
