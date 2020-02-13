import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
export interface CarouselSlideInterfaceProps extends PropsInterface {
    index: number;
    activeIndex: number;
}

export class CarouselSlide extends PureComponent<CarouselSlideInterfaceProps> {
    constructor(props) {
        super(props);

    }

    render() {
        const classes = classNames("c-carousel", this.props.className, this.props.index == this.props.activeIndex ? "c-carousel__slide carousel__slide--active" : "c-carousel__slide");

        return (
            <li className={classes} style={this.props.style}>
                <p className="carousel-slide__content">{this.props.slide.content}</p>
                <p>
                    <strong className="carousel-slide__author">
                        {this.props.slide.author}
                    </strong>,
                    {" "}
                    <small className="carousel-slide__source">
                        {this.props.slide.source}
                    </small>
                </p>
            </li>
        );
    }
}

