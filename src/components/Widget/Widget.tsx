import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface WidgetInterfaceProps extends PropsInterface {
    isRead?: boolean;
    fluid?: boolean;
    card?: boolean;
}

export class Widget extends PureComponent<WidgetInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-widget", this.props.className, {
            "c-widget--fluid": this.props.fluid,
            "c-widget--card": this.props.card,
        });
        return (
            <div style={this.props.style} className={classes}>{this.props.children}</div>
        )
    }
}
