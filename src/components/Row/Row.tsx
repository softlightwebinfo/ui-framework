import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface RowInterfaceProps extends PropsInterface {

}

export class Row extends PureComponent<RowInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-row", this.props.className);
        return (
            <div style={this.props.style} className={classes}>{this.props.children}</div>
        )
    }
}
