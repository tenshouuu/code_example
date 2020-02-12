import styled from 'styled-components';
import { Button, Subject, Icon } from '@client/ui/components';
import { ButtonProps } from '@client/ui/components/Button';
import { SubjectProps } from '@client/ui/components/Subject';
import {
    createTypographyStyleByName,
    getColorByName,
    getFamilyByName,
    getMediaWidthByName,
} from '@client/helpers';

export const StyledPacman = styled(Icon.Pacman)<any>`
    position: absolute;
    right: 50px;
    width: 340px;
    top: -100px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        right: -160px;
        width: 380px;
        top: -28px;
    }
`;

export const ActionRoot = styled(Subject)<SubjectProps>`
    padding: 16px 20px 16px 30px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    cursor: initial;
    text-align: left;
    height: auto;

    & > h2 {
        ${createTypographyStyleByName('header3')};
        width: 30%;
        min-width: 254px;
        max-width: 280px;
        text-align: left;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 24px 30px;
        flex-direction: column;
        align-items: flex-start;

        & > h2 {
            ${createTypographyStyleByName('paragraph1')};
            font-family: ${getFamilyByName('medium')};
            width: 174px;
            min-width: auto;
            margin-bottom: 8px;
        }
    }
`;

export const PriceWrapper = styled.div`
    & > p:first-child {

        & > span:first-child {
            ${createTypographyStyleByName('header2')};
        }

        & > span:last-child {
            ${createTypographyStyleByName('header4')};
        }
    }

    & > p:last-child {
        ${createTypographyStyleByName('paragraph3')};
        font-family: ${getFamilyByName('medium')};
    }
`;
export const ButtonWrapper = styled.a`
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 100%;
    }
`;
export const StyledButton = styled(Button)<ButtonProps>`
    background-color: ${getColorByName('pink')};
    min-width: 240px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin-top: 16px;
        width: 100%;
    }
`;
