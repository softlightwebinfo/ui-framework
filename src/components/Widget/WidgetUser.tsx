import React, {PureComponent} from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Widget} from "./Widget";
import {Avatar} from "../Avatar";
import {TitleSubtitleOInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";


export interface WidgetUserInterfaceProps extends PropsInterface, TitleSubtitleOInterface {
    fluid?: boolean;
    card?: boolean;
    avatar: string;
    footer?: any;
    size?: number;
}

export class WidgetUser extends PureComponent<WidgetUserInterfaceProps> {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = classNames("c-widget-user", this.props.className, {});
        return (
            <Widget className={classes}{...this.props}>
                <Avatar
                    size={this.props.size || 80}
                    fluid={false}
                    name={this.props.title}
                    image={this.props.avatar}
                />
                <h3 className={"c-widget-user__title"}>{this.props.title}</h3>
                <div className="c-widget-user__subTitle">{this.props.subTitle}</div>
                {this.props.footer && (
                    <div className={"c-widget-user__footer"}>
                        {this.props.footer}
                    </div>
                )}
            </Widget>
        )
    }
}
