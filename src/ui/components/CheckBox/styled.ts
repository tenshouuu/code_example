import styled from 'styled-components';
import { getColorByName } from '@client/helpers';

import Icon from '../Icon';
import { CheckBoxProps } from '../CheckBox';

/* eslint-disable max-len */


export const StyledIcon = styled(Icon.CheckBoxIcon)`
    width: 14px;
`;

export const CheckBoxRoot = styled.div<{ checked: CheckBoxProps['checked'] }>`
    width: 24px;
    min-width: 24px;
    height: 24px;
    cursor: pointer;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;
    background-color: ${({ checked, ...props }) => getColorByName(checked ? 'yellow' : 'lightPurple')(props)};

    & > ${StyledIcon} {
        ${({ checked }) => (!checked ? 'display: none' : '')};
    }
`;
/* eslint-enable max-len */
