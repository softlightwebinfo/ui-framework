import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Group} from "./Group";

export interface GroupTextSeparateInterfaceProps extends PropsInterface {
    left: string;
    right: string;
}

export class GroupTextSeparate extends PureComponent<GroupTextSeparateInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-group-text-separate", this.props.className, {});
        return (
            <Group style={this.props.style} className={classes}>
                <span className={"c-group-text-separate__left"}>{this.props.left}</span>
                <span className={"c-group-text-separate__right"}>{this.props.right}</span>
            </Group>
        )
    }
}
