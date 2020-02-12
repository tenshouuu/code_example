import styled from 'styled-components';
import { Line, Lines, Video } from './components';
import { LineProps } from './components/Line';
import { LinesProps } from './components/Lines';
import { SkeletonProps } from './index';

const Avatar = styled(Line)<LineProps>`
    width: 54px;
    min-width: 54px;
    height: 54px;
    border-radius: 50%;
`;

const StyledLines = styled(Lines)<LineProps & LinesProps>``;
const StyledVideo = styled(Video)<LineProps>``;

const AvatarBlock = styled.div`
    display: flex;

    & > ${StyledLines} {
        flex: 1;
        margin-left: 20px;
    }
`;

// eslint-disable-next-line no-unexpected-multiline
const StyledSkeleton = styled.article<{
    loading: SkeletonProps['loading'];
    avatar: SkeletonProps['avatar'];
    video: SkeletonProps['video'];
}>`
    display: ${({ loading }) => (loading ? 'flex' : 'none')};
    margin-bottom: ${({ video }) => (!video ? '16px' : '')};
    width: 100%;

    & > ${AvatarBlock} {
        ${({ avatar, video }) => ((!avatar || video) ? 'display: none' : '')};
    }

    & > ${StyledVideo} {
        ${({ video }) => (!video ? 'display: none' : '')};
    }

    & > ${StyledLines} {
        ${({ video }) => (video ? 'display: none' : '')};
    }
`;

export {
    Avatar,
    AvatarBlock,
    StyledLines,
    StyledVideo,
    StyledSkeleton,
};
