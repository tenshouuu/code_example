import React, { PureComponent } from 'react';

import {
    CounterRoot,
    Plus,
    Minus,
} from './styled';

interface OwnProps {
    disabled: boolean;
    value: number;
    maxValue: number;
    count(value: number): void;
}

type Props = OwnProps;

class Counter extends PureComponent<Props> {
    static defaultProps = {
        disabled: false,
        value: 1,
        maxValue: 1,
        count: () => {},
    }

    render() {
        const {
            value,
            maxValue,
            count,
            disabled,
        } = this.props;
        return (
            <CounterRoot disabled={disabled}>
                <Minus onClick={() => ((value > 1) ? count(value - 1) : null)} />
                <span>{value}</span>
                <Plus onClick={() => ((value < (maxValue - 1)) ? count(value + 1) : null)} />
            </CounterRoot>
        );
    }
}

export default Counter;
