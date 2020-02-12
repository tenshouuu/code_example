/* eslint-disable max-len */
import React, { FunctionComponent } from 'react';
import {
    TextAreaStyled,
} from './styled';

export interface TextAreaProps {
    rows: number;
}

type Props = TextAreaProps;

const TextArea: FunctionComponent<Props> = (props, ref) => (<TextAreaStyled ref={ref} {...props} />);

export default TextArea;
