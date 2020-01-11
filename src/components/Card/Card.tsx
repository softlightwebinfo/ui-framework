import {PureComponent} from "react";
import React from "react";
import classNames from 'classnames';
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {TitleSubtitleInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";

export interface CardInterfaceProps extends PropsInterface, TitleSubtitleInterface {
    header?: any,
    footer?: any,
    fluid?: boolean;
    bodyNoPadding?: boolean;
    classNameBody?: string;
    classNameContent?: string;
}

export class Card extends PureComponent<CardInterfaceProps> {
    get renderHeader() {
        return <div className="c-card__header">
            {this.props.header}
        </div>;
    }

    get renderBody() {
        let title, subTitle, footer, children;

        if (this.props.title) {
            title = <div className="c-card__title">{this.props.title}</div>;
        }
        if (this.props.subTitle) {
            subTitle = <div className="c-card__subtitle">{this.props.subTitle}</div>;
        }
        if (this.props.footer) {
            footer = <div className="c-card__footer"> {this.props.footer}</div>;
        }
        if (this.props.children) {
            children = <div className={classNames("c-card__content", this.props.classNameContent)}> {this.props.children} </div>;
        }
        return (
            <div className={classNames("c-card__body", this.props.classNameBody, {"c-card__body--no-padding": this.props.bodyNoPadding})}>
                {title}
                {subTitle}
                {children}
                {footer}
            </div>
        );
    }

    render(): React.ReactNode {
        let header, body;
        let className = classNames('c-card', this.props.className, {
            "c-card--fluid": this.props.fluid,
        });

        if (this.props.header) {
            header = this.renderHeader;
        }
        body = this.renderBody;

        return (
            <div className={className} style={this.props.style}>
                {header}
                {body}
            </div>
        );
    }
}
