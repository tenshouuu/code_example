import styled from 'styled-components';
import {
    createTypographyStyleByName,
    getFamilyByName,
    getMediaWidthByName,
} from '@client/helpers';

const Info = styled.div`
    & > p {
        ${createTypographyStyleByName('paragraph3')}
    }
`;


const StyledStep = styled.article`
    display: flex;
    align-items: flex-start;
    box-sizing: border-box;

    & > div > h5 {
        ${createTypographyStyleByName('paragraph1')};
        font-family: ${getFamilyByName('medium')};
        margin-bottom: 14px;
    }

    & > div:first-child > h5 {
        display: none;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 0 32px 70px;

        & > div:first-child {
            display: flex;
            align-items: center;
        }

        & > div:first-child > h5 {
            display: block;
        }

        & > ${Info} > h5 {
            display: none;
        }
    }
`;

const NumberOval = styled.div`
    position: relative;
    width: 88px;
    min-width: 88px;
    margin-right: 24px;

    & > h2 {
        right: -4px;
        top: 0;
        position: absolute;
        font-size: 3.438rem;
        line-height: 3.75rem;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 60px;
        min-width: 60px;

        & > h2 {
            right: -4px;
            top: 0;
            position: absolute;
            font-size: 2.25rem;
            line-height: 2.5rem;
        }
    }
`;


export {
    StyledStep,
    NumberOval,
    Info,
};
