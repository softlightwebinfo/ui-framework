import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {OnClickEventType} from "../../interfaces/types/OnClickEventType";

export interface BoxOptionInterfaceProps extends PropsInterface {
    number: number;
    onClick?: OnClickEventType;
}

export class BoxOption extends PureComponent<BoxOptionInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-box-option", this.props.className, {});
        return (
            <div onClick={this.props.onClick} style={this.props.style} className={classes}>
                <div className={"c-box-option__content"}>
                    <span className={"c-box-option__text"}>{this.props.children}</span>
                    <span className={"c-box-option__number"}>{this.props.number}</span>
                </div>
            </div>
        )
    }
}
