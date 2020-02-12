import React from 'react';
import {
    PageWrapperRoot,
    BlocksWrapper,
    Info,
    Content,
    Plan,
} from './styled';

export interface PageWrapperProps {
    firstChildren: React.ReactElement;
    secondChildren: React.ReactElement;
    mainChildren: React.ReactElement;
    mainChildrenPosition: 'left' | 'right';
}

type Props = PageWrapperProps

class PageWrapper extends React.PureComponent<Props> {
    render() {
        const {
            firstChildren,
            secondChildren,
            mainChildren,
            mainChildrenPosition,
        } = this.props;
        return (
            <PageWrapperRoot
                mainChildrenPosition={mainChildrenPosition}
            >
                <BlocksWrapper>
                    <Info>
                        { firstChildren }
                    </Info>
                    <Plan>
                        { secondChildren }
                    </Plan>
                    <Content>
                        { mainChildren }
                    </Content>
                </BlocksWrapper>
            </PageWrapperRoot>
        );
    }
}

export default PageWrapper;
