import styled from 'styled-components';
import { getMediaWidthByName } from '@client/helpers';


export const Text = styled.div`
    text-align: left;
    overflow: scroll;
    width: 68vw;
    max-height: 60vh;
    
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 100%;
        max-height: 100%;
    }
`;
