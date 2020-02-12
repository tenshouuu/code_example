import React, {
    FunctionComponent, useEffect, useState,
} from 'react';
import { useLocation, RouteComponentProps } from 'react-router';

const ScrollRestoration: FunctionComponent = () => {
    const location = useLocation();
    const [currentLocation, setCurrentLocation] = useState<RouteComponentProps['location']>(location);

    useEffect(() => {
        if (currentLocation?.pathname && location.pathname !== currentLocation.pathname) {
            window.scrollTo(0, 0);
        }
        setCurrentLocation(location);
    }, [location.pathname]);

    return null;
};

export default ScrollRestoration;
