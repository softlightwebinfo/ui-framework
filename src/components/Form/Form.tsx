import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface FormInterfaceProps extends PropsInterface {
    onSubmit?: any;
    tag?: string;
}

export class Form extends PureComponent<FormInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-form", this.props.className, {});
        const Tag: any = this.props.tag || "form";
        return (
            <Tag onSubmit={this.props.onSubmit} style={this.props.style} className={classes}>{this.props.children}</Tag>
        )
    }
}
