import React, {Component} from 'react'
import classNames from "classnames";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";

interface Props extends PropsInterface {

}

export class ContextDivider extends Component<Props> {
    static defaultProps = {};


    render() {
        const classes = classNames("c-context-divider", this.props.className, {});
        return (
            <div
                className={classes}
                style={this.props.style}
            />
        )
    }
}
