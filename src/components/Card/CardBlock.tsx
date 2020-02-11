import {PureComponent} from "react";
import React from "react";
import classNames from 'classnames';
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {OnClickEventType} from "../../interfaces/types/OnClickEventType";

export interface CardBlockInterfaceProps extends PropsInterface {
    fluid?: boolean;
    card?: boolean;
    separate?: boolean;
    color?: string;
    onClickCard?: OnClickEventType;
}

export class CardBlock extends PureComponent<CardBlockInterfaceProps> {
    static defaultProps = {
        open: true,
    };


    render(): React.ReactNode {
        let className = classNames('c-card-block', this.props.className, {
            "c-card-block--fluid": this.props.fluid,
            "c-card-block--card": this.props.card,
            "c-card-block--separate": this.props.separate,
        });

        return (
            <div
                onClick={this.props.onClickCard} className={className} style={{
                borderColor: this.props.color,
                ...this.props.style,
            }}>
                {this.props.children}
            </div>
        );
    }
}
