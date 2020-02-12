import React, {
    FunctionComponent,
    useCallback,
    useState,
} from 'react';
import { isMobileOnly } from 'react-device-detect';

import LastHopeModal from '@client/components/LastHopeModal';

import {
    MakeupLayoutRoot,
} from './styled';
import {
    Main,
    Header,
    Menu,
    Footer,
} from './components';

export interface MakeupLayoutState {
    isShowMenu: boolean;
}

const MakeupLayout: FunctionComponent = () => {
    const [isShowMenu, setShowMenu] = useState<MakeupLayoutState['isShowMenu']>(false);
    const [isLastHopeModal, setLastHopeModal] = useState(false);

    const toggleMenu = useCallback(() => {
        setShowMenu(!isShowMenu);
    }, [isShowMenu]);

    const toggleLastHopeModal = useCallback(() => {
        localStorage.setItem('phone_preview', '1');
        setLastHopeModal(!isLastHopeModal);
    }, [isLastHopeModal]);

    return (
        <MakeupLayoutRoot
            isShowMenu={isShowMenu}
            onMouseLeave={() => {
                if (localStorage.getItem('phone_preview') !== '1'
                    && !isMobileOnly
                    && !isLastHopeModal) {
                    setLastHopeModal(true);
                }
            }}
        >
            <Menu toggleMenu={toggleMenu} />
            <Header toggleMenu={toggleMenu} isMenu={isShowMenu} />
            <Main isFixedHeight={isShowMenu} />
            <Footer isMenu={isShowMenu} toggleMenu={toggleMenu} />
            <LastHopeModal
                isVisible={isLastHopeModal}
                onClose={toggleLastHopeModal}
            />
        </MakeupLayoutRoot>
    );
};

export default MakeupLayout;
