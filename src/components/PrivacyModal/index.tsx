import React, { FunctionComponent } from 'react';

import { ModalProps } from '@client/ui/components/Modal';
import { agreementText } from '@client/pages/Help/helpers';
import { Modal } from '@client/ui/components';

import { Text } from './styled';

export type PrivacyModalProps = ModalProps;

const PrivacyModal: FunctionComponent<PrivacyModalProps> = ({
    isVisible,
    onClose,
}) => (
    <Modal
        isVisible={isVisible}
        onClose={onClose}
        onOk={onClose}
    >
        <Text>
            {agreementText}
        </Text>
    </Modal>
);

export default PrivacyModal;
