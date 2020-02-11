import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {ColorsTypes} from "../../interfaces/types/ColorsTypes";

export interface MessageInterfaceProps extends PropsInterface {
    separate?: boolean;
    empty?: boolean;
    type?: ColorsTypes;
    icon?: string;
    children: any;
}

export class Message extends PureComponent<MessageInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-message", this.props.className, {
            "c-message--empty": this.props.empty,
            "c-message--separate": this.props.separate,
            [`c-message--${this.props.type}`]: !!this.props.type,
        });
        return (
            <article style={this.props.style} className={classes}>
                <div className="c-message__body">
                    {this.props.icon && (<i className={`icon ${this.props.icon}`}/>)}
                    {this.props.children}
                </div>
            </article>
        )
    }
}
