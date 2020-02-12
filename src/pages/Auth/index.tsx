import React, { FunctionComponent, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import vkAuthBackground from '@client/assets/img/Auth/vk_background.jpg';
import logo from '@client/assets/img/example-logo.png';
import { validateUrl } from '@client/helpers/tools';
import {
    AuthRoot,
    Background,
    PlayerUi,
    PlayIcon,
    FullscreenIcon,
    Logo,
} from './styled';
import { routes } from './helpers';

type AuthProps = {};

const Auth: FunctionComponent<AuthProps> = () => {
    useState(() => {
        if (document.referrer) {
            const referrerUrl = new URL(document.referrer);
            if (validateUrl(referrerUrl) && !referrerUrl.pathname.startsWith('/auth')) {
                localStorage.setItem('referrer', referrerUrl.pathname + referrerUrl.search);
            }
        }
    });

    return (
        <AuthRoot>
            <Background src={vkAuthBackground} />
            <PlayerUi>
                <PlayIcon />
                <FullscreenIcon />
            </PlayerUi>
            <Logo src={logo} alt="example" />
            <Switch>
                {routes.map(({ Component, path, ...props }, i) => (
                    <Route
                        key={`authRoute${i}`}
                        path={`${path}`}
                        render={routeProps => (<Component {...routeProps} />)}
                        {...props}
                    />
                ))}
                <Route component={() => <Redirect to="/auth" />} />
            </Switch>
        </AuthRoot>
    );
};

export default Auth;
