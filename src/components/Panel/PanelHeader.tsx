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
        const classnames = classNames("softPanelHeader");
        return (
            <header className={classnames}>
                <span className={"softPanelHeader__title"}>{this.props.title}</span>
                {this.props.right && (<div className={"softPanelHeader__right"}>{this.props.right}</div>)}
            </header>
        );
    }

}
