import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface BoxFooterInterfaceProps extends PropsInterface {

}

export class BoxFooter extends PureComponent<BoxFooterInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-box-footer", this.props.className, {});
        return (
            <footer style={this.props.style} className={classes}>
                {this.props.children}
            </footer>
        )
    }
}
