import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface TableBodyInterfaceProps extends PropsInterface {

}

export class TableBody extends PureComponent<TableBodyInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-table-tbody", this.props.className, {

        });
        return (
            <tbody style={this.props.style} className={classes}>{this.props.children}</tbody>
        )
    }
}
