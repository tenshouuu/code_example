import React, {
    Suspense,
} from 'react';
import {
    Route,
    Switch,
    Redirect,
} from 'react-router-dom';
import { Spin } from '@client/ui/components';
import {
    MainRoot,
    Fallback,
} from './styled';
import { routes } from './helpers';

export default function Main({ isFixedHeight }): React.ReactElement {
    return (
        <MainRoot isFixedHeight={isFixedHeight}>
            <Suspense fallback={(
                <Fallback>
                    <Spin color="purple" />
                </Fallback>
            )}
            >
                <Switch>
                    {routes.map(({ Component, path, exact }, i) => (
                        <Route
                            key={i}
                            path={path}
                            exact={exact}
                            render={routeProps => (
                                <Component
                                    {...routeProps}
                                />
                            )}
                        />
                    ))}
                    <Route render={() => <Redirect to="/dashboard" />} />
                </Switch>
            </Suspense>
        </MainRoot>
    );
}
