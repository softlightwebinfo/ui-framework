import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import moment, {Moment} from 'moment';

export interface TimeInterfaceProps extends PropsInterface {
    format?: string;
    time: Moment;
}

export class Time extends PureComponent<TimeInterfaceProps> {
    constructor(props) {
        super(props);
    }

    get time() {
        return moment(this.props.time).format(this.props.format);
    }

    render() {
        const classes = classNames("c-time", this.props.className, {});
        return (
            <div style={this.props.style} className={classes}>{this.time}</div>
        )
    }
}
