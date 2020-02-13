import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {OnClickEventType} from "../../interfaces/types/OnClickEventType";

export interface CarouselLeftArrowInterfaceProps extends PropsInterface {
    onClick: OnClickEventType;
}

export class CarouselLeftArrow extends PureComponent<CarouselLeftArrowInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-carousel-left-arrow", this.props.className, {});
        return (
            <div onClick={this.props.onClick} style={this.props.style} className={classes}>
                <i className={"icon icon-left-open-1"}/>
            </div>
        )
    }
}
