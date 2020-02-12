import React from 'react';
import { RouteType } from '@client/helpers';
import { ColorType } from '@client/helpers/theme';

const LazyProfile = React.lazy(() => import('@client/pages/Dashboard'));
const LazyLesson = React.lazy(() => import('@client/pages/Lesson'));
const LazyTests = React.lazy(() => import('@client/pages/Tests'));
const LazyTest = React.lazy(() => import('@client/pages/Test'));
const LazyCourses = React.lazy(() => import('@client/pages/Courses'));
const LazyPayment = React.lazy(() => import('@client/pages/Pay'));
const LazyHelp = React.lazy(() => import('@client/pages/Help'));

const parentRoute = '/dashboard';

export interface OveridedRouteType extends RouteType {
    title?: string;
    icon?: string;
    disabled?: boolean;
    bgColor?: ColorType;
    isMobile?: boolean;
}

const routes: OveridedRouteType[] = [
    {
        title: 'главная',
        icon: 'user',
        bgColor: 'lightGray',
        Component: LazyProfile,
        exact: true,
        path: parentRoute,
    },
    {
        title: 'дневник',
        icon: 'schedule',
        Component: () => <div>дневник</div>,
        exact: true,
        path: '/diary',
        disabled: true,
    },
    {
        title: 'тесты',
        icon: 'message',
        bgColor: 'lightGray',
        Component: LazyTests,
        exact: false,
        path: '/tests',
    },

    // для старой совместимостимости ссылок
    {
        Component: LazyTest,
        exact: false,
        path: `${parentRoute}/test/:id`,
    },
    {
        Component: LazyTest,
        exact: false,
        path: '/test/:id',
    },

    {
        title: 'курсы',
        icon: 'job',
        bgColor: 'lightGray',
        Component: LazyCourses,
        exact: true,
        path: '/courses',
    },

    /*
    {
        title: 'материалы',
        icon: 'pazzle',
        Component: () => <div>материалы</div>,
        exact: false,
        path: `${parentRoute}/content`,
        disabled: true,
    },
    {
        title: 'настройки',
        icon: 'settings',
        Component: () => <div>настройки</div>,
        exact: false,
        path: `${parentRoute}/settings`,
        disabled: true,
    },
    */
    {
        title: 'инфо',
        icon: 'guard',
        Component: LazyHelp,
        exact: true,
        path: '/privacy',
        disabled: false,
    },
    {
        Component: LazyLesson,
        exact: false,
        path: '/lesson/:id',
    },
    // для старой совместимостимости ссылок
    {
        Component: LazyLesson,
        exact: false,
        path: '/webinar/:id',
    },
    /*
    {
        Component: LazyPayment,
        exact: true,
        title: 'баланс',
        path: '/pay',
        disabled: true,
        isMobile: true,
    },
    {
        path: parentRoute,
        Component: () => () => <div>поиск</div>,
        title: 'поиск',
        icon: 'search',
        disabled: true,
        isMobile: true,
        exact: true,
    },
    {
        path: parentRoute,
        Component: () => <div>статистика</div>,
        title: 'статистика',
        icon: 'score',
        disabled: true,
        isMobile: true,
        exact: true,
    },
    */
];

export default routes;
