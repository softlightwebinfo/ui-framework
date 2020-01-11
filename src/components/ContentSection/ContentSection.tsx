import {PureComponent} from "react";
import * as React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface ContentSectionInterfaceProps extends PropsInterface {
}

export class ContentSection extends PureComponent<ContentSectionInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div
                style={this.props.style}
                className={classNames("c-content-section", this.props.className)}
            >
                {this.props.children}
            </div>
        )
    }
}
