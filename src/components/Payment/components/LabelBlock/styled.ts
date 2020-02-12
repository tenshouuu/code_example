import styled from 'styled-components';
import { LinkButton } from '@client/ui/components';
import { createTypographyStyleByName, getColorByName } from '@client/helpers';

export const Title = styled.h5`
    margin-bottom: 16px;
    ${createTypographyStyleByName('header5')};
`;
export const Description = styled.p`
    ${createTypographyStyleByName('paragraph3')};
`;
export const Block = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 16px;
`;
export const Price = styled.h4`
    ${createTypographyStyleByName('header4')};
`;
export const StyledLinkButton = styled(LinkButton)`
    background-color: ${getColorByName('pink')};
    color: ${getColorByName('white')};
    width: min-content;
    min-width: 100px;
`;
export const LabelBlockRoot = styled.div`
    border-radius: 6px;
    width: 100%;
    color: ${getColorByName('white')};
    background-color: ${getColorByName('darkPurple')};
    padding: 20px 16px;
`;
