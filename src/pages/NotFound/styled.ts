import styled from 'styled-components';
import {Button, Icon} from '@client/ui/components';
import {createTypographyStyleByName, getColorByName, getMediaWidthByName} from '@client/helpers';

export const StyledLogo = styled(Icon.Logo)`
    max-width: 200px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        max-width: 160px;
    }
`;

export const StyledButton = styled(Button)``;

export const NotFoundRoot = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 100vh;
    background-color: ${getColorByName('white')};

    & > h1 {
        font-size: 12rem;
        line-height: 13rem;
        color: ${getColorByName('darkBlue')};

        @media (max-width: ${getMediaWidthByName('mobile')}) {
            font-size: 6rem;
            line-height: 7rem;
        }
    }

    & > p {
        ${createTypographyStyleByName('paragraph1')};
        color: ${getColorByName('darkBlue')};
        margin-bottom: 10px;
    }
`;
