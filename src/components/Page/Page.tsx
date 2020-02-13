import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface PageInterfaceProps extends PropsInterface {
    left?: any;
    right?: any;
}

export class Page extends PureComponent<PageInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-page", this.props.className, {});
        return (
            <div style={this.props.style} className={classes}>
                {this.props.left && (
                    <div className={"c-page__left"}>
                        <div className={"c-page__left__content"}>
                            {this.props.left}
                        </div>
                    </div>
                )}
                {this.props.children}
                {this.props.right && (<div className={"c-page__right"}>{this.props.right}</div>)}
            </div>
        )
    }
}
