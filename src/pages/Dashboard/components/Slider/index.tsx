import React, { PureComponent } from 'react';
import Slider from 'react-slick';
import {
    WebinarSliderRoot,
    Arrows,
} from './styled';

interface OwnProps {
    children: React.ReactElement[];
}

type Props = OwnProps;

const settings: Slider.settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 500,
        settings: {
            infinite: true,
            adaptiveHeight: true,
            arrows: false,
            dots: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
        },
    }],
};

class WebinarSlider extends PureComponent<Props> {
    private slick: React.RefObject<HTMLInputElement> | Slider;

    onRefSlick = (slick) => {
        this.slick = slick;
    };

    onSlide = (direction: string) => () => {
        switch (direction) {
            case 'next':
                this.slick.slickNext();
                break;
            case 'prev':
                this.slick.slickPrev();
                break;
            default:
        }
    };

    render() {
        const { children, ...anotherProps } = this.props;
        return (
            <WebinarSliderRoot {...anotherProps}>
                <Slider
                    ref={this.onRefSlick}
                    {...settings}
                >
                    {children}
                </Slider>
                <Arrows disable={children.length < 2}>
                    <div onClick={this.onSlide('prev')} />
                    <div onClick={this.onSlide('next')} />
                </Arrows>
            </WebinarSliderRoot>
        );
    }
}


export default WebinarSlider;
