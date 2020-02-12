import React, { useEffect } from 'react';
import {
    Start,
    Full,
} from './components';
import { DashboardRoot, LoadingRoot } from './styled';

let isAppendExperrto = false;

function Dashboard(props): React.ReactElement {
    // Experrto - http://jira.athr.ru/browse/EXAM-333
    useEffect(() => {
        if (!isAppendExperrto) {
            isAppendExperrto = true;
            const s = document.createElement('script');
            const f = document.querySelector('body');
            s.type = 'text/javascript';
            s.async = true;
            s.src = 'https://cdn.experrto.io/client/experrto.js';
            s.onload = () => {
                if (window?.Experrto?.identify) {
                    window.Experrto.identify('02fc9a7fb226c0f79fb999a498ff59bced29b8bf');
                }
            };
            if (f) {
                f.appendChild(s);
            }
        }
    }, []);
    return (
        <DashboardRoot>
            <Start />
        </DashboardRoot>
    );
}
export default Dashboard;
