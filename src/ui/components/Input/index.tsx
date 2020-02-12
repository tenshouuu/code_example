import React, { ForwardRefExoticComponent, FunctionComponent, RefAttributes } from 'react';
import { InputStyled } from './styled';
import { TextArea, MaskInput } from './components';
import { TextAreaProps } from './components/TextArea';
import { MaskInputType } from './components/MaskInput';

export interface InputProps {
    isValid: boolean;
    [key: string]: any;
}

export interface OptionalFieldsInteface {
    TextArea: FunctionComponent<any>;
    MaskInput: MaskInputType;
}

type Props = InputProps;

const Input: FunctionComponent<Props> = ({
    isValid = true,
    ...props
}, ref) => (
    <InputStyled
        ref={ref}
        isValid={isValid}
        {...props}
    />
);


const WrappedInput: any = React.forwardRef(Input);

WrappedInput.TextArea = React.forwardRef(TextArea);
WrappedInput.MaskInput = MaskInput;

export default WrappedInput;
