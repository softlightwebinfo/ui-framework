import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface WidgetInterfaceProps extends PropsInterface {
    isRead?: boolean;
    fluid?: boolean;
}

export class Widget extends PureComponent<WidgetInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-widget", this.props.className, {
            "c-widget--fluid": this.props.fluid,
        });
        // @ts-ignore
        return React.cloneElement(this.props.children, {
            className: classes,
        })
    }
}
