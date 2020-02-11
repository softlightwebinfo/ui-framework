import {PureComponent} from "react";
import * as React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface SectionInterfaceProps extends PropsInterface {
}

export class Section extends PureComponent<SectionInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div
                style={this.props.style}
                className={classNames("c-section", this.props.className)}
            >
                {this.props.children}
            </div>
        )
    }
}
