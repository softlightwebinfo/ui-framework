import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {OnClickEventType} from "../../interfaces/types/OnClickEventType";

export interface CarouselRightArrowInterfaceProps extends PropsInterface {
    onClick: OnClickEventType;
}

export class CarouselRightArrow extends PureComponent<CarouselRightArrowInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-carousel-right-arrow", this.props.className, {});
        return (
            <div onClick={this.props.onClick} style={this.props.style} className={classes}>
                <i className={"icon icon-right-open-1"}/>
            </div>
        )
    }
}
