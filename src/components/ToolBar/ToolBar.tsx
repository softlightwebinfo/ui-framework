import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {ToolBarItem} from './ToolBarItem';

export interface ToolBarInterfaceProps extends PropsInterface {

}

export class ToolBar extends PureComponent<ToolBarInterfaceProps> {
    static Item = ToolBarItem;

    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-toolBar", this.props.className, {});
        return (
            <div style={this.props.style} className={classes}>{this.props.children}</div>
        )
    }
}
