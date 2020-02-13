import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface CarouselInterfaceProps extends PropsInterface {

}

export class Carousel extends PureComponent<CarouselInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-carousel", this.props.className, {

        });
        return (
            <span style={this.props.style} className={classes}>{this.props.children}</span>
        )
    }
}
