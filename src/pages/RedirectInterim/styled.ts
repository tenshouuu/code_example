import styled from 'styled-components';
import { getColorByName } from '@client/helpers';


export const RedirectRoot = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    & > span {
        margin-left: 12px;
        color: ${getColorByName('white')};
    }
`;
