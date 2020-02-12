import styled, { css } from 'styled-components';
import { getColorByName } from '@client/helpers';
import { ColorType } from '@client/helpers/theme';

const getSize = (props) => {
    if (typeof props.size === 'number') {
        return css`
            width: ${props.size}px;
            height: ${props.size}px;
        `;
    }
    return css`
        width: 100%;
        height: auto;
    `;
};

export const StyledPath = styled.path<{ color?: ColorType }>`
    fill: ${({ color, ...props }) => getColorByName(color ?? 'white')(props)};
`;

export const StyledG = styled.g<{ color?: ColorType }>`
    fill: ${({ color, ...props }) => getColorByName(color ?? 'white')(props)};
`;

export default styled.svg<any>`
    display: inline-block;
    stroke-width: 0;
    user-select: none;
    flex-shrink: 0;
    ${getSize}
`;
