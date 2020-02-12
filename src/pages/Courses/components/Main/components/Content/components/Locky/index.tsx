import React, { FunctionComponent } from 'react';
import { AwesomeIcon } from '@client/ui/components';
import {
    LockyRoot,
} from './styled';

export interface LockyProps {
    isLocked: boolean;
}

type Props = LockyProps;

const Locky: FunctionComponent<Props> = ({ isLocked, ...props }) => (
    <LockyRoot {...props}>
        <AwesomeIcon type={isLocked ? 'lock' : 'unlock'} />
    </LockyRoot>
);

export default Locky;
