import styled from 'styled-components';
import { createTypographyStyleByName, getColorByName } from '@client/helpers';
import {
    Button,
    Input,
} from '@client/ui/components';

export const EntryRoot = styled.form`
    width: 100%;
`;

export const ButtonStyled = styled(Button)`
    margin-top: 12px;
    width: 100%;
`;

export const InputStyled = styled(Input)`
    & + & {
        margin-top: 12px;
    }
`;

export const Error = styled.div`
    margin: 12px 0;
    text-align: center;
    color: ${getColorByName('yellow')};
    ${createTypographyStyleByName('header5')};
`;
