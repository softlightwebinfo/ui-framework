import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface RowColInterfaceProps extends PropsInterface {
    column?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
}

export class RowCol extends PureComponent<RowColInterfaceProps> {
    constructor(props) {
        super(props);
    }

    get col() {
        let data: string[] = [];
        if (this.props.column) data.push(`c-col-${this.props.column}`);
        if (this.props.sm) data.push(`c-col-sm-${this.props.sm}`);
        if (this.props.md) data.push(`c-col-md-${this.props.md}`);
        if (this.props.lg) data.push(`c-col-lg-${this.props.lg}`);
        if (this.props.xl) data.push(`c-col-xl-${this.props.xl}`);

        return data.join(" ");
    }

    render() {
        const classes = classNames("c-col", this.props.className, this.col);
        return (
            <div style={this.props.style} className={classes}>{this.props.children}</div>
        )
    }
}
