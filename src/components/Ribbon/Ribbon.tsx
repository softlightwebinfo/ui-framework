import {PureComponent} from "react";
import * as React from "react";
import {Card} from "../Card";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {RibbonBox} from "./RibbonBox";

export interface RibbonInterfaceProps extends PropsInterface {
    fluid?: boolean;
    number?: number;
    title: string;
    icon: string;
    noCard?: boolean;
    tagLink?: any;
}

export class Ribbon extends PureComponent<RibbonInterfaceProps> {
    constructor(props) {
        super(props);
    }

    get content() {
        const Tag = (props) => this.props.tagLink ? this.props.tagLink(props) : props.children;
        return (
            <Tag>
                <a>
                    <i className={this.props.icon}/>
                    <span>{this.props.title}</span>
                </a>
            </Tag>
        )
    }

    get child() {
        return (
            <>
                {this.props.number && <RibbonBox label={this.props.number}/>}
                {this.content}
            </>
        )
    }

    render() {
        const card = (
            <Card
                fluid={this.props.fluid}
                style={this.props.style}
                bodyNoPadding
                classNameContent={"c-ribbon"}
            >
                {this.child}
            </Card>
        );
        if (this.props.noCard) {
            return (
                <div className={"c-ribbon"}>
                    {this.child}
                </div>
            )
        }
        return card;
    }
}
