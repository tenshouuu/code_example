import React, {
    FunctionComponent, useCallback, useEffect, useState,
} from 'react';
import { isMobileOnly } from 'react-device-detect';
import Iframe from 'react-iframe';
import { useMutation } from 'react-apollo';
import { ExecutionResult } from '@apollo/react-common';

import { Timer } from '@client/components/Webinar/components';
import { Maybe, Webinar, GenerateClickmeetingUrlMutation } from '@client/apollo/schemaTypes';
import {
    ContentRoot,
    TimerPage,
    StyledLogo,
    TimerTitle,
    StyledSkeleton,
} from './styled';

import { generateClickmeetingUrl, saveView } from './schemas';

export interface ContentProps {
    timerData: {
        startedAt: string;
        endedAt: string;
        duration: string;
    } | null;
    webinar: Maybe<Webinar>;
}

export interface ContentState {
    showFrame: boolean;
    showTimer: boolean;
    reserveUrl?: string;
    fixedFrame?: boolean;
}

const Content: FunctionComponent<ContentProps> = ({
    webinar,
    timerData,
}) => {
    const [isShowFrame, setIsShowFrame] = useState(false);
    const [isTimerPage, setIsTimerPage] = useState(false);
    const [fixedFrame, setFixedFrame] = useState(false);
    const [reserveUrl, setReserveUrl] = useState('');

    const [fetchClickmeetingUrl] = useMutation<GenerateClickmeetingUrlMutation>(generateClickmeetingUrl);
    const [fetchSaveView] = useMutation(saveView);

    const handleResizeWindow = () => {
        if (isMobileOnly) {
            const clientWidth = window.innerWidth || 0;
            const clientHeight = window.innerHeight || 0;
            if (clientWidth > clientHeight) {
                setFixedFrame(true);
            } else {
                setFixedFrame(false);
            }
        }
    };

    const handleSaveView = useCallback(() => {
        setTimeout(() => {
            fetchSaveView({
                variables: {
                    webinarId: webinar ? webinar.id : '',
                },
            })
                .then(({ data }) => {
                    if (!data.viewWebinar) {
                        setTimeout(handleSaveView, 2 * 60 * 1000);
                    }
                })
                .catch(() => setTimeout(handleSaveView, 2 * 60 * 1000));
        }, 25000);
    }, [webinar]);

    useEffect(() => {
        handleResizeWindow();
        window.addEventListener('resize', handleResizeWindow, true);
        return () => {
            window.removeEventListener('resize', handleResizeWindow);
        };
    }, []);

    const handleFetchClickmeetingUrl = useCallback(async () => {
        if (webinar && webinar.id) {
            try {
                const { data } = await fetchClickmeetingUrl({
                    variables: {
                        id: webinar.id,
                    },
                    context: {
                        timeout: 30000,
                        important: true,
                    },
                    fetchPolicy: 'no-cache',
                });
                if (data?.generateUserAutoLoginUrl) {
                    await fetch(data.generateUserAutoLoginUrl);
                    setIsTimerPage(false);
                    setReserveUrl(data.generateUserAutoLoginUrl);
                    handleSaveView();
                }
            } catch (e) {
                setIsTimerPage(true);
                setTimeout(() => handleFetchClickmeetingUrl(), 5 * 1000 * 60);
            }
        }
    }, [webinar]);

    useEffect(() => {
        handleFetchClickmeetingUrl();
    }, [webinar]);

    return (
        <ContentRoot
            showFrame={isShowFrame}
            showTimer={isTimerPage}
            fixedFrame={fixedFrame}
        >
            <Iframe
                id="clickmeetingFlashroomIframe"
                url={reserveUrl || ''}
                allow="camera; fullscreen;"
                allowFullScreen
                onLoad={() => { setIsShowFrame(true); }}
                width="100%"
                height="100%"
            />
            <TimerPage>
                <StyledLogo type="dark" />
                {timerData
                    ? (
                        <Timer
                            {...timerData}
                            render={
                                ({ label, date }) => (
                                    <TimerTitle>
                                        <span>{`${label}:`}</span>
                                        <h4>{date}</h4>
                                    </TimerTitle>
                                )
                            }
                        />
                    )
                    : '00:00:00'}
            </TimerPage>
            <StyledSkeleton video loading={!isShowFrame} />
        </ContentRoot>
    );
};

export default Content;
