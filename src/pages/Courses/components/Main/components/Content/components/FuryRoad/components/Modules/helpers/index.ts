import { Maybe, Module } from '@client/apollo/schemaTypes';
import moment, { Moment } from 'moment';
import {
    BridgeProps,
    BridgeStatusEnum,
} from '../components/Bridge';

export function getInfoByDate({
    startedAt,
    nextModule,
    mExpiredAt, // moment subscription ExpiredAt
}: {
    startedAt: string;
    nextModule: Maybe<Module>;
    mExpiredAt: Moment | null;
}) {
    const isBefore = startedAt && mExpiredAt
        ? moment.utc(startedAt, 'YYYY-MM-DD HH:mm:ss').isAfter(mExpiredAt)
        : true;
    const isBeforeNext = nextModule?.startedAt && mExpiredAt
        ? moment.utc(nextModule.startedAt, 'YYYY-MM-DD HH:mm:ss').isAfter(mExpiredAt)
        : true;

    let bridgeStatus: BridgeProps['status'] = BridgeStatusEnum.AVAILABLE;
    if (isBeforeNext && isBefore) {
        bridgeStatus = BridgeStatusEnum.UNAVAILABLE;
    }

    return {
        isBefore,
        isBeforeNext,
        bridgeStatus,
    };
}
