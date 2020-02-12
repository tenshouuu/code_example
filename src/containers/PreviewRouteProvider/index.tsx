import React, {
    FunctionComponent, useContext, useEffect, useState,
} from 'react';
import { useLocation, RouteComponentProps } from 'react-router';


export interface PreviewRouteProviderProps {
    children: React.ReactElement;
}

type Props = PreviewRouteProviderProps;

export const PreviewRouteContext = React.createContext<RouteComponentProps['location'] | null>(null);

export const usePreviewLocation = () => {
    const value = useContext(PreviewRouteContext);
    return value;
};

const PreviewRouteProvider: FunctionComponent<Props> = ({ children }) => {
    const location = useLocation();
    const [prevLocation, setPrevLocation] = useState<RouteComponentProps['location'] | null>(null);
    const [currentLocation, setCurrentLocation] = useState<RouteComponentProps['location']>(location);

    useEffect(() => {
        if (currentLocation?.pathname && location.pathname !== currentLocation.pathname) {
            setPrevLocation(currentLocation);
        }
        setCurrentLocation(location);
    }, [location.pathname]);

    return (
        <PreviewRouteContext.Provider value={prevLocation}>
            {children}
        </PreviewRouteContext.Provider>
    );
};

export default PreviewRouteProvider;
