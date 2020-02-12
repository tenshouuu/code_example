import React, { PureComponent } from 'react';
import styled from 'styled-components';

interface OwnProps {
    width: number;
    children: React.ReactElement;
    setWidth(width: number): void;
    selectValue(): void;
}

type Props = OwnProps;

type State = Readonly<{

}>;

const StyledOption = styled.div``;

class Option extends PureComponent<Props, State> {
    componentDidUpdate(prevProps): void {
        const { width, setWidth } = this.props;
        if (prevProps.width !== width) {
            setWidth(width);
        }
    }

    render() {
        const { children, selectValue, ...props } = this.props;

        return (
            <StyledOption onClick={selectValue} {...props}>
                {children}
            </StyledOption>
        );
    }
}

export default Option;
