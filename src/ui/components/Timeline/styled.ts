import styled from 'styled-components';
import { createTypographyStyleByName, getColorByName } from '@client/helpers';
import { TimelineProps } from './index';

/* eslint-disable max-len */
export const TimelineRoot = styled.ul`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const ListItem = styled.li<{ checked: boolean; textColor: TimelineProps['textColor'] }>`
    display: flex;
    width: 100%;

    & > div {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-right: 10px;

        & > div {
            background-color: ${({ checked, ...props }) => getColorByName(checked ? 'purple' : 'white')(props)};
        }

        & > div:first-child {
            width: 12px;
            height: 12px;
            border-radius: 50%;
        }

        & > div:last-child {
            width: 2px;
            flex: 1;
        }
    }

    &:last-child > div > div:last-child {
        display: none;
    }

    & > p {
        ${createTypographyStyleByName('header5')};
        color: ${({ checked, textColor = 'purple', ...props }) => getColorByName(checked ? textColor : 'darkGray')(props)};
        margin-bottom: 16px;
        margin-top: -2px;
    }

    & > button {
        background:none;
        border: none;
        margin: -2px 0 16px 0;
        padding: 0;
        ${createTypographyStyleByName('header5')};
        color: ${({ checked, textColor = 'purple', ...props }) => getColorByName(checked ? textColor : 'darkGray')(props)};
        text-align: left;
        outline: none;

        &:not(:disabled) {
            &:hover,
            &:focus {
                color: ${getColorByName('purple')};
                cursor: pointer;
            }
        }

        &:disabled {
            cursor: not-allowed;
        }

        &.current {
            color: ${getColorByName('purple')};
        }
    }
`;
/* eslint-enable max-len */
