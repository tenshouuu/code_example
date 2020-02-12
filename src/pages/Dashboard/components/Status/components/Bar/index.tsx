import React from 'react';
import { ColorType } from '@client/helpers/theme';
import {
    BarRoot,
} from './styled';

export interface BarProps {
    colorBar: ColorType;
    value?: number;
}

export interface BarState {
    value?: number;
}


export default class Bar extends React.PureComponent<BarProps, BarState> {
    state = {
        value: 0,
    };

    componentDidMount(): void {
        const { value } = this.props;
        setTimeout(() => {
            this.setState({ value });
        }, 300);
    }

    render() {
        const { value } = this.state;
        return (
            <BarRoot
                value={value}
                {...this.props}
            >
                <div>
                    <p>
                        {value}
                        %
                    </p>
                </div>
            </BarRoot>
        );
    }
}
