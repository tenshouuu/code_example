import React, {
    FunctionComponent,
    useState,
} from 'react';
import { animateScroll } from 'react-scroll';
import {
    StyledIcon,
    AddSubjectRoot,
    Text,
    Fx,
} from './styled';
import { AddSubjectsModal } from './components';

export interface OwnProps {
    forceText?: boolean;
    onSave?();
}

type Props = OwnProps;

const AddSubject: FunctionComponent<Props> = (props) => {
    const [isModalOpened, toggleModal] = useState(false);
    const {
        forceText = false,
        onSave,
        ...rest
    } = props;
    const onClick = () => {
        animateScroll.scrollToTop({ duration: 300 });
        toggleModal(true);
    };
    return (
        <>
            <AddSubjectRoot onClick={onClick} {...rest}>
                <Fx />
                <Fx />
                <StyledIcon type="add" />
                <Text force={forceText}>Добавить предмет</Text>
            </AddSubjectRoot>
            <AddSubjectsModal
                isVisible={isModalOpened}
                onClose={() => toggleModal(false)}
                onSave={onSave}
            />
        </>
    );
};

export default AddSubject;
