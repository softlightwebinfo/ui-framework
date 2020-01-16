import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export type TableInterfacePropsType = "default" | "list";

export interface TableInterfaceProps extends PropsInterface {
    type?: TableInterfacePropsType;
}

export class Table extends PureComponent<TableInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-table", this.props.className, {
            [`c-table--${this.props.type}`]: this.props.type,
        });
        const table = <table style={this.props.style} className={classes}>{this.props.children}</table>;
        return (
            <div className={"c-table-responsive"}>
                {table}
            </div>
        )
    }
}
