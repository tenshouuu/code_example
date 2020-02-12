import React, { SVGProps } from 'react';
import Wrapper from './styled';

/**
 * Обертка для любой svg иконки
 * @version 1.0.0
 */
export const sizes = {
    AUTO: 'auto',
    SIZE_8: 8,
    SIZE_12: 12,
    SIZE_16: 16,
    SIZE_20: 20,
    SIZE_24: 24,
    SIZE_32: 32,
};

export interface SvgIconProps {
    /**
     * SVG разметка
     */
    children: any;
    /**
     * Определяет видимую область
     * ([стандартный атрибут SVG](https://developer.mozilla.org/ru/docs/Web/SVG/Attribute/viewBox))
     */
    viewBox: string;
    /**
     * Размер иконки
     * - auto (заполняет все пространство контейнера)
     * - 8, 12, 16, 20, 24, 32 (наиболее используемые размеры)
     *
     * Исключения задаются через CSS стили
     */
    size: 'auto' | number;
}

export { StyledPath, StyledG } from './styled';

export default class SvgIcon extends React.PureComponent<SvgIconProps & SVGProps<any>> {
    static defaultProps = {
        style: {},
        size: sizes.AUTO,
    };

    render() {
        const {
            children,
            ...other
        } = this.props;
        return (
            <Wrapper
                focusable="false"
                aria-hidden="true"
                {...other}
            >
                {children}
            </Wrapper>
        );
    }
}
