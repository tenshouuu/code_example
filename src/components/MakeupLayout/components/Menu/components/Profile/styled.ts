import styled from 'styled-components';
import { Users } from '@client/apollo/schemaTypes';
import { createTypographyStyleByName, getColorByName, getMediaWidthByName } from '@client/helpers';
import { LinkButton } from '@client/ui/components';

export const ProfileRoot = styled.div<{ avatar: Users['avatar'] }>`
    ${({ avatar, ...props }) => (avatar ? `background: url(${avatar}) no-repeat center center;` : `background-color: ${getColorByName('darkBlue')(props)};`)};
    background-size: cover;
    position: relative;
    width: 100%;
    min-height: 28.125vw;
    padding: 0 30px;
    display: none;
    justify-content: space-between !important;
    align-items: center;

   &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-image: linear-gradient(to bottom, #6f47d3, #6f47d3);
        opacity: 0.3;
    }
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: flex;
    }
`;

export const StyledH = styled.h3`
    position: relative;
    ${createTypographyStyleByName('header5')};
`;
export const StyledLink = styled(LinkButton)`
    pointer-events: none;
    position: relative;
    opacity: 0.8;
`;
