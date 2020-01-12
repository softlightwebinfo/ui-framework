import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface ListItemInterfaceProps extends PropsInterface {
}

export class ListItem extends PureComponent<ListItemInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-list-item", this.props.className);
        return (
            <li
                className={classes}
                style={this.props.style}
            >
                {this.props.children}
            </li>
        )
    }
}
