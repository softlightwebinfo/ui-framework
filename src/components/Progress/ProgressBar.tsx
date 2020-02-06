import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface ProgressBarInterfaceProps extends PropsInterface {
    value: number;
    color?: string;
}

export class ProgressBar extends PureComponent<ProgressBarInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-progress__bar", this.props.className, {});
        return (
            <div className={classes} style={{backgroundColor: this.props.color, width: `${this.props.value}%`}}/>
        )
    }
}
