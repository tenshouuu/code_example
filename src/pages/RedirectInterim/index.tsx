import React, { FunctionComponent } from 'react';
import { Spin } from '@client/ui/components';
import {
    RedirectRoot,
} from './styled';

const Redirect: FunctionComponent = props => (
    <RedirectRoot>
        <Spin />
        <span>
          Редиректим...
        </span>
    </RedirectRoot>
);

export default Redirect;
