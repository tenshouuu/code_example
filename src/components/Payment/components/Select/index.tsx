import React, { FunctionComponent, useState } from 'react';

import {
    SelectRoot,
    Selector,
    Options,
    Option,
} from './styled';

export interface SelectProps {
    count: number;
    setCount(c: number): void;
}

type Props = SelectProps;

const optionValues = [1, 3, 6];

const Select: FunctionComponent<Props> = ({
    count,
    setCount,
    ...props
}) => {
    const [index, setIndex] = useState(optionValues.indexOf(count));
    const handleSetCount = (i, value) => {
        setIndex(i);
        setCount(value);
    };

    return (
        <SelectRoot index={index} {...props}>
            <Options>
                {optionValues.map((value, i) => (
                    <Option
                        key={i}
                        onClick={() => handleSetCount(i, value)}
                    >
                        {value}
                    </Option>
                ))}
            </Options>
            <Selector>
                {`${count} мес.`}
            </Selector>
        </SelectRoot>
    );
};

export default React.memo(Select);
