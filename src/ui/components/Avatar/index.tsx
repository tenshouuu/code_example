import React, { ReactElement } from 'react';
import { AvatarBlock, StyledAvatar, IconUserPreview } from './styled';

export interface AvatarProps {
    img: string;
}

export type Ref = HTMLElement;

const Avatar = React.forwardRef<Ref, AvatarProps>(
    ({ img, ...props }, ref) => (
        <AvatarBlock {...props} ref={ref as any}>
            {img ? <StyledAvatar src={img} alt="" /> : <IconUserPreview />}
        </AvatarBlock>
    ),
);

export default Avatar;
