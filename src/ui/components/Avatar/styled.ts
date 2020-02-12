import styled from 'styled-components';
import { getColorByName, getShadowByName } from '@client/helpers';
import Icon from '../Icon';

const { UserPreview } = Icon;

export const IconUserPreview = styled(UserPreview)``;
export const StyledAvatar = styled.img``;

export const AvatarBlock = styled.div`
    overflow: hidden;
    width: 76px;
    min-width: 76px;
    height: 76px;
    max-height: 76px;
    background-color: ${getColorByName('white')};
    box-shadow: ${getShadowByName('depthWhite')};
    border: 3px solid ${getColorByName('white')};
    border-radius: 50%;

    ${IconUserPreview},
    ${StyledAvatar} {
        width: 100%;
    }
`;
