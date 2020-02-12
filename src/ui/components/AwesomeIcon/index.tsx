import React from 'react';

export interface IconProps {
    type: string;
    className?: string;
}

function AwesomeIcon({ type = '', className = '', ...props }: IconProps): React.ReactElement {
    return <i className={`icon-${type} ${className}`} {...props} />;
}

export default AwesomeIcon;
