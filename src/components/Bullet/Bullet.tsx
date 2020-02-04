import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {ColorsTypes} from "../../interfaces/types/ColorsTypes";

export interface BulletInterfaceProps extends PropsInterface {
    type: ColorsTypes;
}

export class Bullet extends PureComponent<BulletInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-bullet", this.props.className, {
            [`c-bullet--${this.props.type}`]: !!this.props.type,
        });
        return (
            <span style={this.props.style} className={classes}>{this.props.children}</span>
        )
    }
}
