import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Bullet, BulletInterfaceProps} from "../Bullet";
import {TitleSubtitleOInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";
import {Time, TimeInterfaceProps} from "../Time";
import {Text} from "../Text";

export interface TimelineItemInterfaceProps extends PropsInterface, TitleSubtitleOInterface, TimeInterfaceProps, BulletInterfaceProps {
    description?: string;
    component?: any;
}

export class TimelineItem extends PureComponent<TimelineItemInterfaceProps> {
    static defaultProps = {
        format: "HH:mm"
    };

    constructor(props) {
        super(props);
    }

    render() {
        const classes = classNames("c-timeline-item", this.props.className, {});
        return (
            <li style={this.props.style} className={classes}>
                <Bullet type={this.props.type}/>
                <Time time={this.props.time} format={this.props.format}/>
                <div className="c-timeline-item__desc">
                    <h3 className={"c-timeline-item__desc__title"}>{this.props.title}</h3>
                    <h4 className={"c-timeline-item__desc__subTitle"}>{this.props.subTitle}</h4>
                    {this.props.description && (<Text size={"sm"}>{this.props.description}</Text>)}
                    {this.props.component}
                </div>
                {this.props.children}
            </li>
        )
    }
}
