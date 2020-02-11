import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {ProgressBar} from "./ProgressBar";

export interface ProgressInterfaceProps extends PropsInterface {
    value: number;
    color?: string;
}

export class Progress extends PureComponent<ProgressInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-progress", this.props.className, {});
        return (
            <div className={classes} style={this.props.style}>
                <ProgressBar color={this.props.color} value={this.props.value}/>
            </div>
        )
    }
}
