import React, {
    FunctionComponent, useEffect, useState,
} from 'react';
import moment, { Moment } from 'moment';

import { useInterval } from '@client/helpers';

export type TimerType = Moment | null;
export interface TimerProps {
    time: TimerType;
    isPause?: boolean;
    onEnd?(): void;
}

export const useTimerState: () => [{
    timer: TimerType;
    isPause: boolean;
}, {
    setIsPause(p: boolean): void;
    setTime(s: string): void;
}] = () => {
    const [isPause, setIsPause] = useState(true);
    const [timer, setTimer] = useState<TimerType>(() => moment('00:00:00', 'HH:mm:ss'));
    return [{
        timer,
        isPause,
    },
    {
        setIsPause,
        setTime: str => setTimer(moment(str, 'HH:mm:ss')),
    }];
};

const Timer: FunctionComponent<TimerProps> = ({
    time,
    onEnd,
    isPause = false,
    ...props
}) => {
    const [timeString, setTimeString] = useState('00:00:00');
    useInterval(() => {
        if (!isPause) {
            if (time?.format('HH:mm:ss') !== '00:00:00') {
                setTimeString(time?.subtract(1, 's')?.format('HH:mm:ss') ?? 'Invalid time');
            } else if (onEnd) {
                onEnd();
            }
        }
    }, 1000);

    useEffect(() => {
        if (time?.format('HH:mm:ss') && time?.format('HH:mm:ss') !== timeString) {
            setTimeString(time?.format('HH:mm:ss'));
        }
    }, [time, timeString]);

    return (
        <>{timeString || '00:00:00'}</>
    );
};

export default React.memo(Timer);
