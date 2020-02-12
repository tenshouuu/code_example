import React from 'react';
import { VkAuth, AuthChooser } from '@client/pages/Auth/components';
import { RoutesType } from '@client/helpers';

const parentRoute = '/auth';

const routes: RoutesType = [
    {
        Component: AuthChooser,
        exact: true,
        path: parentRoute,
    },
    {
        Component: VkAuth,
        exact: false,
        path: `${parentRoute}/vk`,
    },
];

export default routes;
