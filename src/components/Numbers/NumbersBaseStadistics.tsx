import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {Text} from "../Text";
import classNames from 'classnames';

export interface NumberBaseStadisticInterfaceProps extends PropsInterface {
    value: number;
    oldValue: number;
}

export class NumberBaseStadistic extends PureComponent<NumberBaseStadisticInterfaceProps> {
    constructor(props) {
        super(props);
    }

    get discount() {
        return `${this.percentage}%`;
    }

    get percentage() {
        const percentage: number = ((this.props.value - this.props.oldValue) / this.props.oldValue) * 100;
        return Math.round(percentage);
    }

    get discountIcon() {
        if (this.percentage > 0) {
            return (<i className={"icon icon-up-4"}/>);
        }
        return (<i className={"icon icon-down-4"}/>);
    }

    render() {
        const classes = classNames("c-numbers-base-stadistic", this.props.className, {});
        return (
            <div style={this.props.style} className={classes}>
                <div className={"c-numbers-base-stadistic__value"}>{this.props.value}</div>
                <Text type={"danger"}>
                    {this.discount}
                    {this.discountIcon}
                </Text>
            </div>
        )
    }
}
