import React, { FunctionComponent } from 'react';

import moment from 'moment';
import { StyledModules } from './styled';
import { Module } from './components';
import { AboutProps } from '../../index';

export interface ModulesProps {
    data: AboutProps['modules'];
}

const Modules: FunctionComponent<ModulesProps> = ({ data }) => {
    const filteredModules = data.sort((a, b) => moment.utc(
        (a && a.endedAt) ? a.endedAt : moment(),
    ).diff(moment.utc(
        (b && b.endedAt) ? b.endedAt : moment(),
    )));
    return (
        <StyledModules>
            {filteredModules.slice(0, 3).map(module => (module ? <Module key={module.id} data={module} /> : ''))}
        </StyledModules>
    );
};

export default Modules;
