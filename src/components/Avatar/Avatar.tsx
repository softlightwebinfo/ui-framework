import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {VISUALIZATION_COLORS} from "../../functions/colors";
import {hexToRgb, isColorDark} from "../../functions/check";

export interface AvatarInterfaceProps extends PropsInterface {
    name?: string;
    image?: string;
    fluid?: boolean;
    color?: string;
    size?: number;
}

export class Avatar extends PureComponent<AvatarInterfaceProps> {
    constructor(props) {
        super(props);
    }

    get getimage() {
        if (this.props.image) {
            return (<img style={{visibility: "hidden"}} src={this.props.image} alt={this.props.name} title={this.props.name}/>)
        }
        return null;
    }

    get getName() {
        if (this.props.name && !this.props.image) {
            const names = this.props.name.split(" ");
            let name = names[0].toUpperCase();
            if (names.length) {
                name = names.slice(0, 2).map(i => i.slice(0, 1).toUpperCase()).join("")
            }

            return (
                <span>
                    {name}
                </span>
            )
        }
        return null;
    }

    render() {
        const assignedColor = this.props.color || VISUALIZATION_COLORS[Math.floor((this.props.name || "").length % VISUALIZATION_COLORS.length)];
        // @ts-ignore
        const textColor = isColorDark(...hexToRgb(assignedColor))
            ? '#FFFFFF'
            : '#000000';

        const avatarStyle = {
            backgroundImage: this.props.image ? `url(${this.props.image})` : 'none',
            backgroundColor: assignedColor,
            color: textColor,
            height: this.props.size,
            width: this.props.size,
            ...this.props.style
        };
        const classes = classNames("c-avatar", this.props.className, {
            "c-avatar--fluid": this.props.fluid,
            "c-avatar--image": !!this.props.image,
        });
        return (
            <div style={avatarStyle} className={classes}>
                {this.getimage}
                {this.getName}
            </div>
        )
    }
}
