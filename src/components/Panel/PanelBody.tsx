import {PureComponent} from "react";
import * as React from "react";
import classNames from 'classnames';

export class PanelBody extends PureComponent<{
    className?: string;
    style?: object;
}> {
    constructor(props) {
        super(props);
    }

    render() {
        const classnames = classNames("c-panel-body", this.props.className);
        return (
            <section className={classnames} style={this.props.style}>
                {this.props.children}
            </section>
        );
    }
}
