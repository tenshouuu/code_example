import React, {
    FunctionComponent,
    useCallback,
    useEffect,
    useMemo,
    useState,
} from 'react';
import { useMediaQuery } from 'react-responsive';
import { useMutation, useQuery } from '@apollo/react-hooks';
import {
    Subject as SubjectType,
} from '@client/apollo/schemaTypes';
import { ModalProps } from '@client/ui/components/Modal';
import {
    SubjectProvider,
} from '@client/ui/components';
import { theme } from '@client/helpers';
import { getSubjectsToAdd, updateSubjects } from './schemas';
import {
    StyledSubject,
    SubjectsWrapper,
    SubjectWrapper,
    Check,
    StyledModal,
} from './styled';

export interface OwnProps extends ModalProps {
    onSave?();
}

type Props = OwnProps;
const AddSubjectsModal: FunctionComponent<Props> = (props) => {
    const [existSubjects, setExistSubjects] = useState<SubjectType[]>([]);
    const {
        isVisible = false,
        onClose = () => {},
        onSave = () => {},
    } = props;
    const { data } = useQuery(getSubjectsToAdd);

    const subjects = data?.subjects ?? [];
    const meSubjects = data?.me?.subjects?.filter(({ courses }) => courses.length > 0) ?? [];

    useEffect(() => {
        setExistSubjects([...meSubjects]);
    }, [data]);

    const filteredSubjects = useMemo(
        () => subjects.filter(({ courses }) => courses.length > 0),
        [subjects],
    );

    const existSubjectIds = useMemo(
        () => (existSubjects
            ? existSubjects.map(({ id = '' }) => id)
            : []
        ),
        [existSubjects],
    );
    const [saveSubjects] = useMutation(updateSubjects, {
        variables: {
            subjects: existSubjectIds,
        },
    });

    const toggleSubject = (subject: SubjectType) => () => {
        const { id = '' } = subject;
        if (existSubjectIds.includes(id)) {
            if (existSubjectIds.length === 1) return;
            setExistSubjects(existSubjects.filter(({ id: filterId }) => filterId !== id));
        } else {
            setExistSubjects([...existSubjects, subject]);
        }
    };
    const onSaveSubjects = () => {
        saveSubjects()
            .then(() => {
                if (onSave) {
                    onSave();
                    onClose();
                }
            });
    };
    const handleOnClose = useCallback(() => {
        if (existSubjects.length !== filteredSubjects.length) {
            setExistSubjects(meSubjects);
        }
        onClose();
    }, [existSubjects, filteredSubjects]);

    const isMobile = useMediaQuery({
        query: `(max-width: ${theme.tokens.mediaWidths.mobile}px)`,
    });

    if (!data) {
        return null;
    }

    return (
        <StyledModal
            isVisible={isVisible}
            onClose={handleOnClose}
            showCross={false}
            showMask={!isMobile}
            onOk={onSaveSubjects}
            okText="Сохранить"
        >
            <SubjectsWrapper>
                {
                    filteredSubjects && filteredSubjects.map((subject, index) => {
                        const { id, slug } = subject;
                        return (
                            <SubjectProvider
                                key={id || index}
                                value={{ subjectType: slug || 'math' }}
                            >
                                <SubjectWrapper onClick={(e) => { e.stopPropagation(); }}>
                                    <StyledSubject
                                        onClick={toggleSubject(subject)}
                                        forceText
                                        animated
                                    />
                                    <Check
                                        draw={id && existSubjectIds.includes(id)}
                                    />
                                </SubjectWrapper>
                            </SubjectProvider>
                        );
                    })
                }
            </SubjectsWrapper>
        </StyledModal>
    );
};

export default AddSubjectsModal;
