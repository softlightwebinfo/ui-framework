import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {GenerateSizeObject} from "../../config";
import {SizeTypes} from "../../interfaces/types/SizeTypes";

export interface SpacerInterfaceProps extends PropsInterface {
    size?: SizeTypes;
}

const sizeToClassNameMap = GenerateSizeObject('c-spacer');

export class Spacer extends PureComponent<SpacerInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-spacer", sizeToClassNameMap[this.props.size || "l"], this.props.className, {});
        return (
            <div style={this.props.style} className={classes}>{this.props.children}</div>
        )
    }
}
