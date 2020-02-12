import { css } from 'styled-components';

export const roundCorner = () => css`
    content: '';
    position: absolute;
    right: 0;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    box-shadow: 0 0 0 300px currentColor;
    clip-path: polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%);
`;
