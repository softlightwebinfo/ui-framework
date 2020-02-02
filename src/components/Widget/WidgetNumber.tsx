import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Text} from "../Text";
import {Widget} from "./Widget";

export interface WidgetNumberInterfaceProps extends PropsInterface {
    fluid?: boolean;
    title: string;
    number: number;
    numberLast: number;
    money: string;
    subtitle: string;
    card?: boolean;
}

export class WidgetNumber extends PureComponent<WidgetNumberInterfaceProps> {
    constructor(props) {
        super(props);
    }

    get discount() {
        return `${this.percentage}%`;
    }

    get percentage() {
        const porcentaje = ((this.props.number - this.props.numberLast) / this.props.numberLast) * 100;
        const intPorcentaje = Math.round(porcentaje);
        return intPorcentaje;
    }

    get discountIcon() {
        if (this.percentage > 0) {
            return (<i className={"icon icon-up-4"}></i>);
        }
        return (<i className={"icon icon-down-4"}></i>);
    }

    render() {
        const classes = classNames("c-widget-number", this.props.className, {});
        return (
            <Widget className={classes}{...this.props}>
                <h6 className={"c-widget-number__title"}>{this.props.title}</h6>
                <h3 className={"c-widget-number__number"}>{this.props.number} {this.props.money}</h3>
                <span className={"c-widget-number__span"}>
                     <Text type={"danger"} style={{marginRight: 10}}>
                         {this.discountIcon}
                         {this.discount}
                     </Text>
                    {this.props.subtitle}
                </span>
            </Widget>
        )
    }
}
