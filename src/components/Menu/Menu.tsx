import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface MenuInterfaceProps extends PropsInterface {

}

export class Menu extends PureComponent<MenuInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-menu", this.props.className, {

        });
        return (
            <span style={this.props.style} className={classes}>{this.props.children}</span>
        )
    }
}
