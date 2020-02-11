import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface ErrorInterfaceProps extends PropsInterface {

}

export class Error extends PureComponent<ErrorInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-error", this.props.className, {

        });
        return (
            <div style={this.props.style} className={classes}>{this.props.children}</div>
        )
    }
}
