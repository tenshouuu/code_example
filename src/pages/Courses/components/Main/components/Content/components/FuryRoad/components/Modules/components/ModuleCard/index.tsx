import React, {
    FunctionComponent, useCallback, useContext, useMemo, useState,
} from 'react';
import { Maybe, Module as ModuleType } from '@client/apollo/schemaTypes';
import { declOfNum } from '@client/helpers';
import moment from 'moment';
import { useHistory } from 'react-router';
import { CourseIdContext } from '@client/pages/Courses';
import {
    Header,
    Label,
    Footer,
    StyledPointer,
    WebinarTypeName,
    WebinarName,
    Description,
    ExpDateTitle,
    StyledButton,
    StyledLocky,
} from './styled';
import { getDateText } from './helpers';

export interface ModuleCardProps {
    status: ModuleCardTypeEnum;
    current?: boolean;
    className?: string;
    orderIndex: number;
    data: Maybe<ModuleType>;
    introData?: null | {
        id: string;
        title: string;
        startedAt: string;
    };
    handleClick?(p?: boolean): void;
}

type Props = ModuleCardProps;

export enum ModuleCardTypeEnum {
    INTRO = 'intro',
    BOUGHT = 'bought',
    FIRST_LOCKED = 'first_locked', // первый не купленный модуль
    LOCKED = 'locked',
}


const ModuleCard: FunctionComponent<Props> = (props) => {
    const {
        data,
        status,
        className = '',
        orderIndex,
        introData,
        current = false,
        handleClick,
    } = props;
    const history = useHistory();
    const courseId = useContext(CourseIdContext);
    const [isHover, setIsHover] = useState(false);

    const state = useMemo(() => {
        let title = data?.title ?? 'Модуль без названия';
        let label = `Модуль ${orderIndex}`;
        const isHeaderDisabled = !!(data?.lessons && (data?.lessons.length === 0));
        let isButtonDisabled = isHeaderDisabled;
        let headerOnClick = (e) => {
            e.preventDefault();
            if (handleClick && data?.lessons && (data?.lessons.length > 0)) {
                handleClick();
            }
        };
        let buttonOnClick = headerOnClick;
        let buttonText = 'Разблокировать';
        let isLocked = true;

        switch (status) {
            case ModuleCardTypeEnum.INTRO:
                isLocked = false;
                label = 'Вводный урок';
                title = introData?.title ?? title;
                buttonText = 'Разблокировано';
                headerOnClick = (e) => {
                    e.preventDefault();
                    history.push(`/lesson/${introData?.id ?? ''}`);
                };
                buttonOnClick = headerOnClick;
                break;
            case ModuleCardTypeEnum.BOUGHT:
                isLocked = false;
                buttonText = 'Разблокировано';
                break;
            case ModuleCardTypeEnum.FIRST_LOCKED:
            case ModuleCardTypeEnum.LOCKED:
                isButtonDisabled = false;
                buttonOnClick = (e) => {
                    e.preventDefault();
                    history.push(`/pay?ids[]=${courseId}`);
                };
                break;
            default:
                break;
        }

        return {
            label,
            title,
            isLocked,
            buttonText,
            headerOnClick,
            buttonOnClick,
            isHeaderDisabled,
            isButtonDisabled,
        };
    }, [courseId, data, handleClick, history, introData, orderIndex, status]);

    const {
        label,
        title,
        isLocked,
        buttonText,
        headerOnClick,
        buttonOnClick,
        isHeaderDisabled,
        isButtonDisabled,
    } = state;

    const handleSetIsHover = useCallback((val: boolean) => {
        if (!isHeaderDisabled) {
            setIsHover(val);
        }
    }, [isHeaderDisabled]);

    const lessons = data?.lessons ?? [];

    const homeworkTemplateCount = useMemo(() => {
        if (data?.lessons) {
            return data.lessons.reduce<number>((counter, lesson) => {
                if (lesson?.homeworkTemplate?.id) {
                    return counter + 1;
                }
                return counter;
            }, 0);
        }
        return 0;
    }, [data]);

    return (
        <>
            <Header
                status={status}
                className={className}
                isHover={isHover}
                disabled={isHeaderDisabled}
                onMouseEnter={() => handleSetIsHover(true)}
                onMouseLeave={() => handleSetIsHover(false)}
                onClick={headerOnClick}
            >
                <StyledPointer current={current}>
                    <span>Ты здесь</span>
                </StyledPointer>
                <Label>{label}</Label>
                <WebinarTypeName title={title}>{title}</WebinarTypeName>
            </Header>
            <Footer
                status={status}
                isHover={isHover}
                className={className}
                disabled={isHeaderDisabled}
                buttonDisabled={isButtonDisabled}
                onMouseEnter={() => handleSetIsHover(true)}
                onMouseLeave={() => handleSetIsHover(false)}
                onClick={headerOnClick}
            >
                <Description>
                    {(lessons?.length > 0)
                        ? `${lessons.length} ${declOfNum(lessons.length, ['урок', 'урока', 'уроков'])}`
                        : ''}
                    {(homeworkTemplateCount > 0)
                        ? `, ${homeworkTemplateCount} ${declOfNum(
                            homeworkTemplateCount,
                            ['домашка', 'домашки', 'домашек'],
                        )}`
                        : ''}
                </Description>
                <ExpDateTitle>
                    {getDateText({
                        startedAt: data?.startedAt ?? introData?.startedAt ?? '',
                        endedAt: data?.endedAt ?? '',
                    })}
                </ExpDateTitle>
                <StyledButton
                    onClick={buttonOnClick}
                    disabled={isButtonDisabled}
                >
                    <StyledLocky isLocked={isLocked} />
                    <span>{buttonText}</span>
                </StyledButton>
            </Footer>
        </>
    );
};

export default ModuleCard;
