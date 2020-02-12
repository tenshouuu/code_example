import styled from 'styled-components';
import {
    createTypographyStyleByName,
    getFamilyByName, getMediaWidthByName,
} from '@client/helpers';

import { OwnProps } from './index';
import { Subject } from '../../../Icon';


export const SubjectTextRoot = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        justify-content: center;
    }
`;

export const StyledIcon = styled(Subject)`
    width: auto;
    margin: 0 auto;
`;

export const Image = styled.div`
    min-width: 44px;
    display: flex;
    align-items: center;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin-right: 0;
        min-width: 0;
    }
`;
export const Text = styled.p<OwnProps>`
    clear: both;
    display: inline-block;
    overflow: hidden;
    white-space: nowrap;
    margin-left: 12px;
    ${createTypographyStyleByName('paragraph1')};
    font-family: ${getFamilyByName('medium')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: ${({ forceRender }) => (forceRender ? 'inline-block' : 'none')};
    }
`;
