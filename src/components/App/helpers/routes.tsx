import React from 'react';
import { Redirect } from 'react-router-dom';

import Onboard from '@client/pages/Onboard';
import MakeupLayout from '@client/components/MakeupLayout';
import RedirectInterim from '@client/pages/RedirectInterim';
import Logout from '@client/pages/Logout';
import { withConfirmChecker } from '@client/containers';
import Auth from '@client/pages/Auth';
import { RoutesType } from '@client/helpers';
import NotFound from "@client/pages/NotFound";

const routes: RoutesType = [
    {
        Component: () => <Redirect to="/dashboard" />,
        exact: true,
        path: '/',
    },
    {
        Component: withConfirmChecker(MakeupLayout),
        exact: false,
        path: '/(dashboard|cookiepolicy|privacy|diary|tests|test|webinar|lesson|courses)/:params?',
    },
    {
        Component: withConfirmChecker(NotFound),
        exact: false,
        path: '/pay',
    },
    {
        Component: withConfirmChecker(Onboard),
        exact: false,
        path: '/onboard',
    },
    {
        Component: Auth,
        exact: false,
        path: '/auth',
    },
    {
        Component: RedirectInterim,
        exact: true,
        path: '/redirect',
    },
    {
        Component: Logout,
        exact: true,
        path: '/logout',
    },
];


export {
    routes,
};
