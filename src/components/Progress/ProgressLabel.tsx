import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Progress} from "./Progress";
import {GroupTextSeparate} from "../Group";
import {TitleSubtitleInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";

export interface ProgressLabelInterfaceProps extends PropsInterface, TitleSubtitleInterface {
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
                {this.props.title && (<h5 className={"c-progress-label__title"}>{this.props.title}</h5>)}
                <GroupTextSeparate left={this.props.label} right={`${this.props.value}%`}/>
                <Progress value={this.props.value}/>
                {this.props.subTitle && (<span className={"c-progress-label__subTitle"}>{this.props.subTitle}</span>)}
            </div>
        )
    }
}
