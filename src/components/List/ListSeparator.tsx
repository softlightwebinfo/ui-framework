import React, {PureComponent} from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {ListComponent} from "../../interfaces/enum/ListComponent";

export interface ListSeparatorInterfaceProps extends PropsInterface {
    component?: ListComponent;
    list: any[];
    data: (item, index) => any;
    variant?: "inline" | "vertical"
}

export class ListSeparator extends PureComponent<ListSeparatorInterfaceProps> {
    constructor(props) {
        super(props);
    }

    render() {
        const classes = classNames("c-list-separator", this.props.className, {
            "c-list-separator--inline": this.props.variant === "inline",
        });
        const Component = this.props.component || ListComponent.UL;
        return (
            <Component
                style={this.props.style}
                className={classes}
            >
                {this.props.list.map((item, index) => (
                    <li key={index}>
                        {this.props.data(item, index)}
                    </li>
                ))}
            </Component>
        )
    }
}
