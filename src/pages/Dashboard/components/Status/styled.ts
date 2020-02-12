import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { createTypographyStyleByName, getColorByName, getMediaWidthByName } from '@client/helpers';
import { Button } from '@client/ui/components';

export const StyledLink = styled(Link)``;

export const StatusRoot = styled.div`
    display: grid;
    grid-area: aside;
    padding: 20px;
    box-sizing: border-box;
    position: relative;
    grid-column-gap: 0;
    justify-items: center;
    grid-template-areas:
        "image"
        "title"
        "statusName"
        "bar"
        "nextLevelDesc"
        "gap"
        "score"
        "ad"
        "buyCourse";
    grid-template-columns: 1fr;
    background-color: ${getColorByName('white')};
    grid-template-rows: repeat(9, min-content);
    grid-row-gap: 16px;
    color: ${getColorByName('white')};
    margin: 24px 0;
    border-radius: 5px;

    @media(max-width: ${getMediaWidthByName('mobile')}) {
        display: none;  
        padding: 0 16px;
        justify-items: start;
        grid-template:
            "image title title" min-content
            "image statusName statusName" min-content
            "image bar bar" min-content
            "image nextLevelDesc nextLevelDesc" min-content
            "gap gap gap" min-content
            "score score badge" min-content 
            / 110px min-content 1fr;
        grid-row-gap: 0;
    }
`;

export const Image = styled.img`
    position: relative;
    grid-area: image;
    width: 116px;
    height: 111px;

    @media(max-width: ${getMediaWidthByName('mobile')}) {
        width: 89px;
        height: 85px;
    }
`;

export const Title = styled.div`
    position: relative;
    grid-area: title;
    ${createTypographyStyleByName('paragraph3')};
`;

export const StatusName = styled.div`
    position: relative;
    grid-area: statusName;
    ${createTypographyStyleByName('header3')};
`;

export const NextLevelDescription = styled.div`
    text-align: center;
    position: relative;
    padding-top: 8px;
    grid-area: nextLevelDesc;
    ${createTypographyStyleByName('paragraph3')};
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        text-align: left;
    }
`;

export const Badge = styled.div`
    position: relative;
    display: none;
    grid-area: badge;
    width: fit-content;
    height: fit-content;
    font-size: 0.625rem;
    font-weight: 500;
    background-color: ${getColorByName('yellow')};
    border-radius: 3px;
    color: ${getColorByName('purple')};
    padding: 0 4px;
    @media(max-width: ${getMediaWidthByName('mobile')}) {
        display: inline-block;
        align-self: center;
        justify-self: end;
    }
`;

export const Gap = styled.div`
    grid-area: gap;
    width: 100%;
    &::after {
        content: '';
        display: block;
        width: 100%;
        height: 2px;
        opacity: 0.2;
        background-color: ${getColorByName('white')};
        margin: 12px 0;
    }
`;

export const StyledButton = styled(Button)`
    grid-area: buyCourse;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: none;
    }
`;

export const Ad = styled.div`
    text-align: center;
    position: relative;
    grid-area: ad;
    ${createTypographyStyleByName('paragraph3')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: none;
    }
`;

export const PurpleBack = styled.div`
    position: absolute;
    margin-top: -20px;
    width: 100%;
    height: calc(100% + 40px);
    grid-row: 1 / 10;
    background-color: ${getColorByName('purple')};
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        border-radius: 0;
    }
`;
