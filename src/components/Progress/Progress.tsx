import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface ProgressInterfaceProps extends PropsInterface {
    value: number;
}

export class Progress extends PureComponent<ProgressInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-progress", this.props.className, {});
        return (
            <div className={classes} style={this.props.style}>
                <div className="c-progress__bar" style={{width: `${this.props.value}%`}}/>
            </div>
        )
    }
}
