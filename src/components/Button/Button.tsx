import React, {Component} from 'react'
import {PositionType} from "../../interfaces/types/PositionType";
import classNames from "classnames";
import {OnClickEventType} from "../../interfaces/types/OnClickEventType";
import {ColorsTypes} from "../../interfaces/types/ColorsTypes";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";

interface Props extends PropsInterface {
    label?: string;
    icon?: string;
    iconPos?: PositionType;
    isDisabled?: boolean;
    onClick?: OnClickEventType;
    color?: ColorsTypes;
    raised?: boolean;
    rounded?: boolean;
    empty?: boolean;
}

export class Button extends Component<Props> {
    static defaultProps = {
        iconPos: "left"
    };

    get labelRender() {
        if (!this.props.label) return null;
        return (
            <span className={"c-button__text"}>
                {this.props.label}
            </span>
        )
    }

    get renderIcon() {
        if (!this.props.icon) return null;
        let className = classNames(this.props.icon, {
            'c-button__icon-left': this.props.iconPos !== 'right',
            'c-button__icon-right': this.props.iconPos === 'right'
        });

        return (
            <span className={className}/>
        );
    }

    render() {
        const classes = classNames("c-button", this.props.className, {
            [`c-button--${this.props.color}`]: !!this.props.color,
            "c-button--raised": this.props.raised,
            "c-button--empty": this.props.empty,
            "c-button--rounded": this.props.rounded,
            "c-button--icon-only": !this.props.label && this.props.icon,
            "c-button--text-only": this.props.label && !this.props.icon,
        });
        return (
            <button
                className={classes}
                style={this.props.style}
                onClick={this.props.onClick}
            >
                {this.props.iconPos == "left" && this.renderIcon}
                {this.labelRender}
                {this.props.iconPos == "right" && this.renderIcon}
            </button>
        )
    }
}
