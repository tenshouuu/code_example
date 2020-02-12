import React from 'react';
import { ThemeProvider } from '@client/helpers/styled-components';
import { tokens } from '@client/helpers/theme';

import GlobalStyle from './styled';

export default class Component extends React.PureComponent<{children: React.ReactElement}, {}> {
    render() {
        const { children } = this.props;
        return (
            <ThemeProvider theme={tokens}>
                <>
                    {children}
                    <GlobalStyle />
                </>
            </ThemeProvider>
        );
    }
}
