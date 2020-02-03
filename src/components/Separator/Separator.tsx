import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface SeparatorInterfaceProps extends PropsInterface {

}

export class Separator extends PureComponent<SeparatorInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-separator", this.props.className, {});
        return (<div style={this.props.style} className={classes}/>)
    }
}
