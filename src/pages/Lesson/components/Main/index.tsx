import React, { FunctionComponent, useContext } from 'react';
import { Route } from 'react-router-dom';
import { useLocation, useRouteMatch } from 'react-router';
import { LessonContext } from '@client/pages/Lesson/helpers';
import { Webinar } from './components';
import { MainRoot } from './styled';
import { routes } from './helpers';

// export interface MainProps {
//     lesson: Maybe<Lesson>;
// }

// type Props = MainProps;

const Main: FunctionComponent = ({ ...props }) => {
    const location = useLocation();
    const match = useRouteMatch();
    const lesson = useContext(LessonContext);

    return (
        <MainRoot showWebinar={location.pathname === match.url} {...props}>
            <Webinar lesson={lesson} />
            {routes.map(({ Component, path = '', exact = false }, i) => (
                <Route
                    key={i}
                    path={match.path + path}
                    exact={exact}
                    component={routeProps => <Component lesson={lesson} {...routeProps} />}
                />
            ))}
        </MainRoot>
    );
};

export default Main;
