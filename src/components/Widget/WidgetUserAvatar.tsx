import React, {PureComponent} from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Widget} from "./Widget";
import {Avatar} from "../Avatar";
import {TitleSubtitleOInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";


export interface WidgetUserAvatarInterfaceProps extends PropsInterface, TitleSubtitleOInterface {
    fluid?: boolean;
    card?: boolean;
    avatar: string;
}

export class WidgetUserAvatar extends PureComponent<WidgetUserAvatarInterfaceProps> {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = classNames("c-widget-user-avatar", this.props.className, {});
        return (
            <Widget className={classes}{...this.props}>
                <Avatar
                    fluid={this.props.fluid}
                    className={"c-widget-user-avatar__avatar"}
                    size={80}
                    name={this.props.title}
                    image={this.props.avatar}
                />
                <div className={"c-widget-user-avatar__body"}>
                    <h3 className={"c-widget-user-avatar__title"}>{this.props.title}</h3>
                    <p className={"c-widget-user-avatar__subTitle"}>{this.props.subTitle}</p>
                    <div className={"c-widget-user-avatar__footer"}>{this.props.children}</div>
                </div>
            </Widget>
        )
    }
}
