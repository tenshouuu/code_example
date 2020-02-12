import React from 'react';
import moment from 'moment';
import { useHistory } from 'react-router';
import { FooterRoot } from './styled';

export interface FooterProps {
    isMenu: boolean;
    toggleMenu(): void;
}

export default function Footer({ isMenu, toggleMenu }: FooterProps): React.ReactElement {
    const history = useHistory();
    return (
        <FooterRoot isShowMenu={isMenu}>
            <div onClick={() => {
                history.push('/privacy');
                if (isMenu) {
                    toggleMenu();
                }
            }}
            >
                Пользовательское соглашение
            </div>
            <p>{`©${moment().year()} Example — сервис онлайн-подготовки`}</p>
        </FooterRoot>
    );
}
