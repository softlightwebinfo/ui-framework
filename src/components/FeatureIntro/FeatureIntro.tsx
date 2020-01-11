import {PureComponent} from "react";
import * as React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {TitleSubtitleInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";

export interface FeatureIntroInterfaceProps extends PropsInterface, TitleSubtitleInterface {
}

export class FeatureIntro extends PureComponent<FeatureIntroInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div
                style={this.props.style}
                className={classNames("c-feature-intro", this.props.className)}
            >
                <h1>{this.props.title}</h1>
                <p>{this.props.subTitle}</p>
            </div>
        )
    }
}
