import styled from 'styled-components';
import {
    createTypographyStyleByName, getColorByName,
    getMediaWidthByName,
} from '@client/helpers';
import {
    Avatar,
} from '@client/ui/components';

import Notification from '../Notification';
import IconWrapper from '../IconWrapper';
import {RcTooltip} from "@client/ui/components/Tooltip";
import {Link} from "react-router-dom";

export const Name = styled.p`
    color: ${getColorByName('darkGray')};
    margin-right: 16px;
    ${createTypographyStyleByName('header5')};
`;
export const StyledNotification = styled(Notification)``;
export const StyledIconWrapper = styled(IconWrapper)``;
export const StyledAvatar = styled(Avatar)`
    cursor: pointer;
    width: 40px;
    min-width: 40px;
    height: 40px;
    min-height: 40px;
`;

export const StyledRcTooltip = styled(RcTooltip)`

    & .rc-tooltip-arrow {
        border-bottom-color: ${getColorByName('darkPurple')};
    }
    & .rc-tooltip-inner {
        background-color: ${getColorByName('darkPurple')};
    }
`;

export const PanelRoot = styled.div`
    display: flex;
    align-items: center;

    ${StyledNotification},
    ${StyledIconWrapper} {
        margin-right: 26px;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: none !important;
    }
`;

export const StyledLink = styled(Link)`
    width: min-content;
    color: ${getColorByName('white')};
    ${createTypographyStyleByName('header5')};
`;
