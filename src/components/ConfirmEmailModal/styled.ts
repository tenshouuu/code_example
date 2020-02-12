import styled, { css, FlattenInterpolation } from 'styled-components';
import {
    Button,
    Modal,
    Icon,
} from '@client/ui/components';
import {
    createTypographyStyleByName,
    getColorByName, getMediaWidthByName,
} from '@client/helpers';

const getInputBorder = ({ isvalid }): FlattenInterpolation<any> => (isvalid
    ? css`
            box-shadow: inset 0 0 0 1px ${getColorByName('lightGreen')};
        `
    : css`
            box-shadow: inset 0 0 0 1px ${getColorByName('orange')};
        `
);


export const ConfirmEmailModalRoot = styled(Modal)`
    color: ${getColorByName('white')};
    background-color: ${getColorByName('purple')};
    min-width: 500px;
    padding: 32px;
    overflow: hidden;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        min-width: 0;
    }
    & > * {
        position: relative;
    }
`;

export const Wrapper = styled.div`
  @media (max-width: ${getMediaWidthByName('mobile')}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;
export const Title = styled.div`
    ${createTypographyStyleByName('header3')};
`;

export const Description = styled.div`
    ${createTypographyStyleByName('paragraph1')};
    margin-top: 16px;
`;

export const Input = styled.input`
    outline: none;
    margin-top: 28px;
    width: 100%;
    border: none;
    border-radius: 5px;
    padding: 16px 12px 16px 24px;
    box-sizing: border-box;
    ${createTypographyStyleByName('paragraph1')};
    color: ${getColorByName('darkBlue')};
    background-color: ${getColorByName('lightGray')};
    transition: border .3s ease-in;
    ${getInputBorder};
    &::placeholder {
        color: ${getColorByName('gray')};
    }
`;

export const StyledButton = styled(Button)`
    margin-top: 28px;
    background-image: linear-gradient(
        225deg,
        ${getColorByName('yellow')} 0%,
        ${getColorByName('orange')} 100%
    );
`;

export const StyledPacman = styled(Icon.Pacman)`
    position: absolute;
    width: 400px;
    right: 0;
    transform: translateX(35%);
    top: 20%;
`;
