import React, { FunctionComponent, useEffect } from 'react';
import { isMobileOnly } from 'react-device-detect';

const mobileContent = 'width=499, user-scalable=1, shrink-to-fit=no';
const desktopContent = 'width=device-width, user-scalable=no, initial-scale=1';


const handleResize = () => {
    if (isMobileOnly) {
        const clientWidth = window.innerWidth || 0;
        const clientHeight = window.innerHeight || 0;
        const viewport = document.querySelector('meta[name=viewport]');
        if (viewport) {
            const content = viewport.getAttribute('content');
            if (clientWidth > clientHeight) {
                if (mobileContent !== content) {
                    viewport.setAttribute(
                        'content',
                        mobileContent,
                    );
                }
            } else if (desktopContent !== content) {
                viewport.setAttribute(
                    'content',
                    desktopContent,
                );
            }
        }
    }
};

const ResizeHandler: FunctionComponent = ({ children }) => {
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize, true);
    }, []);
    return (
        <>
            { children }
        </>
    );
};

export default ResizeHandler;
