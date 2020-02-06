import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {ProgressBar, ProgressBarInterfaceProps} from "./ProgressBar";
import {GroupTextSeparate} from "../Group";

export interface ProgressMultipleInterfaceProps extends PropsInterface {
    progress: ProgressBarInterfaceProps[];
    title: string;
    subTitle?: string;
}

export class ProgressMultiple extends PureComponent<ProgressMultipleInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-progress-multiple", this.props.className, {});
        return (
            <div className={classes} style={this.props.style}>
                <GroupTextSeparate
                    left={this.props.title}
                    right={this.props.subTitle || ""}
                />
                <div className={"c-progress-multiple__progress"}>
                    {this.props.progress.map((item, index) => (
                        <ProgressBar {...item} key={index} value={item.value}/>
                    ))}
                </div>
            </div>
        )
    }
}
