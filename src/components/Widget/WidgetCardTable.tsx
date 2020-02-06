import React, {PureComponent} from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Widget} from "./Widget";
import {TitleSubtitleOInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";
import {GroupTextTitle} from "../Group";
import {ColorsTypes} from "../../interfaces/types/ColorsTypes";


export interface WidgetCardTableInterfaceProps extends PropsInterface, TitleSubtitleOInterface {
    fluid?: boolean;
    card?: boolean;
    icon: string;
    leftTop: string;
    leftBottom: string;
    leftBottomColor?: ColorsTypes;
}

export class WidgetCardTable extends PureComponent<WidgetCardTableInterfaceProps> {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = classNames("c-widget-card-table", this.props.className, {});
        return (
            <Widget className={classes}{...this.props}>
                <div className={"c-widget-card-table__icon"}>
                    <i className={`icon icon-${this.props.icon}`}/>
                </div>
                <div className={"c-widget-card-table__center"}>
                    <GroupTextTitle
                        title={this.props.title}
                        subTitle={this.props.subTitle}
                    />
                </div>
                <div className={"c-widget-card-table__right"}>
                    <GroupTextTitle
                        title={this.props.leftTop}
                        subTitle={this.props.leftBottom}
                        subTitleColor={this.props.leftBottomColor}
                    />
                </div>
            </Widget>
        )
    }
}
