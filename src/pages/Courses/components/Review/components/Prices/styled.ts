import styled from 'styled-components';
import { getMediaWidthByName } from '@client/helpers';

const StyledPrices = styled.section`
    justify-content: center;
    box-sizing: border-box;
    padding: 0 52px;
    margin-top: 44px;
    display: none;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        flex-direction: column;
        padding: 0;
    }
`;

export {
    StyledPrices,
};
