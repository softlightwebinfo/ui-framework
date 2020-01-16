import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {OnChangeEventType} from "../../interfaces/types/OnChangeEventType";

export interface SelectInterfaceProps extends PropsInterface {
    options: SelectInterfacePropsOptions[];
    selected: number | string;
    onChange: OnChangeEventType;
}

export interface SelectInterfacePropsOptions {
    label: string;
    value: number | string;
}

export class Select extends PureComponent<SelectInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-select", this.props.className, {});
        return (
            <select onChange={this.props.onChange} value={this.props.selected} style={this.props.style} className={classes}>
                {this.props.options.map((item) => (
                    <option key={item.value} value={item.value}>{item.label}</option>
                ))}
            </select>
        )
    }
}
