import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface LabelInterfaceProps extends PropsInterface {
    isCompact?: boolean;
}

export class Label extends PureComponent<LabelInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-label", this.props.className, {
            "c-label--compact": this.props.isCompact,
        });
        return (
            <span style={this.props.style} className={classes}>{this.props.children}</span>
        )
    }
}
