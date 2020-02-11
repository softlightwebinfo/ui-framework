import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface ErrorMessageInterfaceProps extends PropsInterface {

}

export class ErrorMessage extends PureComponent<ErrorMessageInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-error-message", this.props.className, {});
        return (
            <div style={this.props.style} className={classes}>{this.props.children}</div>
        )
    }
}
