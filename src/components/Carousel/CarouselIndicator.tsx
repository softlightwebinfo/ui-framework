import {PureComponent} from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {OnClickEventType} from "../../interfaces/types/OnClickEventType";
import * as React from "react";

export interface CarouselIndicatorInterfaceProps extends PropsInterface {
    onClick: OnClickEventType;
    index: number;
    activeIndex: number;
}

export class CarouselIndicator extends PureComponent<CarouselIndicatorInterfaceProps> {
    constructor(props) {
        super(props);

    }

    render() {
        const classes = classNames("c-carousel-indicator", this.props.className);

        return (
            <li className={classes} style={this.props.style}>
                <a
                    className={this.props.index == this.props.activeIndex ? "c-carousel-indicator__indicator c-carousel-indicator__indicator--active" : "c-carousel-indicator__indicator"}
                    onClick={this.props.onClick}
                />
            </li>
        );
    }
}

