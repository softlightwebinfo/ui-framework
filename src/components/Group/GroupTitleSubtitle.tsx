import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Group} from "./Group";
import {TitleSubtitleOInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";

export interface GroupTitleSubtitleInterfaceProps extends PropsInterface, TitleSubtitleOInterface {
}

export class GroupTitleSubtitle extends PureComponent<GroupTitleSubtitleInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-group-title-subtitle", this.props.className, {});
        return (
            <Group style={this.props.style} className={classes}>
                <span className={"c-group-title-subtitle__title"}>{this.props.title}</span>
                <h3 className={"c-group-title-subtitle__subTitle"}>{this.props.subTitle}</h3>
            </Group>
        )
    }
}
