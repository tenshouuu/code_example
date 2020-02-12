import React, { FunctionComponent } from 'react';
import {
    BrowserRouter as Router, Route, Redirect, Switch,
} from 'react-router-dom';
import styled from 'styled-components';
import { hot } from 'react-hot-loader/root';
import { ApolloProvider } from '@apollo/react-hooks';

import ThemeProvider from '@client/components/ThemeProvider';
import index from '@client/apollo';
import LoginChecker from '@client/containers/LoginChecker';
import ErrorsHandler from '@client/containers/ErrorsHandler';
import PreviewRouteProvider from '@client/containers/PreviewRouteProvider';
import ScrollRestoration from '@client/containers/ScrollRestoration';

import ResizeHandler from '@client/components/ResizeHandler';
import { routes } from './helpers';

const AppDiv = styled.div`
    width: 100%;
    min-height: 100vh;
`;

const App: FunctionComponent = () => (
    <ErrorsHandler>
        <ApolloProvider client={index}>
            <ResizeHandler>
                <Router>
                    <ScrollRestoration />
                    <PreviewRouteProvider>
                        <ThemeProvider>
                            <AppDiv>
                                <LoginChecker>
                                    <Switch>
                                        {routes.map(({
                                            Component, path, ...props
                                        }, i) => (
                                            <Route
                                                key={i}
                                                path={`${path}`}
                                                component={Component}
                                                {...props}
                                            />
                                        ))}
                                        <Route component={() => <Redirect to="/dashboard" />} />
                                    </Switch>
                                </LoginChecker>
                            </AppDiv>
                        </ThemeProvider>
                    </PreviewRouteProvider>
                </Router>
            </ResizeHandler>
        </ApolloProvider>
    </ErrorsHandler>
);

export default hot(App);
