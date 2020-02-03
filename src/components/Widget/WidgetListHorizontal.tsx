import React, {PureComponent} from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Widget} from "./Widget";
import {TitleSubtitleOInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";
import {RowCol} from "../Row";


export interface WidgetListHorizontalInterfaceProps extends PropsInterface {
    fluid?: boolean;
    card?: boolean;
    list: WidgetListHorizontalInterfacePropsList[];
}

export interface WidgetListHorizontalInterfacePropsList extends TitleSubtitleOInterface {

}

export class WidgetListHorizontal extends PureComponent<WidgetListHorizontalInterfaceProps> {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = classNames("c-widget-list-horizontal", this.props.className, {});
        return (
            <Widget className={classes}{...this.props}>
                {this.props.list.map((item, index) => (
                    <RowCol key={index} className={"c-widget-list-horizontal__item"}>
                        <h4 className={"c-widget-list-horizontal__item__title"}>{item.title}</h4>
                        <div className={"c-widget-list-horizontal__item__subTitle"}>{item.subTitle}</div>
                    </RowCol>
                ))}
            </Widget>
        )
    }
}
