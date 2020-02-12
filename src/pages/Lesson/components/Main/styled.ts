import styled from 'styled-components';
import { getColorByName, getMediaWidthByName } from '@client/helpers';


export const MainRoot = styled.div<{ showWebinar: boolean }>`
    display: flex;
    padding-right: 6.28vw;
    background-color: ${getColorByName('lightGray')};

    & > *:first-child {
        display: ${({ showWebinar }) => (showWebinar ? 'grid' : 'none')};
    }

    & > *:last-child {
        display: ${({ showWebinar }) => (showWebinar ? 'none' : 'grid')};
    }

    @media (max-width: ${getMediaWidthByName('semiDesktop')}) {
        padding-right: 30px;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding-right: 0;
    }
`;
