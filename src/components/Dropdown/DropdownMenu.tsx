import React, {Component} from 'react'
import classNames from "classnames";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {PositionType} from "../../interfaces/types/PositionType";

interface Props extends PropsInterface {
    position?: PositionType;
}

export class DropdownMenu extends Component<Props> {
    static defaultProps = {};


    render() {
        const classes = classNames("c-dropdown-menu", this.props.className, {
            "c-dropdown-menu--left": this.props.position === "left",
            "c-dropdown-menu--right": this.props.position === "right",
        });
        return (
            <div
                className={classes}
                style={this.props.style}
            >
                {this.props.children}
            </div>
        )
    }
}
