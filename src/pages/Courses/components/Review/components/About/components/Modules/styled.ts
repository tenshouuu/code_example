import styled from 'styled-components';
import { getMediaWidthByName } from '@client/helpers';

const StyledModules = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    box-sizing: border-box;
    margin-bottom: 48px;

    & > * {
        width: 30%;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        flex-direction: column;
        margin-bottom: 20px;

        & > * {
            width: 100%;
            margin-bottom: 10px;
        }
    }
`;

export {
    StyledModules,
};
