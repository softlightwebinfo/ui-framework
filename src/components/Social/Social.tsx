import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {OnClickEventType} from "../../interfaces/types/OnClickEventType";

export interface SocialInterfaceProps extends PropsInterface {
    icon: string;
    href?: string;
    onClick?: OnClickEventType;
}

export class Social extends PureComponent<SocialInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-social", this.props.className, {});
        return (
            <a href={this.props.href} onClick={this.props.onClick} style={this.props.style} className={classes}>
                <i className={`icon icon-${this.props.icon}`}/>
            </a>
        )
    }
}
