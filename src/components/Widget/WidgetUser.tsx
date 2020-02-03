import React, {PureComponent} from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Widget} from "./Widget";
import {Progress} from "../Progress";

export interface WidgetPercentageInterfaceProps extends PropsInterface {
    fluid?: boolean;
    card?: boolean;
    title: string;
    percentage: number;
    money: string;
    price: number;
}

export class WidgetPercentage extends PureComponent<WidgetPercentageInterfaceProps> {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = classNames("c-widget-percentage", this.props.className, {});
        return (
            <Widget className={classes}{...this.props}>
                <div className={"c-widget-percentage__percentage"}>{this.props.percentage} %</div>
                <h4 className={"c-widget-percentage__price"}>{this.props.price} {this.props.money}</h4>
                <div className={"c-widget-percentage__title"}>{this.props.title}</div>
                <Progress className={"c-widget-percentage__progress"} value={this.props.percentage}/>
            </Widget>
        )
    }
}
