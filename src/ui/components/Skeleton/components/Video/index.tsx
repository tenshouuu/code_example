import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Line, { LineProps } from '../Line';

const StyledLine = styled(Line)<LineProps>``;

const StyledVideo = styled.div`
    width: 100%;
    display: flex;
    position: relative;

    & > ${StyledLine} {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 0;
    }
`;

const SvgWrapper = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & > svg {
        display: block;
        height: auto;
        max-width: 800px;
    }
`;

const Video: FunctionComponent<LineProps> = ({ active, ...props }) => (
    <StyledVideo {...props}>
        <StyledLine active={active} />
        <SvgWrapper>
            <svg version="1.1" viewBox="0 0 222.48 172.74" height="100%" xmlns="http://www.w3.org/2000/svg">
                <g transform="translate(168.2 -14.42)" fill="none" fillRule="evenodd">
                    <g transform="translate(.144)">
                        <g transform="translate(-421.73 -61.722)">
                            <g transform="translate(76.943 -3.1147)">
                                <g transform="translate(197.54 103.72)" fill="#fff">
                                    <ellipse cx="26.335" cy="16.286" rx="17.254" ry="16.286" />
                                    <path d="m 56.302,63.429 56.303,66.857 H 0 Z" />
                                    <path d="m117.14 52.286 65.384 78h-130.77z" />
                                </g>
                                <g transform="translate(52.246,70.286)" fill="#6f47d3">
                                    <path d="m245.54 95.963c1.06 0.646 0.877 1.408 0.877 1.408s0.183 0.763-0.877 1.41l-12.915 8.337c-0.382 0.233-0.856 0.194-1.214 0.194-1.433 0-1.426-1.178-1.426-1.42v-17.042c0-0.287-7e-3 -1.42 1.426-1.42 0.358 0 0.832-0.039 1.214 0.194l12.915 8.338zm-9.731 24.38c-12.299 0-22.269-9.978-22.269-22.286s9.97-22.286 22.269-22.286c12.298 0 22.268 9.978 22.268 22.286s-9.97 22.286-22.268 22.286zm0-4.114c10.028 0 18.157-8.136 18.157-18.172s-8.13-18.171-18.157-18.171c-10.028 0-18.158 8.135-18.158 18.171s8.13 18.172 18.158 18.172z" />
                                </g>
                            </g>
                        </g>
                    </g>
                </g>
            </svg>
        </SvgWrapper>
    </StyledVideo>
);

export default Video;
