import React, { FunctionComponent, useContext } from 'react';
import {
    useHistory,
} from 'react-router';

import { AwesomeIcon, Subject, useSubject } from '@client/ui/components';

import { usePreviewLocation } from '@client/containers/PreviewRouteProvider';
import { LessonContext } from '@client/pages/Lesson/helpers';
import generateItems from './helpers/items';
import {
    HeaderRoot,
    StyledSubject,
    StyledLink,
    StyledPanel,
    Info,
} from './styled';

const Header: FunctionComponent = () => {
    const history = useHistory();
    const previewLocation = usePreviewLocation();
    const slug = useSubject();
    const lesson = useContext(LessonContext);
    const parentTitle = lesson?.isPaid ? 'Платный вебинар' : 'Бесплатный вебинар';

    return (
        <HeaderRoot {...props}>
            <StyledSubject selected>
                <Info
                    hide={
                        (history.action === 'POP'
                            ?? !previewLocation?.pathname
                            ?? previewLocation?.pathname?.startsWith('/auth'))
                    }
                >
                    <StyledLink
                        onClick={() => {
                            if (previewLocation?.pathname && slug) {
                                history.push({
                                    pathname: previewLocation.pathname,
                                    state: {
                                        slug,
                                    },
                                });
                            }
                        }}
                    >
                        <AwesomeIcon type="arrow" />
                    </StyledLink>
                    <h2>
                        {lesson?.title || ''}
                        {' '}
                        {parentTitle ? (
                            <>
                                <span>|</span>
                                <br />
                                {' '}
                                {parentTitle}
                            </>
                        ) : ''}
                    </h2>
                </Info>
                {
                    lesson
                        ? <StyledPanel items={generateItems(lesson)} />
                        : ''
                }
                <Subject.Text />
            </StyledSubject>
        </HeaderRoot>
    );
};

export default Header;
