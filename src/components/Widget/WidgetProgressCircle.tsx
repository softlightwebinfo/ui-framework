import React, {PureComponent} from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Widget} from "./Widget";
import {ProgressRadial} from "../Progress";

export interface WidgetProgressCircleInterfaceProps extends PropsInterface {
    fluid?: boolean;
    card?: boolean;
    title: string;
    progress: number;
    color?: string;
}

export class WidgetProgressCircle extends PureComponent<WidgetProgressCircleInterfaceProps> {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = classNames("c-widget-progress-circle", this.props.className, {});
        return (
            <Widget className={classes}{...this.props}>
                <h3 className={"c-widget-progress-circle__title"}>{this.props.title}</h3>
                <ProgressRadial
                    color={this.props.color}
                    value={this.props.progress}
                    strokeWidth={5}
                    size={100}
                />
            </Widget>
        )
    }
}
