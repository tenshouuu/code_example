import React, { FunctionComponent, useEffect, useState } from 'react';

import { AnimateRoot } from './styled';

export interface AnimateProps {
    show: boolean;
    duration?: number;
    children: React.ReactElement;
}

type Props = AnimateProps;

const Animate: FunctionComponent<Props> = ({
    children,
    duration = 200,
    show = false,
    ...props
}) => {
    const [isAnimate, toggleIsAnimate] = useState(show);
    useEffect(() => {
        if (show && !isAnimate) {
            setTimeout(() => toggleIsAnimate(true), duration);
        }
        if (!show && isAnimate) {
            toggleIsAnimate(false);
        }
    }, [show]);
    if (show) {
        return <AnimateRoot isAnimate={isAnimate} {...props}>{children}</AnimateRoot>;
    }
    return <></>;
};

export default Animate;
