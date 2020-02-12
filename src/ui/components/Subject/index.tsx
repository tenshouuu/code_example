import React from 'react';
import {
    SubjectText,
} from './components';
import {
    SubjectRoot,
    Fx,
} from './styled';
import {
    ButtonTypes,
    SubjectColorType,
} from './helpers/consts';
import { withSubject } from '../SubjectProvider';
import { SubjectContextProps } from '../SubjectProvider/helpers/types';

export interface SubjectProps {
    children?: any;
    color?: SubjectColorType;
    animated?: boolean;
    isMinimalistic?: boolean;
    forceText?: boolean;
    selected?: boolean;
}


class Subject extends React.PureComponent<SubjectProps & SubjectContextProps, {}> {
    static defaultProps = {
        color: ButtonTypes.default,
        forceText: false,
        isMinimalistic: false,
        animated: false,
    };

    static Text: any;

    render() {
        const {
            children,
            forceText,
            isMinimalistic,
            ...props
        } = this.props;
        return (
            <SubjectRoot
                isMinimalistic={isMinimalistic}
                {...props}
            >
                {
                    !isMinimalistic && (
                        <>
                            <Fx />
                            <Fx />
                        </>
                    )
                }
                {
                    children || (
                        <SubjectText
                            forceRender={forceText}
                            isMinimalistic={isMinimalistic}
                        />
                    )
                }
            </SubjectRoot>
        );
    }
}

const MixedSubject: any = withSubject(Subject);
MixedSubject.Text = ({ ...props }) => <SubjectText forceRender {...props} />;
export default MixedSubject;
