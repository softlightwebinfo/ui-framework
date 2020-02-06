import React, {PureComponent} from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Widget} from "./Widget";
import {Stars} from "../Stars";
import {Text} from "../Text";

export interface WidgetOverallRatingInterfaceProps extends PropsInterface {
    fluid?: boolean;
    card?: boolean;
    stars: number;
    description: string;
}

export class WidgetOverallRating extends PureComponent<WidgetOverallRatingInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-widget-overall-rating", this.props.className, {});
        return (
            <Widget className={classes}{...this.props}>
                <div className={"c-widget-overall-rating__stars"}>
                    <span className={"c-widget-overall-rating__stars__number"}>{this.props.stars}</span>
                    <Stars stars={this.props.stars}/>
                </div>
                <Text>{this.props.description}</Text>
            </Widget>
        )
    }
}
