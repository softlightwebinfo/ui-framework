import {PureComponent} from "react";
import * as React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";

export interface RibbonBoxInterfaceProps extends PropsInterface {
    label: string | number;
}

export class RibbonBox extends PureComponent<RibbonBoxInterfaceProps> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={"c-ribbon-box"}>
                {this.props.label}
            </div>
        );
    }
}
