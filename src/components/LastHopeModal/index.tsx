import React, {
    FunctionComponent, useCallback, useState,
} from 'react';
import { useMutation } from '@apollo/react-hooks';

import {
    LastHopeModalRoot,
    StyledPacman,
    Title,
    Label,
    StyledButton,
    StyledInput,
    DoggyArea,
    Doggy,
    Placeholder,
    ContentWrapper,
} from './styled';
import { createRecallRequest } from './shemas';

export interface OwnProps {
    isVisible: boolean;
    onClose(): void;
}

type Props = OwnProps;

const LastHopeModal: FunctionComponent<Props> = (props) => {
    const {
        isVisible = false,
        onClose,
    } = props;

    const [fetchPhoneData] = useMutation(createRecallRequest);
    const [phone, setPhone] = useState('');
    const [isValid, setValid] = useState(true);
    const handleSetPhone = useCallback((val: string) => {
        if (!isValid) {
            setValid(true);
        }
        setPhone(val);
    }, [phone, isValid]);

    const handleSubmit = () => {
        if (phone.length < 11) {
            setValid(false);
        } else {
            fetchPhoneData({ variables: { phone } });
            onClose();
        }
    };

    return (
        <LastHopeModalRoot
            isVisible={isVisible}
            buttons={[]}
            onClose={onClose}
        >
            <ContentWrapper>
                <StyledPacman />
                <DoggyArea>
                    <Doggy />
                    <Placeholder />
                </DoggyArea>
                <Title>Купи сейчас, второй месяц в подарок!</Title>
                <Label>Введи номер, мы тебе перезвоним</Label>
                <StyledInput
                    radix="."
                    onAccept={(value, mask) => {
                        handleSetPhone(mask.unmaskedValue);
                    }}
                    mask="+{7} ( 000 ) 000 - 00 - 00"
                    placeholder="+7 ( ___ ) ___ - __ - __"
                    isValid={isValid}
                />
                <StyledButton
                    type="large"
                    color="yellow"
                    onClick={handleSubmit}
                >
                    Позвони мне, позвони
                </StyledButton>
            </ContentWrapper>
        </LastHopeModalRoot>
    );
};

export default LastHopeModal;
