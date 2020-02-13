import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {CarouselLeftArrow} from "./CarouselLeftArrow";
import {CarouselRightArrow} from "./CarouselRightArrow";

export interface CarouselInterfaceProps extends PropsInterface {

}

export class Carousel extends PureComponent<CarouselInterfaceProps> {
    constructor(props) {
        super(props);

    }

    public state = {
        activeIndex: 0
    };

    goToSlide = (index) => {
        this.setState({
            activeIndex: index
        });
    };

    goToPrevSlide = (e) => {
        e.preventDefault();

        let index = this.state.activeIndex;
        let {slides} = this.props;
        let slidesLength = slides.length;

        if (index < 1) {
            index = slidesLength;
        }

        --index;

        this.setState({
            activeIndex: index
        });
    };

    goToNextSlide = (e) => {
        e.preventDefault();

        let index = this.state.activeIndex;
        let {slides} = this.props;
        let slidesLength = slides.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        this.setState({
            activeIndex: index
        });
    };

    render() {
        const classes = classNames("c-carousel", this.props.className, {});

        return (
            <div className={classes}>
                <CarouselLeftArrow onClick={e => this.goToPrevSlide(e)}/>

                <ul className="c-carousel__slides">
                    {this.props.slides.map((slide, index) =>
                        <CarouselSlide
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            slide={slide}
                        />
                    )}
                </ul>

                <CarouselRightArrow onClick={e => this.goToNextSlide(e)}/>

                <ul className="c-carousel__indicators">
                    {this.props.slides.map((slide, index) =>
                        <CarouselIndicator
                            key={index}
                            index={index}
                            activeIndex={this.state.activeIndex}
                            isActive={this.state.activeIndex == index}
                            onClick={e => this.goToSlide(index)}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

