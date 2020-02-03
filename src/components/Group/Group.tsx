import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface GroupInterfaceProps extends PropsInterface {

}

export class Group extends PureComponent<GroupInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-group", this.props.className, {});
        return (
            <div style={this.props.style} className={classes}>
                {this.props.children}
            </div>
        )
    }
}
