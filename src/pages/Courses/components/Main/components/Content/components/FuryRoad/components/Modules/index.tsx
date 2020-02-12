import React, {
    Fragment, FunctionComponent, useContext, useMemo,
} from 'react';
import moment from 'moment';

import { Lesson, Maybe, Module } from '@client/apollo/schemaTypes';
import { CourseIdContext } from '@client/pages/Courses';

import { ModuleCardTypeEnum } from './components/ModuleCard';
import { BridgeStatusEnum, OrientationEnum } from './components/Bridge';
import {
    EmptyBridge, EmptyModule, RowWrapper, StyledBridge, StyledModule,
} from './styled';
import { getInfoByDate } from './helpers';

export interface ModulesProps {
    limit: number;
    currentModuleId: string;
    modules: Module[];
    expiredAt: string;
    introLesson: Maybe<Lesson>;
    handleShowModule(id: string): () => void;
}

type Props = ModulesProps;

const Modules: FunctionComponent<Props> = ({
    limit = 3,
    modules = [],
    introLesson,
    expiredAt = '',
    currentModuleId = '',
    handleShowModule,
}) => {
    let levelIndex = 0;
    const introCount = introLesson ? 1 : 0;
    const mExpiredAt = expiredAt ? moment.utc(expiredAt, 'YYYY-MM-DD HH:mm:ss') : null;
    const introInfo = getInfoByDate({
        mExpiredAt,
        nextModule: modules?.[0] ?? null,
        startedAt: introLesson?.startedAt || '',
    });

    const rows = useMemo(() => {
        const levels: React.ReactElement[][] = [
            introLesson ? [
                <Fragment key={-1}>
                    <StyledModule
                        data={null}
                        orderIndex={0}
                        status={ModuleCardTypeEnum.INTRO}
                        introData={{
                            id: introLesson.id,
                            title: introLesson.title,
                            startedAt: introLesson?.startedAt,
                        }}
                    />
                    <StyledBridge
                        moduleEndedAt=""
                        status={introInfo.bridgeStatus === BridgeStatusEnum.UNAVAILABLE
                            ? BridgeStatusEnum.AVAILABLE : introInfo.bridgeStatus}
                        maxWidthLimit={0}
                        test={null}
                    />
                </Fragment>,
            ] : [],
        ];
        let lastIsBefore: null | boolean = null;

        modules.forEach((module, i) => {
            // проверка на вхождение в дату истечения подписки текущего и следующего модуля
            const {
                bridgeStatus,
                isBefore,
            } = getInfoByDate({
                mExpiredAt,
                nextModule: modules?.[i + 1] ?? null,
                startedAt: module?.startedAt || '',
            });

            if (lastIsBefore === null) {
                lastIsBefore = isBefore;
            }

            if (!levels[levelIndex]) {
                levels[levelIndex] = [];
            }

            let maxWidthLimit = 0;

            if (modules.length - i - introCount < limit) {
                maxWidthLimit = limit;
            }
            const isReverse = (levelIndex % 2) === 1;
            const isCurrent = currentModuleId === module.id && !isBefore;
            let moduleStatus = isBefore ? ModuleCardTypeEnum.LOCKED : ModuleCardTypeEnum.BOUGHT;
            if (lastIsBefore !== isBefore) {
                moduleStatus = ModuleCardTypeEnum.FIRST_LOCKED;
            }

            if (i === (modules.length - 1)) {
                levels[levelIndex].push(<StyledModule
                    key={levels[levelIndex].length}
                    orderIndex={i + 1}
                    current={isCurrent}
                    handleClick={handleShowModule(module.id)}
                    status={moduleStatus}
                    data={module}
                />);
            } else if ((i !== 0 && ((i + 1 + introCount) % limit) === 0) || (i === 0 && introCount === 1 && limit === 2)) {
                // последний элемент в строке
                levels[levelIndex]
                    .push(
                        <Fragment key={levels[levelIndex].length}>
                            <StyledModule
                                handleClick={handleShowModule(module.id)}
                                orderIndex={i + 1}
                                current={isCurrent}
                                status={moduleStatus}
                                data={module}
                            />
                        </Fragment>,
                    );
                const bridgeComponent = (
                    <Fragment key={levels[levelIndex].length}>
                        <StyledBridge
                            test={module?.test ?? null}
                            moduleEndedAt={module?.endedAt ?? ''}
                            orientation={(levelIndex % 2) ? OrientationEnum.LEFT : OrientationEnum.RIGHT}
                            status={bridgeStatus}
                        />
                    </Fragment>
                );
                if (isReverse) {
                    levels[levelIndex].push(bridgeComponent);
                } else {
                    levels[levelIndex].unshift(bridgeComponent);
                }
                levelIndex++;
            } else {
                // элемент первый из всех или между элементами в строке
                const BridgeComponent = (
                    <StyledBridge
                        test={module?.test ?? null}
                        status={bridgeStatus}
                        moduleEndedAt={module?.endedAt ?? ''}
                        maxWidthLimit={maxWidthLimit}
                    />
                );
                levels[levelIndex].push(
                    <Fragment key={levels[levelIndex].length}>
                        {isReverse ? BridgeComponent : null}
                        <StyledModule
                            handleClick={handleShowModule(module.id)}
                            orderIndex={i + 1}
                            current={isCurrent}
                            status={moduleStatus}
                            data={module}
                        />
                        {isReverse ? null : BridgeComponent}
                    </Fragment>,
                );
            }
            lastIsBefore = isBefore;
        });
        const lastLevelRow = levels[levels.length - 1];
        if (lastLevelRow.length < limit) {
            for (let i = 0; i < limit; i++) {
                if (!lastLevelRow[i]) {
                    lastLevelRow.push(
                        <Fragment key={i}>
                            <EmptyModule />
                            <EmptyBridge />
                        </Fragment>,
                    );
                }
            }
            levels[levels.length - 1] = lastLevelRow;
        }
        return levels;
    }, [
        currentModuleId,
        handleShowModule,
        introCount,
        introInfo.bridgeStatus,
        introLesson,
        levelIndex,
        limit,
        mExpiredAt,
        modules,
    ]);

    return (
        <>
            {rows.map((rowItems, i) => (
                <RowWrapper key={i} reverse={!!(i % 2)}>
                    {(i % 2) === 1 ? rowItems.reverse() : rowItems}
                </RowWrapper>
            ))}
        </>
    );
};

export default Modules;
