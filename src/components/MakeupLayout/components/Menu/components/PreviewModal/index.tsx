import React, {
    FunctionComponent,
} from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import diaryPreview from '@client/assets/img/diaryPreview.png';
import testTextResultPreview from '@client/assets/img/testTextResultPreview.png';

import {
    PreviewModalRoot,
    Title,
    Description,
    Area,
    Panel,
    StyledButton,
    StyledPacman,
    PreviewImg,
} from './styled';

export interface OwnProps {
    isVisible: boolean;
    pathType: string;
    onClose(): void;
}

const previewByPathType = {
    '/dashboard/diary': diaryPreview,
    '/dashboard/tests': testTextResultPreview,
    '/diary': diaryPreview,
    '/tests': testTextResultPreview,
};

type Props = OwnProps & RouteComponentProps;

const PreviewModal: FunctionComponent<Props> = (props) => {
    const {
        isVisible = false,
        pathType = '/diary',
        onClose,
        history,
    } = props;
    return (
        <PreviewModalRoot
            isVisible={isVisible}
            buttons={[]}
            onClose={onClose}
        >
            <StyledPacman />
            <Title>Купи курс и открой возможность</Title>
            <Description>Вот так будет выглядеть наш сервис после покупки:</Description>
            <Area>
                <Panel>
                    <div />
                    <div />
                    <div />
                </Panel>
                <PreviewImg src={previewByPathType[pathType] ?? diaryPreview} />
            </Area>
            <StyledButton
                type="large"
                color="yellow"
                onClick={() => {
                    onClose();
                    setTimeout(() => {
                        history.push('/dashboard');
                    }, 300);
                }}
            >
                Купить курс
            </StyledButton>
        </PreviewModalRoot>
    );
};

export default withRouter(PreviewModal);
