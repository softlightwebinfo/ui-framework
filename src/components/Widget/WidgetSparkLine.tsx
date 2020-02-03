import React, {PureComponent} from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Widget} from "./Widget";
import {TitleSubtitleOInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";
import {GroupTitleSubtitle} from "../Group";


export interface WidgetSparkLineInterfaceProps extends PropsInterface, TitleSubtitleOInterface {
    fluid?: boolean;
    card?: boolean;
}

export class WidgetSparkLine extends PureComponent<WidgetSparkLineInterfaceProps> {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = classNames("c-widget-spark-line", this.props.className, {});
        return (
            <Widget className={classes}{...this.props}>
                <GroupTitleSubtitle
                    title={this.props.title}
                    subTitle={this.props.subTitle}
                />
            </Widget>
        )
    }
}
