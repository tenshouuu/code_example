import React from 'react';

import { AwesomeIcon } from '@client/ui/components';
import {
    StepsRoot,
    StyledStep,
    StyledSlider,
    StyledArrow,
} from './styled';

export type arrowPosition = 'left' | 'right';
export interface ArrowProps {
    position: arrowPosition;
    onClick?(): void;
}

const stepData = [
    {
        title: 'Вебинары',
        description: `
            Онлайн видео обучение с практическими примерами,
            интересной подачей материала и визуализацией уроков
            для быстрого запоминания темы
        `,
    },
    {
        title: 'Домашние задания',
        description: ``,
    },
    {
        title: 'Тестирование',
        description: `
            Проходите специально составленные этапы
            тестирования, выявляйте свои слабые стороны
            и получайте дополнительные уроки для
            улучшения результатов при сдаче егэ
        `,
    },
];

function Arrow({ position, onClick }: ArrowProps) {
    return (
        <StyledArrow position={position} onClick={onClick}>
            <AwesomeIcon type="arrow" />
        </StyledArrow>
    );
}

const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
};

class Steps extends React.PureComponent {
    slider: any = null;

    handleClick = (position: arrowPosition) => {
        if (this.slider) {
            if (position === 'right') {
                this.slider.slickNext();
            } else {
                this.slider.slickPrev();
            }
        }
    }

    render() {
        const list = stepData.map((stepProps, i) => (
            <StyledStep
                key={i}
                index={i + 1}
                {...stepProps}
            />
        ));
        return (
            <StepsRoot>
                <h2>Как проходит обучение</h2>
                <StyledSlider
                    ref={
                    // eslint-disable-next-line no-return-assign
                        slider => (this.slider = slider)
                    }
                    {...settings}
                >
                    {list}
                </StyledSlider>
                <Arrow
                    position="right"
                    onClick={() => this.handleClick('right')}
                />
                <Arrow
                    position="left"
                    onClick={() => this.handleClick('left')}
                />
                <div>
                    {list}
                </div>
            </StepsRoot>
        );
    }
}

export default Steps;
