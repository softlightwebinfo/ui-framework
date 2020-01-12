import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface TableCelHeadInterfaceProps extends PropsInterface {

}

export class TableCelHead extends PureComponent<TableCelHeadInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-table-cel-head", this.props.className, {});
        return (
            <th style={this.props.style} className={classes}>{this.props.children}</th>
        )
    }
}
