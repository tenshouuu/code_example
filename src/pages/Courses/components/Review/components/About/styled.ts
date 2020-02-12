import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
    createTypographyStyleByName,
    getColorByName,
    getFamilyByName,
    getMediaWidthByName,
    getShadowByName,
} from '@client/helpers';
import { Button } from '@client/ui/components';
import { Webinar } from '@client/components';

import { ColorType } from '@client/helpers/theme';
import Title from '../Title';

export const StyledLink = styled(Link)`
    width: 100%;
    height: 100%;
    display: inline-block;
`;
export const StyledDisabledButton = styled(Button)`
    pointer-events: none;
`;

export const StyledAbout = styled.article`
    padding-left: 48px;
    box-sizing: border-box;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding-left: 0;
    }
`;

export const StyledTitle = styled(Title)`
    margin-bottom: 40px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin-bottom: 6.25vw;
    }
`;

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        flex-direction: column;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 60px 0 0;
    box-sizing: border-box;
    flex: 1;

    & > p {
        margin-bottom: 24px;
        color: ${getColorByName('darkGray')};
        ${createTypographyStyleByName('paragraph2')}
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 100%;
        padding: 0;
    }
`;

export const Features = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 530px;
`;

export const Feature = styled.div<{ color: ColorType }>`
    display: flex;
    align-items: center;
    width: 48%;
    margin-bottom: 36px;

    & > div {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        min-width: 40px;
        height: 40px;
        margin-right: 12px;
        border-radius: 50%;
        background-color: ${({ color, ...props }) => getColorByName(color)(props)};
        ${createTypographyStyleByName('paragraph1')};
        font-family: ${getFamilyByName('medium')};
        color: ${getColorByName('white')};
    }

    & > p {
        text-align: left;
        ${createTypographyStyleByName('paragraph3')};
        font-family: ${getFamilyByName('medium')};
        color: ${getColorByName('darkBlue')};
    }
`;

export const WebinarWrapper = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 24vw;
    min-height: 320px;
    min-width: 53%;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        height: min-content;
    }
`;

export const StyledWebinar = styled(Webinar)`
    width: 100%;
    height: 100%;
`;

export const StyledButton = styled(Button)``;

export const StyledLinkWrapper = styled(Link)`
    min-width: 140px;
    width: 10%;
    display: block;
    margin: 28px auto 44px;

    & > ${StyledButton} {
        display: block;
        width: 100%;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin: 16px auto 28px;
    }
`;
