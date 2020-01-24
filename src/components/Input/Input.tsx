import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {InputType} from "../../interfaces/types/InputType";
import {OnChangeEventType} from "../../interfaces/types/OnChangeEventType";

export interface InputInterfaceProps extends PropsInterface {
    type?: InputType,
    placeholder?: string;
    value?: string;
    onChange?: OnChangeEventType;
    onKeyUp?: any;
    onKeyPress?: any;
}

export class Input extends PureComponent<InputInterfaceProps> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        type: "text"
    };

    render() {
        const classes = classNames("c-input", this.props.className);
        return (
            <input
                onKeyUp={this.props.onKeyUp}
                onKeyPress={this.props.onKeyPress}
                placeholder={this.props.placeholder}
                type={this.props.type}
                style={this.props.style}
                className={classes}
                value={this.props.value}
                onChange={this.props.onChange}
            />
        )
    }
}
