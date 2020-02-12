import React from 'react';
import { Skeleton, Timeline } from '@client/ui/components';
import { ColorType } from '@client/helpers/theme';
import { TimeLine } from '@client/ui/components/Timeline';
import { PlanRoot } from './styled';

interface PlanProps {
    title: string;
    textColor?: ColorType;
    list?: (string | null)[];
    timeLines?: TimeLine[] | null;
    onClick?(id: string): void;
}

function Plan(props: PlanProps): React.ReactElement {
    const {
        title = '',
        textColor = 'purple',
        list = [],
        timeLines = [],
        onClick,
    } = props;
    return (
        <PlanRoot>
            <h2>{title}</h2>
            {
                (!timeLines || timeLines.length === 0) && (!list || list.length === 0)
                    ? <Skeleton loading />
                    : <Timeline textColor={textColor} list={list} timeLines={timeLines} onClick={onClick} />
            }
        </PlanRoot>
    );
}

export default Plan;
