import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {NumberBaseStadistic} from "../Numbers";
import {ProgressMultiple} from "./ProgressMultiple";
import {ProgressBarInterfaceProps} from "./ProgressBar";

export interface ProgressExtendsLabelInterfaceProps extends PropsInterface {
    value: number;
    oldValue: number;
    progress: ProgressBarInterfaceProps[];
    title: string;
    subTitle?: string;
}

export class ProgressExtendsLabel extends PureComponent<ProgressExtendsLabelInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-progress-extends-label", this.props.className, {});
        return (
            <div className={classes} style={this.props.style}>
                <NumberBaseStadistic
                    value={this.props.value}
                    oldValue={this.props.oldValue}
                />
                <ProgressMultiple
                    title={this.props.title}
                    subtitle={this.props.subTitle}
                    progress={this.props.progress}
                />
            </div>
        )
    }
}
