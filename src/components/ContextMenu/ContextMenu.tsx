import React, {Component, Fragment} from 'react'
import classNames from "classnames";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {ContextItem} from "./ContextItem";
import {ContextDivider} from "./ContextDivider";
import {Badge} from "../Badge";

interface PropsMenuContextInterface {
    icon?: string;
    label?: string;
    onClick?: (item: PropsMenuContextInterface, index: number, e: any) => void;
    separate?: boolean;
    badge?: {
        label: number | string;
    }
}

export interface ContextMenuInterfaceProps extends PropsInterface {
    menu: PropsMenuContextInterface[];
}

export class ContextMenu extends Component<ContextMenuInterfaceProps> {
    static defaultProps = {};


    render() {
        const classes = classNames("c-context-menu", this.props.className, {});
        return (
            <div
                className={classes}
                style={this.props.style}
            >
                {this.props.menu.map((item, index) => (
                    <Fragment key={index}>
                        {item.separate && (<ContextDivider/>)}
                        {!item.separate && (
                            <ContextItem onClick={e => item.onClick && item.onClick(item, index, e)}>
                                {ContextMenu.menu(item, index)}
                            </ContextItem>
                        )}
                    </Fragment>
                ))}
            </div>
        )
    }

    private static menu(item: PropsMenuContextInterface, _: number) {
        return (
            <>
                {item.icon && (<i className={item.icon}/>)}
                {item.label && (<span>{item.label}</span>)}
                {item.badge && <Badge>{item.badge.label}</Badge>}
            </>
        )
    }
}
