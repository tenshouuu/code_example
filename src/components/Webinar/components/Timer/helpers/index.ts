import moment, { Moment } from 'moment';
import { TimerProps, InfoType } from '../index';

type HandleDateType = (mS: Moment, mE: Moment, duration: string) => InfoType;

const initHandleDate: (
    showTranslation: TimerProps['onEnableTranslation']
) => HandleDateType = showTranslation => (
    mStartedAt,
    mEndedAt,
    duration,
) => {
    const mNow = moment().utc();
    const isAfterStartAt = mStartedAt.isAfter(mNow);
    const isAfterEndAt = mEndedAt.isAfter(mNow);

    let date = '00:00';
    let label = 'Онлайн через';

    if (!isAfterStartAt && !isAfterEndAt) {
        if (!mStartedAt.isSame(mEndedAt)) {
            date = duration || `${moment(mEndedAt.diff(mStartedAt)).utc().format('HH:mm')}`;
            label = 'Длительность';
        }
    }
    if (isAfterStartAt && isAfterEndAt) {
        if (Math.abs(mStartedAt.diff(mNow, 'hours')) > 12) {
            date = mStartedAt.utc().format('D MMMM');
            label = 'Дата начала';
        } else {
            date = moment.utc(mStartedAt.diff(mNow)).format('HH:mm:ss');
            label = 'Онлайн через';
        }
    }
    if (!isAfterStartAt && isAfterEndAt) {
        date = 'Идет трансляция';
        label = 'Статус';
        if (showTranslation) {
            showTranslation();
        }
    }

    return {
        date,
        label,
    };
};

export {
    initHandleDate,
};
