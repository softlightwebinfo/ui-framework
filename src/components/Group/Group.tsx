import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface BadgeInterfaceProps extends PropsInterface {
    isRead?: boolean;
}

export class Badge extends PureComponent<BadgeInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-badge", this.props.className, {
            "c-badge--read": this.props.isRead,
        });
        return (
            <span style={this.props.style} className={classes}>{this.props.children}</span>
        )
    }
}
