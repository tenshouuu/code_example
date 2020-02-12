import React from 'react';
import { SizeMe } from 'react-sizeme';
import { declOfNum } from '@client/helpers';

import {
    SelectRoot,
    Wrapper,
    StyledOption,
    OptionText,
    Selector,
    Label,
    // StyledArrow,
    Oval,
} from './styled';
import { selectOptionsType } from '../../index';

interface OwnProps {
    options: selectOptionsType;
    showArrow?: boolean;
    selectedValue: number;
    selectValue(value: number): void;
}

interface SelectState {
    widthValues: {
        [key: string]: number;
    };
}


type Props = OwnProps;

class Select extends React.PureComponent<Props, SelectState> {
    constructor(props) {
        super(props);
        const {
            options,
        } = this.props;

        const widthValues = {};

        options.forEach((value) => {
            widthValues[value] = 0;
        });

        this.state = {
            widthValues,
        };

        this.handleSetWidth = this.handleSetWidth.bind(this);
        this.handleSelectValue = this.handleSelectValue.bind(this);
    }

    handleSelectValue = (valueKey: number) => () => {
        const { selectValue, selectedValue } = this.props;
        if (selectedValue !== valueKey) {
            selectValue(valueKey);
        }
    };

    handleSetWidth = (valueKey: number) => (width: number) => {
        const { widthValues } = this.state;
        this.setState({
            widthValues: {
                ...widthValues,
                [valueKey]: Math.round(width),
            },
        });
    };

    render() {
        const {
            options,
            selectedValue,
            // showArrow = false,
        } = this.props;
        const { widthValues } = this.state;
        let offset = 0;
        options.some((value, i) => {
            if (selectedValue !== value) {
                offset += widthValues[value];
                return false;
            }
            return true;
        });
        return (
            <SelectRoot>
                <Wrapper>
                    <Selector
                        left={`${offset || 0}px`}
                        width={`${widthValues[selectedValue] || 0}px`}
                    >
                        <Oval />
                    </Selector>
                    {options.map((value, i) => (
                        <SizeMe refreshRate={100} key={i}>
                            {({ size }) => (
                                <StyledOption
                                    width={size.width || 0}
                                    selectValue={this.handleSelectValue(value)}
                                    setWidth={this.handleSetWidth(value)}
                                >
                                    <OptionText selected={selectedValue === value}>
                                        {value}
                                    </OptionText>
                                </StyledOption>
                            )}
                        </SizeMe>
                    ))}
                </Wrapper>
                <Label>
                    {declOfNum(selectedValue, ['месяц', 'месяца', 'месяцев'])}
                </Label>
            </SelectRoot>
        );
    }
}

export default Select;
