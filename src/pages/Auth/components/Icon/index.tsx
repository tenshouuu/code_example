import React from 'react';
import { Svg } from '@client/ui/components';

export default {
    Fullscreen: props => (
        <Svg viewBox="0 0 44 44" {...props}>
            <path fill="#FFF" fillRule="evenodd" d="M0 34.571h9.429V44h6.285V28.286H0v6.285zM9.429 9.43H0v6.285h15.714V0H9.43v9.429zM28.286 44h6.285v-9.429H44v-6.285H28.286V44zM34.57 9.429V0h-6.285v15.714H44V9.43h-9.429z" />
        </Svg>
    ),
    Play: props => (
        <Svg viewBox="0 0 44 44" {...props}>
            <path fill="#FFF" fillRule="evenodd" d="M15.4 30.8h4.4V13.2h-4.4v17.6zM22 0C9.9 0 0 9.9 0 22s9.9 22 22 22 22-9.9 22-22S34.1 0 22 0zm0 39.6c-9.68 0-17.6-7.92-17.6-17.6 0-9.68 7.92-17.6 17.6-17.6 9.68 0 17.6 7.92 17.6 17.6 0 9.68-7.92 17.6-17.6 17.6zm2.2-8.8h4.4V13.2h-4.4v17.6z" />
        </Svg>
    ),
};
