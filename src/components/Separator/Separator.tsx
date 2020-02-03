import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface BadgeInterfaceProps extends PropsInterface {
    isRead?: boolean;
}

export class Separator extends PureComponent<BadgeInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-separator", this.props.className, {});
        return (<div style={this.props.style} className={classes}/>)
    }
}
