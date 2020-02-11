import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {BoxHeader, BoxHeaderInterfaceProps} from "./BoxHeader";
import {BoxBody, BoxBodyInterfaceProps} from "./BoxBody";
import {BoxFooter} from "./BoxFooter";

export interface BoxInterfaceProps extends PropsInterface {
    header: BoxHeaderInterfaceProps;
    body: BoxBodyInterfaceProps;
}

export class Box extends PureComponent<BoxInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-box", this.props.className, {});
        return (
            <div
                style={this.props.style}
                className={classes}
            >
                <BoxHeader{...this.props.header}/>
                <BoxBody {...this.props.body}>{this.props.children}</BoxBody>
                <BoxFooter/>
            </div>
        )
    }
}
