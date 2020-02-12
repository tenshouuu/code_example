import styled from 'styled-components';

export const AnimateRoot = styled.div<{ isAnimate: boolean }>`
    width: 100%;
    transition: 0.5s;
    opacity: ${({ isAnimate }) => (isAnimate ? '1' : '0')};
`;
