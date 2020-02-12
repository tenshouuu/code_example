import React from 'react';
import styled from 'styled-components';
import {
    createTypographyStyleByName, getColorByName, getMediaWidthByName, getTypographyByName,
} from '@client/helpers';
import { AwesomeIcon as Icon } from '@client/ui/components';
import IconWrapper from '../IconWrapper';


const StyledIcon = styled(Icon)`
    opacity: 0.5;
    pointer-events: none;
`;

const NotificationRoot = styled.div`
    visibility: hidden;
    display: flex;
    align-items: center;
    width: 440px;
    flex: 1;
    justify-content: center;

    & > div:nth-child(3),
    & > div:last-child {
        ${createTypographyStyleByName('paragraph2')}
    }

    & > div:nth-child(3) {
        padding-right: 10px;
        margin: 0 10px;
        border-right: 1px solid ${getColorByName('gray')};
        color: ${getColorByName('darkGray')};
    }

    & > div:last-child {
        color: ${getColorByName('darkBlue')};
    }

    & > ${StyledIcon} {
        display: none;
    }

    @media (min-width: ${getMediaWidthByName('desktop')}) {
        & {
            width: auto;
        }
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        & {
            flex: initial;
            width: auto;
        }

        & > *:first-child {
            margin-right: 20px;
        }

        & > *:first-child,
        & > ${StyledIcon} {
            display: flex;
            width: auto;
            min-width: auto;
            background-color: initial;
            font-size: ${props => getTypographyByName('header3')(props).size};
            color: ${getColorByName('white')};
        }

        & > div:nth-child(3),
        & > div:last-child {
            display: none;
        }
    }
`;


export default function Notification(props): React.ReactElement {
    return (
        <NotificationRoot {...props}>
            <IconWrapper type="ring" disabled />
            <StyledIcon type="chat" />
            <div>16:45</div>
            <div>Через 15 мин. начинается курс «Правописание …</div>
        </NotificationRoot>
    );
}
