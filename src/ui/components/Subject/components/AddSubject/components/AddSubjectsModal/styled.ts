import styled, { css } from 'styled-components';
import { getColorByName, getMediaWidthByName } from '@client/helpers';
import Modal from '../../../../../Modal';
import Subject from '../../../../../Subject';

const getTransformForCheck = ({ draw }) => (
    draw
        ? css`
            transform:
                translate(30%, -30%)
                scale(1);
        `
        : css`
            transform:
                translate(30%, -30%)
                scale(0);
        `
);

export const StyledSubject = styled(Subject)`
    position: relative;
    align-items: flex-start;
`;

export const SubjectsWrapper = styled.div`
    display: grid;
    grid-gap: 20px;
    padding: 12px;
    grid-template-columns: repeat( auto-fit, minmax(200px,1fr) );
    width: 43vw;
    max-height: 50vh;
    overflow-y: scroll;
    @media (max-width: ${getMediaWidthByName('tablet')}) {
        width: 50vw;
    }
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 100%;
        max-height: 100%;
    }
`;

export const Check = styled.div`
    display: flex;
    justify-content:center;
    align-items:center;
    position:absolute;
    transition: .2s ease-in-out;
    top: 0;
    right: 0;
    ${getTransformForCheck};
    &::before {
        content: '';
        display: block;
        width: 40px;
        height: 40px;
        background-color: ${getColorByName('darkBlue')};
        border-radius: 50%;
    }
    &::after {
        content: '';
        display: block;
        position:absolute;
        width: 8px;
        height: 16px;
        top: 20%;
        border-bottom: 2px solid ${getColorByName('white')};
        border-right: 2px solid ${getColorByName('white')};
        transform: rotate(45deg);
    }
`;
export const SubjectWrapper = styled.div`
    position: relative;
`;

export const StyledModal = styled(Modal)`
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin-top: 134px;
    }
`;
