import styled from 'styled-components';
import { createTypographyStyleByName, getColorByName, getMediaWidthByName } from '@client/helpers';
import { StepProps } from './index';

const getColor = props => (
    props.active
        ? `${getColorByName('yellow')(props)}`
        : `${getColorByName('darkPurple')(props)}`
);

export const AgendaRoot = styled.div`
    display:flex;
    justify-content: space-between;
    align-items:flex-start;
    margin-top: 32px;
    padding: 0 32px;
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 0 8px;
    }
`;


export const StepText = styled.div`
    position:   absolute;
    top: calc(100% + 20px);
    ${createTypographyStyleByName('button1')};
`;

export const Step = styled.div<StepProps>`
    width: calc(((100% - 72px) / 4) + 24px);
    display: flex;
    flex-flow: column nowrap;
    align-items:center;
    justify-content:flex-start;
    position: relative;

    &:nth-child(2) {
        width: calc(((100% - 72px) / 2) + 24px);
    }

    &:first-child{
        ${StepText} {
            left: 0;
            transform: translateX(-15%);
        }
        &::before {
            align-self: flex-start;
        }
    }
    &:last-child {
        ${StepText} {
            left: 100%;
            transform: translateX(-60%);
        }
        &::before {
            align-self: flex-end;
        }
    }
    &::before {
        content: '';
        flex-shrink: 0;
        width: 24px;
        height: 24px;
        background-color: ${getColor};
        border-radius: 50%;
    }
    &::after {
        content: '';
        position: absolute;
        display: block;
        background-color: ${getColor};
        width: 100%;
        height: 4px;
        top: 50%;
        transform: translateY(-50%);
    }
`;
