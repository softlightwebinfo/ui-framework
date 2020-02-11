import {PureComponent} from "react";
import * as React from "react";
import {TabbedContent} from "./TabbedContent";
import classNames from 'classnames';

export class TabsBar extends PureComponent<{
    tabs: any[];
    onTabClick: (tab: any) => void;
    selected: number;
}> {
    constructor(props) {
        super(props);
    }

    render() {
        const classnames = classNames("c-TabsBar");
        return (
            <TabbedContent
                className={classnames}
                tabs={this.props.tabs}
                initialSelectedTab={this.props.tabs[this.props.selected]}
                onTabClick={this.props.onTabClick}
            />
        );
    }
}
