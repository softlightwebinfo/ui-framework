import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface TableFooterInterfaceProps extends PropsInterface {

}

export class TableFooter extends PureComponent<TableFooterInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-table-tfoot", this.props.className, {

        });
        return (
            <tfoot style={this.props.style} className={classes}>{this.props.children}</tfoot>
        )
    }
}
