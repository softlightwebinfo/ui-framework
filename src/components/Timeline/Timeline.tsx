import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {TimelineItem, TimelineItemInterfaceProps} from "./TimelineItem";
import {Card} from "../Card";

export interface TimelineInterfaceProps extends PropsInterface {
    timeline: TimelineItemInterfaceProps[];
    card?: boolean;
    fluid?: boolean;
}

export class Timeline extends PureComponent<TimelineInterfaceProps> {
    static defaultProps = {
        timeline: []
    };

    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-timeline", this.props.className, {});
        const template = (
            <ul style={this.props.style} className={classes}>
                {this.props.timeline.map((item, index) => (
                    <TimelineItem
                        key={index}
                        {...item}
                        type={item.type}
                        time={item.time}
                    />
                ))}
            </ul>
        );
        if (this.props.card) {
            return (
                <Card
                    fluid={this.props.fluid}
                >
                    {template}
                </Card>
            )
        }
        return template;
    }
}
