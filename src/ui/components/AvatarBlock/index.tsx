import React from 'react';
import styled from 'styled-components';
import { Maybe } from '@client/apollo/schemaTypes';
import { createTypographyStyleByName, getColorByName, getFamilyByName } from '@client/helpers';
import Avatar from '../Avatar';

export interface AvatarBlockProps {
    name: Maybe<string>;
    img: Maybe<string>;
    label?: string;
}

const StyledAvatar = styled(Avatar)`
    width: 44px;
    min-width: 44px;
    height: 44px;
    margin-right: 12px;
`;

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.p`
    margin-bottom: 4px;
    color: ${getColorByName('darkGray')};
    ${createTypographyStyleByName('paragraph4')};
`;

const Name = styled.p`
    color: ${getColorByName('darkBlue')};
    ${createTypographyStyleByName('paragraph3')};
    font-family: ${getFamilyByName('medium')};
`;


const AvatarBlockRoot = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
`;


function AvatarBlock({
    img = '',
    name = '',
    label = 'Преподаватель',
    ...props
}: AvatarBlockProps): React.ReactElement {
    return (
        <AvatarBlockRoot {...props}>
            <StyledAvatar img={img || ''} />
            <TextWrapper>
                <Label>{label}</Label>
                <Name>{name}</Name>
            </TextWrapper>
        </AvatarBlockRoot>
    );
}

export default AvatarBlock;
