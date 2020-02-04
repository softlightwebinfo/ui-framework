import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {TimelineItem, TimelineItemInterfaceProps} from "./TimelineItem";

export interface TimelineInterfaceProps extends PropsInterface {
    timeline: TimelineItemInterfaceProps[];
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
        return (
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
        )
    }
}
