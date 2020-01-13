import React, {Component} from 'react'
import classNames from "classnames";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {OnClickEventType} from "../../interfaces/types/OnClickEventType";

interface Props extends PropsInterface {
    onClick?: OnClickEventType;
}

export class ContextItem extends Component<Props> {
    static defaultProps = {};


    render() {
        const classes = classNames("c-context-item", this.props.className, {});
        return (
            <div
                onClick={this.props.onClick}
                className={classes}
                style={this.props.style}
            >
                {this.props.children}
            </div>
        )
    }
}
