import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface CircleInterfaceProps extends PropsInterface {
    color?: string;
}

export class Circle extends PureComponent<CircleInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-circle", this.props.className, {});
        return (
            <span style={{
                ...(this.props.style || {}),
                backgroundColor: this.props.color,
            }} className={classes}>{this.props.children}</span>
        )
    }
}
