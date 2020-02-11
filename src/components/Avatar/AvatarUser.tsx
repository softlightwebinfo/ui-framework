import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Avatar} from "./Avatar";
import {Text} from "../Text";

export interface AvatarUserInterfaceProps extends PropsInterface {
    name: string;
    image?: string;
    fluid?: boolean;
    color?: string;
    size?: number;
    subTitle: string;
}

export class AvatarUser extends PureComponent<AvatarUserInterfaceProps> {
    constructor(props) {
        super(props);
    }

    static defaultProps = {
        size: 60
    };

    render() {
        const classes = classNames("c-avatar-user", this.props.className, {});
        return (
            <div style={this.props.style} className={classes}>
                <Avatar
                    fluid={this.props.fluid}
                    size={this.props.size}
                    image={this.props.image}
                    name={this.props.name}
                />
                <div className={"c-avatar-user__content"}>
                    <div>{this.props.name}</div>
                    <Text style={{color: "grey"}}>{this.props.subTitle}</Text>
                </div>
            </div>
        )
    }
}
