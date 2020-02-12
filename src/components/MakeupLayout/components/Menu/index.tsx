import React, { useState } from 'react';
import {
    Button,
    AwesomeIcon as Icon,
} from '@client/ui/components';
import { useMediaQuery } from 'react-responsive';
import { theme } from '@client/helpers';
import { routes } from '../Main/helpers';
import {
    MenuRoot,
    NavItem,
    PhoneLink,
    StyledLink,
    LinkList,
    IconContainer,
    NavHighlight,
    Locker,
    Wrapper,
} from './styled';
import { Profile, PreviewModal } from './components';

interface MenuProps {
    toggleMenu(): void;
}

export default function Menu({ toggleMenu }: MenuProps): React.ReactElement {
    const [modalState, setModalState] = useState<{
        show: boolean;
        path: string;
    }>({
        show: false,
        path: '',
    });
    const {
        show,
        path: pathType,
    } = modalState;
    const isMobileMenuToggleable = useMediaQuery({
        query: `(max-width: ${theme.tokens.mediaWidths.mobile}px)`,
    });
    return (
        <MenuRoot>
            <Profile />
            <LinkList>
                {
                    routes.map(({
                        path,
                        title = '',
                        icon = '',
                        exact,
                        disabled = false,
                        bgColor = 'white',
                        isMobile = false,
                    }, i) => icon && (
                        <NavItem
                            key={i}
                            to={path}
                            exact={exact}
                            disabled={disabled}
                            activeClassName="active"
                            background={bgColor}
                            ismobile={isMobile ? 1 : 0}
                            onClick={
                                isMobileMenuToggleable && !disabled
                                    ? toggleMenu
                                    : () => {}
                            }
                        >
                            <Wrapper onClick={(e) => {
                                if (disabled && !isMobileMenuToggleable) {
                                    e.preventDefault();
                                    setModalState({
                                        show: true,
                                        path,
                                    });
                                }
                            }}
                            >
                                <NavHighlight />
                                <IconContainer>
                                    <Locker>
                                        <Icon type="lock" />
                                    </Locker>
                                    <Icon type={icon} />
                                </IconContainer>
                                <span>{title}</span>
                            </Wrapper>
                        </NavItem>
                    ))
                }
            </LinkList>
            <PhoneLink href="tel:8-800-123-45-67">8 800 123 45 67</PhoneLink>
            <PreviewModal
                isVisible={show}
                pathType={pathType}
                onClose={() => setModalState({
                    show: false,
                    path: pathType,
                })}
            />
        </MenuRoot>
    );
}
