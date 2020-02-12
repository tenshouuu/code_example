import React, {
    FunctionComponent, useContext, useMemo, useState,
} from 'react';
import { useMediaQuery } from 'react-responsive';
import { useQuery } from '@apollo/react-hooks';

import { theme } from '@client/helpers';
import { Modal } from '@client/ui/components';

import { CourseIdContext } from '@client/pages/Courses';
import {
    FuryRoadRoot,
    AnimateWrapper,
    Title,
} from './styled';
import { Modules, ModalWrapper } from './components';
import { getFuryModules } from './schemas';
import {
    sortModules,
} from './helpers';

export interface FuryRoadProps {
    currentModuleId: string;
    subscriptionExpiredAt: string;
}

const FuryRoad: FunctionComponent<FuryRoadProps> = ({
    currentModuleId = '',
    subscriptionExpiredAt = '',
    ...props
}) => {
    const courseId = useContext(CourseIdContext);
    const [moduleId, setModuleId] = useState('');
    const [isShowModal, setIsShowModal] = useState(false);

    const { data } = useQuery(getFuryModules, {
        skip: !courseId,
        variables: {
            courseId,
        },
    });
    const sortedModules = useMemo(() => sortModules(data?.modules?.data || []), [data]);

    const isSemiDesktop = useMediaQuery({
        query: `(min-width: ${
            theme.tokens.mediaWidths.mobile + 1
        }px) and (max-width: ${
            theme.tokens.mediaWidths.semiDesktop
        }px)`,
    });
    const isSemiFull = useMediaQuery({
        query: `(min-width: ${
            theme.tokens.mediaWidths.mobile + 1
        }px) and (min-width: ${
            theme.tokens.mediaWidths.semiFull + 100
        }px)`,
    });

    const isMobile = useMediaQuery({
        query: `(max-width: ${theme.tokens.mediaWidths.mobile}px)`,
    });

    const limit = useMemo(() => {
        let newLimit = 3;
        if (isSemiDesktop) {
            newLimit = 2;
        } else if (isSemiFull) {
            newLimit = 4;
        } else if (isMobile) {
            newLimit = +sortedModules.length + (data?.course?.introductoryLesson ? 1 : 0);
        }
        return newLimit;
    }, [data, isSemiDesktop, isMobile, isSemiFull, sortedModules.length]);

    const handleShowModule = (id = '') => () => {
        setIsShowModal(true);
        setModuleId(id);
    };

    return (
        <FuryRoadRoot {...props}>
            <Title>План обучения</Title>
            <AnimateWrapper show={!!sortedModules.length}>
                <Modules
                    limit={limit}
                    currentModuleId={currentModuleId}
                    introLesson={data?.course?.introductoryLesson ?? null}
                    modules={sortedModules}
                    expiredAt={subscriptionExpiredAt}
                    handleShowModule={handleShowModule}
                />
            </AnimateWrapper>
            <Modal
                isVisible={isShowModal}
                onClose={() => {
                    setIsShowModal(false);
                }}
                onOk={() => {
                    setIsShowModal(false);
                }}
                buttons={<div />}
            >
                {moduleId ? (
                    <ModalWrapper
                        id={moduleId}
                    />
                ) : <div />}
            </Modal>
        </FuryRoadRoot>
    );
};

export default FuryRoad;
