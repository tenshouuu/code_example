import moment from 'moment';

export function getDateText({
    startedAt,
    endedAt,
}) {
    const mStartedAt = moment.utc(startedAt ?? '', 'YYYY-MM-DD HH:mm:ss').local();
    const mEndedAt = moment.utc(endedAt ?? '', 'YYYY-MM-DD HH:mm:ss').local();
    if ((startedAt && !endedAt) ?? mStartedAt.isSame(mEndedAt)) {
        return `${mStartedAt.format('D MMMM')}`;
    }

    if (!startedAt && endedAt) {
        return `до ${mStartedAt.format('D MMMM')}`;
    }

    if (mStartedAt.isSame(mEndedAt, 'month')) {
        return `${mStartedAt.format('D')}-${mEndedAt.format('D MMMM')}`;
    }

    return `${mStartedAt.format('D MMMM')}-${mEndedAt.format('D MMMM')}`;
}
