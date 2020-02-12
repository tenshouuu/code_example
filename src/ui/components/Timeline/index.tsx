import React from 'react';
import { ColorType } from '@client/helpers/theme';
import { TimelineRoot, ListItem } from './styled';

export interface TimeLine {
    id: string;
    text: string;
    checked: boolean;
    clickable?: boolean;
    isCurrent?: boolean;
}

export interface TimelineProps {
    textColor?: ColorType;
    list?: (string | null)[];
    timeLines?: TimeLine[] | null;
    onClick?(id: string): void;
}

export default function Timeline(props: TimelineProps): React.ReactElement {
    const {
        textColor = 'purple',
        list = [],
        timeLines = [],
        onClick,
    } = props;
    let timeLine;

    if (list && list.length > 0) {
        timeLine = list.map((text, i) => (text ? (
            <ListItem
                key={i}
                checked
                textColor={textColor}
            >
                <div>
                    <div />
                    <div />
                </div>
                <p>{text}</p>
            </ListItem>
        ) : ''));
    } else if (timeLines && timeLines.length > 0) {
        timeLine = timeLines.map(tl => (
            <ListItem
                key={tl.id}
                checked={tl.checked}
                textColor={textColor}
            >
                <div>
                    <div />
                    <div />
                </div>
                <button
                    className={tl.isCurrent ? 'current' : ''}
                    type="button"
                    onClick={() => {
                        if (onClick && !tl.isCurrent) {
                            onClick(tl.id);
                        }
                    }}
                    disabled={!tl.clickable}
                >
                    {tl.text}
                </button>
            </ListItem>
        ));
    }

    return <TimelineRoot>{timeLine}</TimelineRoot>;
}
