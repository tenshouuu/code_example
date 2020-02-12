/* eslint-disable max-len */
import React, { FunctionComponent, useEffect, useState } from 'react';
import { declOfNum } from '@client/helpers';
import moment, { Moment } from 'moment';
import {
    Count,
    CountdownRoot, Period, Timer, TimerPart, Title,
} from './styled';

let timerId = 0;

const dateNames = {
    years: ['Год', 'Года', 'Лет'],
    months: ['Месяц', 'Месяца', 'Месяцев'],
    days: ['День', 'Дня', 'Дней'],
    hours: ['Час', 'Часа', 'Часов'],
    minutes: ['Минута', 'Минуты', 'Минут'],
    seconds: ['Секунда', 'Секунды', 'Секунд'],
};

type FormatField = 'year' | 'month' | 'day' | 'hour' | 'minute' | 'second';
type Format = FormatField[];

interface Counters {
    years: number | null;
    months: number | null;
    days: number | null;
    hours: number | null;
    minutes: number | null;
    seconds: number | null;
}

export interface CountdownProps {
    title: string;
    date: string;
    format: Format;
}
type Props = CountdownProps;
const Countdown: FunctionComponent<Props> = (props) => {
    const {
        title,
        date,
        format,
        ...anotherProps
    } = props;

    const [targetDate] = useState<Moment>(moment(date).utc(true));
    const [counters, setCounters] = useState<Counters>({
        years: null,
        months: null,
        days: null,
        hours: null,
        minutes: null,
        seconds: null,
    });
    const [showTimer, setShowTimer] = useState<boolean>(true);

    function onTick() {
        const duration = moment.duration(targetDate.diff(moment()));

        if (duration.asMilliseconds() > 0) {
            const countersState = { ...counters };

            if (format.includes('second') && duration.get('second') !== countersState.seconds) {
                countersState.seconds = duration.get('second');
            }
            if (format.includes('minute') && duration.get('minute') !== countersState.minutes) {
                countersState.minutes = duration.get('minute');
            }
            if (format.includes('hour') && duration.get('hour') !== countersState.hours) {
                countersState.hours = duration.get('hour');
            }
            if (format.includes('day') && duration.get('day') !== countersState.days) {
                countersState.days = duration.get('day');
            }
            if (format.includes('month') && duration.get('month') !== countersState.months) {
                countersState.months = duration.get('month');
            }
            if (format.includes('year') && duration.get('year') !== countersState.years) {
                countersState.years = duration.get('year');
            }

            setCounters(countersState);
        } else {
            setShowTimer(false);
        }
    }

    useEffect(() => {
        onTick();
        if (format.includes('second')) {
            timerId = setInterval(onTick, 1000);
        } else {
            timerId = setInterval(onTick, 15000);
        }
        return () => {
            clearInterval(timerId);
        };
    }, []);

    return (
        <CountdownRoot {...anotherProps}>
            {
                !showTimer
                    ? ''
                    : (
                        <>
                            <Title>{title}</Title>
                            <Timer>
                                {
                                    Object.keys(counters).map(key => (
                                        counters[key] === null
                                            ? ''
                                            : (
                                                <TimerPart key={key}>
                                                    <Count>{counters[key]}</Count>
                                                    <Period>
                                                        {declOfNum(counters[key], dateNames[key])}
                                                    </Period>
                                                </TimerPart>
                                            )))
                                }
                            </Timer>
                        </>
                    )
            }
        </CountdownRoot>
    );
};

export default Countdown;
