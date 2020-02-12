import React from 'react';
import {
    SubjectContextProps,
} from '@client/ui/components/SubjectProvider/helpers/types';
import {
    withSubject,
    subjectType as rootSubjectType,
} from '@client/ui/components/SubjectProvider';

import {
    textBySubject,
} from './helpers/consts';
import {
    SubjectTextRoot,
    Image,
    Text,
    StyledIcon,
} from './styled';

type DefaultIconColorType = 'white' | 'gray';


export interface OwnProps {
    coloredIcon?: boolean;
    forceRender?: boolean;
    defaultIconColor?: DefaultIconColorType;
}

class SubjectText extends React.PureComponent<OwnProps & SubjectContextProps> {
    // eslint-disable-next-line max-len
    render() {
        const {
            subjectType = rootSubjectType.math,
            coloredIcon = false,
            defaultIconColor = 'white',
            forceRender = false,
            ...props
        } = this.props;
        return (
            <SubjectTextRoot
                {...props}
            >
                <Image>
                    <StyledIcon
                        colored={coloredIcon}
                        defaultIconColor={defaultIconColor}
                    />
                </Image>
                <Text forceRender={forceRender}>{textBySubject[subjectType]}</Text>
            </SubjectTextRoot>
        );
    }
}

export default withSubject(SubjectText);
