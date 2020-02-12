import React, { FunctionComponent } from 'react';
import { Module as ModuleType } from '@client/apollo/schemaTypes';
import * as moment from 'moment';
import { declOfNum } from '@client/helpers';
import { StyledModule, Header, Content } from './styled';

interface ModuleProps {
    data: ModuleType;
}

const Module: FunctionComponent<ModuleProps> = ({ data }) => {
    const {
        title = '',
        description,
        startedAt,
        endedAt,
        lessons = [],
    } = data;
    const fStartedAt = moment.utc(startedAt || '').local().format('D MMMM');
    const fEndedAt = moment.utc(startedAt || '').local().format('D MMMM');
    let headerText = `${title} с ${fStartedAt} по ${fEndedAt}`;
    if (fStartedAt === fEndedAt) {
        headerText = `${title} с ${fStartedAt}`;
    }
    return (
        <StyledModule>
            <Header>{headerText}</Header>
            <Content>
                <h5>{description}</h5>
                <p>
                    {lessons && lessons.length > 0 ? (
                        <span>
                            {lessons.length}
                            {' '}
                            {declOfNum(lessons.length, ['урок', 'урока', 'уроков'])}
                            {' '}
                        </span>
                    ) : ''}
                    {lessons && lessons.length > 0 ? (
                        <span>
                            /
                            {` ${lessons.length}`}
                            {' '}
                            {declOfNum(
                                lessons.length,
                                ['домашняя работа', 'домашние работы', 'домашних работ'],
                            )}
                            {' '}
                        </span>
                    ) : ''}
                </p>
            </Content>
        </StyledModule>
    );
};

export default Module;
