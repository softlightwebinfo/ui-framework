import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface CarouselSlideInterfacePropsSlide {
    content: string;
    author: string;
    source: string;
}

export interface CarouselSlideInterfaceProps extends PropsInterface, CarouselSlideInterfacePropsSlide {
    index: number;
    activeIndex: number;
}


export class CarouselSlide extends PureComponent<CarouselSlideInterfaceProps> {
    constructor(props) {
        super(props);

    }

    render() {
        const classes = classNames("c-carousel-slide", this.props.className, {
            "c-carousel-slide--active": this.props.index == this.props.activeIndex,
        });

        return (
            <li className={classes} style={this.props.style}>
                <p className="c-carousel-slide__content">{this.props.content}</p>
                <p>
                    <strong className="c-carousel-slide__author">
                        {this.props.author}
                    </strong>,
                    {" "}
                    <small className="c-carousel-slide__source">
                        {this.props.source}
                    </small>
                </p>
            </li>
        );
    }
}

