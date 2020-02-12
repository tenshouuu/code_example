import styled from 'styled-components';
import {
    createTypographyStyleByName,
    getColorByName,
    getFamilyByName,
    getGradientColorByName, getMediaWidthByName,
} from '@client/helpers';
import {
    Button,
    Icon, Modal,
} from '@client/ui/components';

export const TeacherPreview = styled(Icon.TeacherPreview)`
    position: absolute;
    width: 320px;
    left: -10px;
    bottom: -40px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 180px;
        left: 0;
        bottom: -24px;
    }
`;

export const TeacherWrapper = styled.div`
    position: absolute;
    width: 268px;
    height: calc(100% + 20px);
    max-height: 334px;
    left: 46px;
    bottom: 0;
    display: flex;
    justify-content: center;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        height: 160px;
        width: 160px;
        left: 14px;
    }
`;

export const StyledTeacherImage = styled.img`
    height: 100%;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        width: 100%;
        object-fit: cover;
    }
`;

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 32px 52px 40px 16px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        padding: 24px 16px;
        border-radius: 16px;
        flex-direction: column;
        background-color: ${getColorByName('white')};
    }
`;

export const TeacherRoot = styled.div`
    width: 100%;
    border-radius: 16px;
    background-color: ${getColorByName('white')};
    transition: 0.5s;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        border-radius: 0;
        margin-top: 0;
        padding: 20px 16px 30px;
        background-color: ${getColorByName('lightGray')};
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin-left: 346px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin-left: 0;
    }
`;

export const Name = styled.div`
    ${createTypographyStyleByName('header3')};
    color: ${getColorByName('darkBlue')};
    margin-bottom: 12px;
`;
export const Description = styled.div`
    ${createTypographyStyleByName('paragraph2')};
    color: ${getColorByName('darkBlue')};
    margin-bottom: 20px;
`;
export const About = styled.div`
    margin-bottom: 20px;
`;

export const StyledButton = styled(Button)`
    height: 54px;
    min-width: 210px;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: linear-gradient(
        67deg, 
        ${getGradientColorByName('darkElectricViolet')} -9%,
        ${getGradientColorByName('darkHeliotrope')} 56%
    );
    color: ${getColorByName('white')};
    ${createTypographyStyleByName('paragraph1')};
    font-family: ${getFamilyByName('medium')};

    &:hover {
        background-position: 100%;
    }

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        min-width: 250px;
        margin: 0 auto;
    }
`;

export const Interview = styled.div`
    display: none;
`;
export const Play = styled.div``;
export const StyledLink = styled.div`
    width: max-content;
    cursor: pointer;
    color: ${getColorByName('purple')};
    ${createTypographyStyleByName('header5')};
    border-bottom: 1px dashed ${getColorByName('purple')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        margin-left: auto;
        margin-right: auto;
    }
`;
export const ScoreWrapper = styled.div`
    text-align: center;
    align-self: flex-end;
    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: flex;
        flex-direction: column;
        margin-top: 16px;
    }
`;
export const Score = styled.div`
    font-size: 200px;
    line-height: 164px;
    margin-bottom: 16px;
    text-transform: uppercase;
    background: linear-gradient(
        67deg,
        ${getGradientColorByName('darkElectricViolet')} -9%,
        ${getGradientColorByName('darkHeliotrope')} 56%
    );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: ${getColorByName('purple')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        font-size: 96px;
        line-height: 76px;
        margin-bottom: 4px;
    }
`;
export const Label = styled.div`
    ${createTypographyStyleByName('header3')};
    color: ${getColorByName('darkBlue')};
    max-width: 240px;

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        ${createTypographyStyleByName('paragraph1')};
        font-family: ${getFamilyByName('medium')};
        max-width: 123px;
    }
`;
export const Star = styled(Icon.Star)`
    width: 18px;
    color: ${getColorByName('purple')};

    &:not(:last-child) {
        margin-right: 8px;
    }
`;
export const StarsWrapper = styled.div`
    margin-bottom: 20px;
`;
export const DifferenceModalRoot = styled(Modal)`
    padding: 0;
    align-self: flex-start;
`;
