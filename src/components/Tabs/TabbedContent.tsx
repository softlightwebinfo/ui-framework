import React, {Component} from 'react';
import {htmlIdGenerator} from "../../functions/generate";

import {Tabs} from './Tabs';
import {Tab} from './Tab';
// import {SoftLink} from "../../";

const makeId = htmlIdGenerator();

export class TabbedContent extends Component<{
    onTabClick?: any,
    selectedTab?: any,
    className?: any,
    tabs?: { id: number; name: string; content: any }[],
    initialSelectedTab?: any, // eslint-disable-line no-unused-vars
    selectedTabv?: any,
    size?: any,
    expand?: any,
}> {
    private readonly rootId: string;
    state = {
        selectedTabId: null
    };

    constructor(props) {
        super(props);

        const {initialSelectedTab, selectedTab, tabs} = props;

        this.rootId = makeId();

        // Only track selection state if it's not controlled externally.
        if (!selectedTab) {
            this.state = {
                selectedTabId: (initialSelectedTab && initialSelectedTab.id) || tabs[0].id,
            };
        }
    }

    onTabClick = (selectedTab) => {
        const {onTabClick, selectedTab: externalSelectedTab} = this.props;

        if (onTabClick) {
            onTabClick(selectedTab);
        }

        // Only track selection state if it's not controlled externally.
        if (!externalSelectedTab) {
            this.setState({selectedTabId: selectedTab.id});
        }
    };

    render() {
        const {
            className,
            tabs = [],
            onTabClick, // eslint-disable-line no-unused-vars
            initialSelectedTab, // eslint-disable-line no-unused-vars
            selectedTab: externalSelectedTab,
            size,
            expand,
            ...rest
        } = this.props;

        // Allow the consumer to control tab selection.
        const selectedTab = externalSelectedTab || tabs.find(
            tab => tab.id === this.state.selectedTabId
        );

        const {
            content: selectedTabContent,
            id: selectedTabId,
        } = selectedTab;
        return (
            <div className={className} {...rest}>
                <Tabs size={size} expand={expand}>
                    {tabs.map((tab) => {
                        const {
                            id,
                            name,
                            content, // eslint-disable-line no-unused-vars
                            ...tabProps
                        } = tab;
                        const props = {
                            key: id,
                            id,
                            ...tabProps,
                            onClick: () => this.onTabClick(tab),
                            isSelected: tab === selectedTab,
                            'aria-controls': `${this.rootId}`,
                        };

                        // @ts-ignore
                        const Wrapper = (props) => tab.wrapper ? React.cloneElement(tab.wrapper, props) : props.children;
                        return (
                            <Wrapper>
                                <a>
                                    <Tab {...props}>
                                        {name}
                                    </Tab>
                                </a>
                            </Wrapper>
                        );
                    })}
                </Tabs>

                <div
                    role="tabpanel"
                    id={`${this.rootId}`}
                    aria-labelledby={selectedTabId}
                >
                    {selectedTabContent}
                </div>
            </div>
        );
    }
}
