import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Progress} from "./Progress";
import {GroupTextSeparate} from "../Group";

export interface ProgressLabelInterfaceProps extends PropsInterface {
    value: number;
    label: string;
}

export class ProgressLabel extends PureComponent<ProgressLabelInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-progress-label", this.props.className, {});
        return (
            <div className={classes} style={this.props.style}>
                <GroupTextSeparate left={this.props.label} right={`${this.props.value}%`}/>
                <Progress value={this.props.value}/>
            </div>
        )
    }
}
