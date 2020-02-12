import React from 'react';
import { RoutesType } from '@client/helpers';
import { Homework } from '../components';

const routes: RoutesType = [
    {
        Component: () => <div />,
        path: '',
        exact: true,
    },
    {
        Component: () => <div>Материалы</div>,
        path: '/content',
    },
    {
        Component: () => <div>Рабочая тетрадь</div>,
        path: '/workbook',
    },
    {
        path: '/homework',
        Component: props => <Homework {...props} />,
    },
];

export {
    routes,
};
