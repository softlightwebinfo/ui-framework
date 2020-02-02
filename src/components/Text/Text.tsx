import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {ColorsTypes} from "../../interfaces/types/ColorsTypes";

export interface TextInterfaceProps extends PropsInterface {
    type?: ColorsTypes
}

export class Text extends PureComponent<TextInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-text", this.props.className, {
            [`c-text--${this.props.type}`]: !!this.props.type
        });
        return (
            <span style={this.props.style} className={classes}>{this.props.children}</span>
        )
    }
}
