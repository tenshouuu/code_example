import styled from 'styled-components';
import {
    getColorByName,
    getMediaWidthByName,
} from '@client/helpers';
import { Spin } from '@client/ui/components';

export const StyledSpin = styled(Spin)``;

export const CoursesRoot = styled.div`
    background-color: ${getColorByName('lightGray')};
    padding: 30px 6.28vw 30px 30px;
    box-sizing: border-box;
    width: 100%;
    height: 100%;

    @media (max-width: ${getMediaWidthByName('semiDesktop')}) {
        padding: 30px;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 0;
        background-color: ${getColorByName('purple')};
    }
`;
