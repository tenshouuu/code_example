import React, { FunctionComponent, useEffect, useState } from 'react';
import moment, { Moment } from 'moment';
import { initHandleDate } from './helpers';

moment.locale('ru');

export interface InfoType {
    date: string;
    label: string;
}

export interface TimerProps {
    startedAt: string;
    endedAt: string;
    duration: string;
    render(options: InfoType): React.ReactFragment | React.ReactElement;
    onEnableTranslation?(): void;
}

interface MomentTimeDatesType {
    mStartedAt: Moment;
    mEndedAt: Moment;
}

type Props = TimerProps;

let timerId = 0;

const Timer: FunctionComponent<Props> = (props) => {
    const {
        onEnableTranslation,
        startedAt,
        endedAt,
        duration,
        render,
    } = props;

    const [momentTimeDates, _] = useState<MomentTimeDatesType>({
        mStartedAt: startedAt ? moment.utc(startedAt, 'YYYY-MM-DD HH:mm:ss') : moment(),
        mEndedAt: endedAt ? moment.utc(endedAt, 'YYYY-MM-DD HH:mm:ss') : moment(),
    });

    const {
        mStartedAt,
        mEndedAt,
    } = momentTimeDates;

    const handleDate = initHandleDate(onEnableTranslation);
    const [info, setInfo] = useState<InfoType>(handleDate(mStartedAt, mEndedAt, duration));
    const tick = () => setInfo(handleDate(mStartedAt, mEndedAt, duration));
    useEffect(() => {
        timerId = setInterval(tick, 1000);
        return () => {
            clearInterval(timerId);
        };
    }, []);

    const {
        label,
        date,
    } = info;

    return (
        <>{render({ label, date })}</>
    );
};

export default React.memo(Timer);
