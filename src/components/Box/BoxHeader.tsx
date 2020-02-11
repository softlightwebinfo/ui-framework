import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {OnClickEventType} from "../../interfaces/types/OnClickEventType";

export interface BoxHeaderInterfaceProps extends PropsInterface {
    title?: string;
    icon?: string;
    number?: number;
    options?: any;
    onClickIcon?: OnClickEventType;
}

export class BoxHeader extends PureComponent<BoxHeaderInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-box-header", this.props.className, {
            "c-box-header--only-icon": !this.props.title && !this.props.number
        });
        return (
            <header style={this.props.style} className={classes}>
                <i onClick={this.props.onClickIcon} className={`icon ${this.props.icon || 'icon-minus-circle-1'}`}/>
                {this.props.title && (<h3 className={"c-box-header__title"}>{this.props.title}</h3>)}
                {
                    // @ts-ignore
                    this.props.number >= 0 && (
                        <div className={"c-box-header__options"}>
                            {this.props.options}
                            <span className={"c-box-header__number"}>{this.props.number}</span>
                        </div>
                    )}
            </header>
        )
    }
}
