import {CSSProperties, PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {OnChangeEventType} from "../../interfaces/types/OnChangeEventType";

export interface TextareaInterfaceProps extends PropsInterface {
    name?: string;
    value: string;
    cols?: number;
    rows?: number;
    id?: string;
    placeholder?: string;
    onChange?: OnChangeEventType;
    styleTextArea?: CSSProperties;
}

export class Textarea extends PureComponent<TextareaInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-textarea", this.props.className, {});
        return (
            <div className={classes} style={this.props.style}>
                <textarea
                    style={this.props.styleTextArea}
                    name={this.props.name}
                    id={this.props.id}
                    cols={this.props.cols}
                    rows={this.props.rows}
                    onChange={this.props.onChange}
                    placeholder={this.props.placeholder}
                    value={this.props.value}
                />
            </div>
        )
    }
}
