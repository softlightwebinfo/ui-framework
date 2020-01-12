import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface TableRowInterfaceProps extends PropsInterface {

}

export class TableRow extends PureComponent<TableRowInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-table-row", this.props.className, {});
        return (
            <tr style={this.props.style} className={classes}>{this.props.children}</tr>
        )
    }
}
