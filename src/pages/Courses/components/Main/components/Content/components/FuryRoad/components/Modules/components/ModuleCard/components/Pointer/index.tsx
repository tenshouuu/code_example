import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { getColorByName } from '@client/helpers';
import {Icon} from "@client/ui/components";

export interface PointerProps {
    current?: boolean;
    children: React.ReactElement;
}

type Props = PointerProps;

export const StyledPin = styled(Icon.Pin)``;

export const PointerRoot = styled.div<{ show: PointerProps['current'] }>`
    ${({ show }) => (show ? '' : 'display: none')};
    width: 68px;

    & > div {
        width: 100%;
        position: relative;

        & > *:last-child {
            position: relative;
        }

        & > ${StyledPin} {
            left: 0;
            top: 0;
            position: absolute;
            width: 100%;

            & > path {
                fill: ${getColorByName('darkBlue')};
            }
        }
    }
`;

const Pointer: FunctionComponent<Props> = ({
    children,
    current = true,
    ...props
}) => (
    <PointerRoot show={current} {...props}>
        <div>
            <StyledPin color="darkBlue" />
            {children}
        </div>
    </PointerRoot>
);

export default Pointer;
