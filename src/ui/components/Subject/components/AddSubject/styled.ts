import styled from 'styled-components';
import {
    createTypographyStyleByName,
    getColorByName,
    getFamilyByName,
    getGradientColorByName,
    getMediaWidthByName,
    getTypographyByName,
} from '@client/helpers';
import { AwesomeIcon } from '@client/ui/components';

export const Fx = styled.div`
    position: absolute;
    background: radial-gradient(transparent, ${getColorByName('white')});
    opacity: .6;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    transition: 0.5s;
    
    :nth-child(1) {
        top: -178%;
        left: -40px;
    }

    :nth-child(2) {
        bottom: -162%;
        right: -58px;
    }
`;

export const AddSubjectRoot = styled.div`
    display: flex;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    width: 100%;
    outline: none;
    appearance: none;
    border-width: 0;
    position: relative;
    transition: 0.3s;
    height: 70px;
    padding: 0 20px;
    border-radius: 5px;
    font-weight: 500;
    cursor: pointer;
    font-size: ${props => getTypographyByName('paragraph1')(props).size};
    color: ${getColorByName('darkGray')};
    font-family: ${getFamilyByName('medium')};
    background-color: ${getGradientColorByName('snuff')};


    
    :hover {
        filter: contrast(0.95);
        & > ${Fx} { 
            :nth-child(1) {
                top: -168%;
                left: -30px;
            }
            :nth-child(2) {
                bottom: -152%;
                right: -48px;
            }
        }
    }
`;

export const Text = styled.div<{force: boolean}>`
    position: relative;
    margin-left: 8px;
    ${createTypographyStyleByName('paragraph1')};
    font-family: ${getFamilyByName('medium')};

    @media (max-width: ${getMediaWidthByName('mobile')}) {
        display: ${({ force }) => (force ? 'inline-block' : 'none')};
    }
`;

export const StyledIcon = styled(AwesomeIcon)`
    position: relative;
`;
