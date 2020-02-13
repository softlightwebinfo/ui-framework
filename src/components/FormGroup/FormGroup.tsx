import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface FormGroupInterfaceProps extends PropsInterface {
    isCompact?: boolean;
    label?: string;
}

export class FormGroup extends PureComponent<FormGroupInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-form-group", this.props.className, {});
        return (
            <div style={this.props.style} className={classes}>
                {this.props.label && (<label>{this.props.label}</label>)}
                {this.props.children}
            </div>
        )
    }
}
