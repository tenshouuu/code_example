import React from 'react';
import {
    StyledSkeleton, AvatarBlock, Avatar, StyledLines, StyledVideo,
} from './styled';

export interface SkeletonProps {
    active?: boolean;
    avatar?: boolean;
    loading?: boolean|number;
    rows?: number;
    [key: string]: any;
}

export default function Skeleton({
    loading = true,
    active = false,
    rows = 4,
    avatar = false,
    video = false,
    ...rest
}: SkeletonProps) {
    return (
        <StyledSkeleton
            loading={loading ? 1 : 0}
            avatar={avatar}
            video={video}
            {...rest}
        >
            {
                avatar && (
                    <AvatarBlock>
                        <Avatar active={active} />
                        <StyledLines rows={2} active={active} />
                    </AvatarBlock>
                )
            }
            {
                rows && (
                    <StyledLines rows={rows} active={active} />
                )
            }
            {
                video && (
                    <StyledVideo active={active} />
                )
            }
        </StyledSkeleton>
    );
}
