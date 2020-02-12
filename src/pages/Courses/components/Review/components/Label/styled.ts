import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { AwesomeIcon, Subject } from '@client/ui/components';
import {
    createTypographyStyleByName,
    getColorByName,
    getFamilyByName,
    getMediaWidthByName,
} from '@client/helpers';

const StyledLink = styled(Link)`
    display: inline-block;
    width: 100%;

    & > * {
        width: inherit;
    }
`;

const StyledSubject = styled(Subject)`
    cursor: initial;
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 32px 44px;
    box-sizing: border-box;
    color: ${getColorByName('white')};
    text-align: left;
    margin-bottom: 32px;

    &:after,
    &:before {
        content: initial;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        flex-direction: column;
        padding: 16px;
        margin-bottom: 20px;
    }
`;

const PacmanWrapper = styled.div`
    visibility: hidden;
    position: absolute;
    width: 500px;
    right: 14%;
    top: -94px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 160px;
        right: -32px;
        top: -16px;
    }
`;

const CourseInfo = styled.div`
    width: 60%;

    & > h2 {
        ${createTypographyStyleByName('header3')};
        margin-bottom: 24px;
    }

    & > div:nth-child(2) {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 100%;

        & > h2 {
            ${createTypographyStyleByName('header4')};
            margin-bottom: 3.75vw;
        }

        & > div:nth-child(2) {
            margin-bottom: 5vw;
        }
    }
`;

const StyledAwesomeIcon = styled(AwesomeIcon)`
    display: inline-block;
    font-size: 2.5rem;
    line-height: 0;
    color: ${getColorByName('yellow')};
    margin-right: 16px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        font-size: 1.875rem;
        margin-right: 12px;
    }
`;

const InfoBlock = styled.div`
    &:last-child {
        visibility: hidden;
    }

    &:not(:last-child) {
        margin-right: 44px;
    }

    & > p:first-child {
        margin-bottom: 8px;
        ${createTypographyStyleByName('paragraph4')};
    }

    & > p:last-child {
        ${createTypographyStyleByName('header4')};
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        &:not(:last-child) {
            margin-right: 20px;
        }

        & > p:first-child {
            margin-bottom: 1.25vw;
        }
    }
`;

const FeatureList = styled.ul`
    display: flex;
    align-items: center;

    & > li {
        ${createTypographyStyleByName('paragraph1')};
        font-family: ${getFamilyByName('medium')};
        min-height: 40px;
        display: flex;
        align-items: center;
    }

    & > li:not(:last-child) {
        padding-right: 16px;
        border-right: 1px solid ${getColorByName('white')};
        margin-right: 16px;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        flex-wrap: wrap;

        & > li {
            ${createTypographyStyleByName('paragraph3')};
            font-family: ${getFamilyByName('medium')};
            min-height: 30px;
            min-width: 66px;
            max-width: 100px;
            width: min-content;
            align-items: flex-start;
            margin-bottom: 2.5vw;
        }

        & > li:not(:last-child) {
            padding-right: 0;
            border-right: 0;
            margin-right: 0;
        }

        & > li:not(:first-child) {
            margin-left: 16px;
            padding-left: 12px;
            border-left: 1px solid ${getColorByName('white')};
        }

        & > li:last-child {
            margin-left: 0;
        }
    }
`;

const PaymentInfo = styled.div`
    display: flex;
    flex-direction: column;

    & > * {
        margin-bottom: 16px;
    }

    & > p {
        ${createTypographyStyleByName('paragraph1')};
        font-family: ${getFamilyByName('medium')};

        & > span {
            ${createTypographyStyleByName('header2')}
        }

        &:last-child {
            visibility: hidden;
        }
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        align-items: center;
        width: 100%;

        & > * {
            margin-bottom: 3.75vw;
        }

        & > button {
            min-width: 240px;
        }

        & > p:last-child {
            ${createTypographyStyleByName('paragraph3')};
            font-family: ${getFamilyByName('medium')};
        }
    }
`;

export {
    StyledSubject,
    CourseInfo,
    PaymentInfo,
    PacmanWrapper,
    StyledAwesomeIcon,
    InfoBlock,
    FeatureList,
    StyledLink,
};
