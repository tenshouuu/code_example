import React from 'react';
import { render } from 'react-dom';
import { App } from '@client/components';
import { hotjar } from 'react-hotjar';
import * as Sentry from '@sentry/browser';
import TagManager from 'react-gtm-module';

if (module.hot) {
    (module as any).hot.accept();
}

const tagManagerArgs = {
    gtmId: 'GTM-DSFSDS',
};

if (process.env.NODE_ENV === 'production') {
    hotjar.initialize(111111, 6);
    TagManager.initialize(tagManagerArgs);
    Sentry.init({
        dsn: 'https://sdfsdfsfddfsdf@error.example.ru//3',
        environment: process.env.NODE_ENV,
    });
}

render(<App />, document.getElementById('root'));
