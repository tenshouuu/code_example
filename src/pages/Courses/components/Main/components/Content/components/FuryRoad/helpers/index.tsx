import moment from 'moment';

import { Module } from '@client/apollo/schemaTypes';

export const sortModules: (
    m: Module[],
) => Module[] = modules => modules.sort((a, b) => moment.utc(
    (a && a.startedAt) ? a.startedAt : moment(),
).diff(moment.utc(
    (b && b.startedAt) ? b.startedAt : moment(),
)));
