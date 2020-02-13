import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface AuthInterfaceProps extends PropsInterface {

}

export class Auth extends PureComponent<AuthInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-auth", this.props.className, {
            "c-badge--read": this.props.isRead,
        });
        return (
            <span style={this.props.style} className={classes}>{this.props.children}</span>
        )
    }
}
