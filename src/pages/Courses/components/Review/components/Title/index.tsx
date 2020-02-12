import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

import { createTypographyStyleByName, getColorByName, getMediaWidthByName } from '@client/helpers';

const StyledTitle = styled.h3`
    width: 100%;
    text-align: center;
    ${createTypographyStyleByName('header3')};
    color: ${getColorByName('darkBlue')};
    padding: 0 32px;
    box-sizing: border-box;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 0 16px;
        ${createTypographyStyleByName('header4')};
    }
`;

// eslint-disable-next-line max-len
const Title: FunctionComponent = ({ children, ...props }) => <StyledTitle {...props}>{children}</StyledTitle>;

export default Title;
