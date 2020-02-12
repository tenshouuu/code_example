import React, { forwardRef, ForwardRefExoticComponent } from 'react';
import { IMaskMixin } from 'react-imask';

import { InputStyled } from '../../styled';

export type MaskInputType = ForwardRefExoticComponent<any>;

const ForwardInput: MaskInputType = forwardRef(({
    isValid = true,
    ...props
}, ref) => (
    <InputStyled
        ref={ref}
        isValid={isValid}
        {...props}
    />
));

const MaskInput = IMaskMixin(({ inputRef, ref, ...props }) => (
    <ForwardInput
        {...props}
        ref={inputRef}
    />
));


export default MaskInput;
