import { StyledButtonProps } from '@client/ui/components/Button';
import {
    css,
    FlattenSimpleInterpolation,
} from 'styled-components';


export const getCursor = () => ({ href }: StyledButtonProps): string => (
    href
        ? 'pointer'
        : 'default'
);

/* eslint-disable-next-line */
export const getHoverStyles = () => (): FlattenSimpleInterpolation => (
    css`
        opacity: 0.8;
    `
);
