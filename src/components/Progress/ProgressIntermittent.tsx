import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {TitleSubtitleInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";

export interface ProgressIntermittentInterfaceProps extends PropsInterface, TitleSubtitleInterface {
    value: number;
    label: string;
}

export class ProgressIntermittent extends PureComponent<ProgressIntermittentInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-progress-intermittent", this.props.className, {});
        return (
            <div className={classes} style={this.props.style}>

            </div>
        )
    }
}
