import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface TableHeadInterfaceProps extends PropsInterface {

}

export class TableHead extends PureComponent<TableHeadInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-table-thead", this.props.className, {

        });
        return (
            <thead style={this.props.style} className={classes}>{this.props.children}</thead>
        )
    }
}
