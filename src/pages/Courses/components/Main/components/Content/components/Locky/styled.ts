import styled from 'styled-components';
import { getColorByName } from '@client/helpers';

export const LockyRoot = styled.div`
    right: 12px;
    top: 16px;
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: ${getColorByName('white')};
    font-size: 0.875rem;
    color: ${getColorByName('darkGray')};
`;
