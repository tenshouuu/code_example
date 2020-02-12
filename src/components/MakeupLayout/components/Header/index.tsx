import React from 'react';
import { useMediaQuery } from 'react-responsive';

import Hamburger from '@client/components/Hamburger';
import { theme } from '@client/helpers';

import { useHistory, useLocation } from 'react-router';
import { Panel } from './components';
import {
    HeaderRoot,
    LogoWrapper,
    Logo,
} from './styled';

interface HeaderProps {
    toggleMenu(): void;
    isMenu: boolean;
}

export default function Header({ toggleMenu, isMenu }: HeaderProps): React.ReactElement {
    const isMobile = useMediaQuery({
        query: `(max-width: ${theme.tokens.mediaWidths.mobile}px)`,
    });
    const history = useHistory();
    const location = useLocation();

    return (
        <HeaderRoot>
            <Hamburger onClick={toggleMenu} />
            <LogoWrapper onClick={() => {
                if (location?.pathname !== '/dashboard') {
                    history.push('/dashboard');
                }
                if (isMenu) {
                    toggleMenu();
                }
            }}
            >
                <Logo type={isMobile ? 'light' : 'dark'} />
            </LogoWrapper>
            <Panel />
        </HeaderRoot>
    );
}
