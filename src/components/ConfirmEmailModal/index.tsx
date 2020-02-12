import React, {
    FunctionComponent,
    useCallback,
    useState,
} from 'react';
import {
    ConfirmEmailModalRoot,
    Title,
    Description,
    Input,
    Wrapper,
    StyledButton,
    StyledPacman,
} from './styled';

export interface OwnProps {
    isVisible: boolean;
    onOk(email?: string): void;
    onClose(): void;
}

type Props = OwnProps;

// eslint-disable-next-line no-useless-escape
const isEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ConfirmEmailModal: FunctionComponent<Props> = (props) => {
    const {
        isVisible = false,
        onClose,
        onOk,
    } = props;
    const [value, setValue] = useState('');
    const isEmailValid = useCallback(() => isEmail.test(value), [value]);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleOk = () => {
        if (isEmailValid()) {
            onOk(value);
        }
    };
    return (
        <ConfirmEmailModalRoot
            isVisible={isVisible}
            buttons={[]}
            onClose={onClose}
        >
            <StyledPacman
                firstColor="#7750da"
                secondColor="#7c58da"
            />
            <Wrapper>
                <Title>Уже почти-почти</Title>
                <Description>Введи почту, чтобы получить чек о твоем заказе</Description>
                <Input
                    placeholder="Твой email"
                    onChange={handleChange}
                    isvalid={isEmailValid()}
                />
                <StyledButton
                    onClick={handleOk}
                    type="large"
                >
                    Готово
                </StyledButton>
            </Wrapper>
        </ConfirmEmailModalRoot>
    );
};

export default ConfirmEmailModal;
