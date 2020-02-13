import {PureComponent} from "react";
import * as React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Image} from '../Image';

export interface CarouselSlideImageInterfacePropsSlide {
    image: string;
    title: string;
}

export interface CarouselSlideImageInterfaceProps extends PropsInterface, CarouselSlideImageInterfacePropsSlide {
    index: number;
    activeIndex: number;
}


export class CarouselSlideImage extends PureComponent<CarouselSlideImageInterfaceProps> {
    constructor(props) {
        super(props);

    }

    render() {
        const classes = classNames("c-carousel-slide-image", this.props.className, {
            "c-carousel-slide-image--active": this.props.index == this.props.activeIndex,
        });

        return (
            <li title={this.props.title} className={classes} style={this.props.style}>
                <Image
                    allowFullScreen={true}
                    url={this.props.image}
                />
            </li>
        );
    }
}

