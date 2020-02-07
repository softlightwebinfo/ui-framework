import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {TitleSubtitleInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";
import {ColorsTypes} from "../../interfaces/types/ColorsTypes";
import {SizeTypes} from "../../interfaces/types/SizeTypes";
import {Progress} from "./Progress";

export interface ProgressIntermittentInterfaceProps extends PropsInterface, TitleSubtitleInterface {
    color?: ColorsTypes;
    position?: "default" | "fixed";
    size?: SizeTypes;
}

export class ProgressIntermittent extends PureComponent<ProgressIntermittentInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-progress-intermittent", this.props.className, {
            "c-progress-intermittent--fixed": this.props.position === "fixed"
        });
        return (
            <Progress value={10} className={classes}/>
        )
    }
}
