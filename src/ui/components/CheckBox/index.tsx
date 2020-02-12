import React, { FunctionComponent, useMemo } from 'react';

import { CheckBoxRoot, StyledIcon } from './styled';

export interface CheckBoxProps {
    checked?: boolean;
    onCheck?(checked: boolean): void;
}

type Props = CheckBoxProps;

const onDefault = () => {};

const CheckBox: FunctionComponent<Props> = ({
    checked = false,
    onCheck = onDefault,
    ...props
}) => (
    <>
        {useMemo(() => (
            <CheckBoxRoot
                checked={checked}
                onClick={() => { onCheck(!checked); }}
                {...props}
            >
                <StyledIcon color="white" />
            </CheckBoxRoot>
        ), [checked])}
    </>
);

export default React.memo(CheckBox);
