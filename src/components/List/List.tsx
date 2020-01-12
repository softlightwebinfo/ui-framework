import React, {PureComponent, Fragment} from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {ListVariant} from "../../interfaces/enum/ListVariant";
import {ListComponent} from "../../interfaces/enum/ListComponent";
import {ListInterface} from "../../interfaces/interfaces/ListInterface";
import {ListItem} from "../ListItem";

export interface ListInterfaceProps extends PropsInterface {
    variant?: ListVariant;
    component?: ListComponent;
    list?: ListInterface[];
}

export class List extends PureComponent<ListInterfaceProps> {
    constructor(props) {
        super(props);
    }

    generate() {
        if (this.props.children) return this.props.children;
        return (
            (this.props.list || []).map((item, index) => (
                <Fragment key={index}>
                    <ListItem>{item.label}</ListItem>
                    {(item.list || []).length > 0 && (
                        <List
                            component={this.props.component}
                            list={item.list}
                        />
                    )}
                </Fragment>
            ))
        )
    }

    render() {
        const classes = classNames("c-list", this.props.className, {
            "c-list--inline": this.props.variant == ListVariant.INLINE,
            [`c-list--${this.props.component}`]: this.props.component,
        });
        const Component = this.props.component || ListComponent.UL;
        return (
            <Component
                style={this.props.style}
                className={classes}
            >
                {this.generate()}
            </Component>
        )
    }
}
