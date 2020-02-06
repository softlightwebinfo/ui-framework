import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Group} from "./Group";
import {Text} from "../Text";
import {TitleSubtitleOInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";
import {ColorsTypes} from "../../interfaces/types/ColorsTypes";

export interface GroupTextTitleInterfaceProps extends PropsInterface, TitleSubtitleOInterface {
    subTitleColor?: ColorsTypes;
}

export class GroupTextTitle extends PureComponent<GroupTextTitleInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-group-text-title", this.props.className, {});
        return (
            <Group style={this.props.style} className={classes}>
                <p className={"c-group-text-title__title"}>{this.props.title}</p>
                <p className={"c-group-text-title__subTitle"}>
                    <Text type={this.props.subTitleColor}>{this.props.subTitle}</Text>
                </p>
            </Group>
        )
    }
}
