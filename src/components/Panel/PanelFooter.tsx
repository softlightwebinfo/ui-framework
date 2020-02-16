import {PureComponent} from "react";
import * as React from "react";
import classNames from 'classnames';

export class PanelFooter extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const classnames = classNames("c-panel-footer");
        return (
            <footer className={classnames}>
                {this.props.children}
            </footer>
        );
    }
}
