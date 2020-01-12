import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface TableCelInterfaceProps extends PropsInterface {

}

export class TableCel extends PureComponent<TableCelInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-table-cel", this.props.className, {

        });
        return (
            <td style={this.props.style} className={classes}>{this.props.children}</td>
        )
    }
}
