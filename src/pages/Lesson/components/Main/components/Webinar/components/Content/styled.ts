import styled, { css, FlattenInterpolation } from 'styled-components';
import {
    createTypographyStyleByName,
    getColorByName,
    getFamilyByName,
    getMediaWidthByName,
    getShadowByName,
} from '@client/helpers';
import { Icon, Skeleton } from '@client/ui/components';
import { ContentState } from './index';

const renderFixedFrameStyles = () => ({
    fixedFrame = false,
}): FlattenInterpolation<any> => (fixedFrame ? css`
        @media (max-width: ${getMediaWidthByName('mobile')}) {
            & > iframe {
                display: block;
                position: fixed;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 100;
                min-height: 100%;
                top: 0;
            }
        }
    ` : css``);

export const StyledSkeleton = styled(Skeleton)`
    border-radius: 6px;
    overflow: hidden;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        border-radius: 0;
    }
`;

export const StyledLogo = styled(Icon.Logo)`
    width: 140px;
`;

export const TimerTitle = styled.div`
    margin-top: 30px;
    display: flex;
    align-items: center;

    & > h4,
    & > span {
        ${createTypographyStyleByName('paragraph1')};
        color: ${getColorByName('darkBlue')};
    }

    & > h4 {
        margin-left: 8px;
        font-family: ${getFamilyByName('medium')};
    }
`;


export const TimerPage = styled.div`
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 6px;
    width: 100%;
    overflow: hidden;
    box-shadow: ${getShadowByName('depth4')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        border-radius: 0;
    }
`;

const renderTimerPageStyles = ({ showTimer }) => (showTimer ? css`
        ${StyledSkeleton},
        & > iframe {
            display: none !important;
        }

        ${TimerPage} {
            display: flex;
        }
    ` : css``);

export const ContentRoot = styled.section<ContentState>`
    display: flex;
    height: 100%;
    overflow: hidden;
    padding: 28px;
    border-top-right-radius: 6px;
    border-bottom-right-radius: 6px;
    box-shadow: ${getShadowByName('depth4')};

    & > iframe {
        display: ${({ showFrame }) => (showFrame ? 'block' : 'none !important')};
        width: 100%;
        border-radius: 6px;
        box-shadow: ${getShadowByName('depth4')};
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        box-shadow: initial;

        &,
        & > iframe {
            border-radius: 0;
            min-height: 600px;
        }
    }

    ${renderTimerPageStyles}
    ${renderFixedFrameStyles()}
`;
