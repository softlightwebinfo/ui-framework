import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {WidgetNumber} from "./WidgetNumber";

export interface WidgetNumberCenterInterfaceProps extends PropsInterface {
    fluid?: boolean;
    title: string;
    number: number;
    numberLast: number;
    subtitle: string;
    card?: boolean;
    money?: string;
}

export class WidgetNumberCenter extends PureComponent<WidgetNumberCenterInterfaceProps> {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = classNames("c-widget-number-center", this.props.className, {});
        return (
            <WidgetNumber
                {...this.props}
                className={classes}
                title={this.props.title}
                number={this.props.number}
                numberLast={this.props.numberLast}
                money={this.props.money || ""}
                subtitle={this.props.subtitle}
            />
        )
    }
}
