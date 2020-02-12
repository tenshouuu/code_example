import styled from 'styled-components';

import { AvatarBlock } from '@client/ui/components';
import { AvatarBlockProps } from '@client/ui/components/AvatarBlock';
import {
    createTypographyStyleByName,
    getColorByName,
    getMediaWidthByName,
    getShadowByName,
} from '@client/helpers';

const StyledReview = styled.article`
    padding: 20px 20px 28px;
    box-sizing: border-box;
    box-shadow: ${getShadowByName('depth4')};
    background-color: ${getColorByName('white')};

    & > p {
        color: ${getColorByName('darkBlue')};
        ${createTypographyStyleByName('paragraph3')}
    }

    @media (min-width: ${getMediaWidthByName('desktop')}) {
        padding: 1.42vw 1.42vw 1.84vw;
    }
`;

const StyledAvatarBlock = styled(AvatarBlock)<AvatarBlockProps>`
    margin-bottom: 12px;

    & div:last-child {
        flex-direction: column-reverse;

        & > p:last-child {
            margin-bottom: 4px;
            ${createTypographyStyleByName('header5')};
        }

        & > p:first-child {
            margin-bottom: 0;
            ${createTypographyStyleByName('paragraph3')};
        }
    }
`;

const StyledLabel = styled.div`
    display: flex;
    margin-bottom: 8px;

    & > p {
        ${createTypographyStyleByName('header5')};
        color: ${getColorByName('darkBlue')};
    }

    & > p > span {
        color: ${getColorByName('purple')};
    }
`;

export {
    StyledAvatarBlock,
    StyledLabel,
    StyledReview,
};
