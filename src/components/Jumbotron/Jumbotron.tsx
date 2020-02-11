import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Separator} from "../Separator";

export interface JumbotronInterfaceProps extends PropsInterface {
    title: string;
    description: string;
    subDescription: string;
    children: any;
}

export class Jumbotron extends PureComponent<JumbotronInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-jumbotron", this.props.className, {});
        return (
            <div style={this.props.style} className={classes}>
                <h2 className={"c-jumbotron__title"}>{this.props.title}</h2>
                <p className={"c-jumbotron__description"}>{this.props.description}</p>
                <Separator/>
                <p className={"c-jumbotron__subDescription"}>{this.props.subDescription}</p>
                {this.props.children}
            </div>
        );
    }
}
