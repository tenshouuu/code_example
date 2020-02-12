import styled from 'styled-components';
import { getMediaWidthByName } from '@client/helpers';

export const LessonRoot = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;

    & > div {
        display: flex;
        flex: 1;
        height: 100%;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        border-radius: 36px;
        overflow: hidden;
    }
`;
