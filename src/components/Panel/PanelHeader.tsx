import {PureComponent, ReactElement} from "react";
import * as React from "react";
import classNames from 'classnames';

export class PanelHeader extends PureComponent<{
    title: string;
    right?: ReactElement<any>;
}> {
    constructor(props) {
        super(props);
    }

    render() {
        const classnames = classNames("c-panel-header");
        return (
            <header className={classnames}>
                <span className={"c-panel-header__title"}>{this.props.title}</span>
                {this.props.right && (<div className={"c-panel-header__right"}>{this.props.right}</div>)}
            </header>
        );
    }

}
