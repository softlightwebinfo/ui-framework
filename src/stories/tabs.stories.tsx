import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {Component, Fragment} from "react";
import {Tab, TabbedContent, Tabs} from "../components/Tabs";
import {Spacer} from "../components/Spacer";
import {Title} from "../components/Title";
import {Text} from "../components/Text";
import {Button} from "../components/Button";

storiesOf("Layout|Tabs", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => {
            class SoftTabsExample extends Component {
                private tabs: ({ name: string; disabled: boolean; id: string })[];

                constructor(props) {
                    super(props);

                    this.tabs = [
                        {
                            id: 'cobalt',
                            name: 'Cobalt',
                            disabled: false,
                        },
                        {
                            id: 'dextrose',
                            name: 'Dextrose',
                            disabled: false,
                        },
                        {
                            id: 'hydrogen',
                            name: 'Hydrogen',
                            disabled: true,
                        },
                        {
                            id: 'monosodium_glutammate',
                            name: 'Monosodium Glutamate',
                            disabled: false,
                        },
                    ];

                    this.state = {
                        selectedTabId: 'cobalt',
                    };
                }

                state = {
                    selectedTabId: 'cobalt',
                };

                onSelectedTabChanged = id => {
                    this.setState({
                        selectedTabId: id,
                    });
                };

                renderTabs() {
                    return this.tabs.map((tab, index) => (
                        <Tab
                            onClick={() => this.onSelectedTabChanged(tab.id)}
                            isSelected={tab.id === this.state.selectedTabId}
                            disabled={tab.disabled}
                            key={index}>
                            {tab.name}
                        </Tab>
                    ));
                }

                render() {
                    return (
                        <Fragment>
                            <Tabs>{this.renderTabs()}</Tabs>

                            <Spacer/>

                            <Tabs size="s">{this.renderTabs()}</Tabs>
                        </Fragment>
                    );
                }
            }

            return (
                <div style={{margin: 20}}>
                    <div>
                        <SoftTabsExample/>
                    </div>
                </div>
            )
        }
    )
    .add('Condensed',
        () => {
            class SoftTabsExample extends Component {
                private tabs: ({ name: string; disabled: boolean; id: string })[];

                constructor(props) {
                    super(props);

                    this.tabs = [
                        {
                            id: 'cobalt',
                            name: 'Cobalt',
                            disabled: false,
                        },
                        {
                            id: 'dextrose',
                            name: 'Dextrose',
                            disabled: false,
                        },
                        {
                            id: 'hydrogen',
                            name: 'Hydrogen',
                            disabled: true,
                        },
                        {
                            id: 'monosodium_glutammate',
                            name: 'Monosodium Glutamate',
                            disabled: false,
                        },
                    ];

                    this.state = {
                        selectedTabId: 'cobalt',
                    };
                }

                public state = {
                    selectedTabId: 'cobalt',
                };

                onSelectedTabChanged = id => {
                    this.setState({
                        selectedTabId: id,
                    });
                };

                renderTabs() {
                    return this.tabs.map((tab, index) => (
                        <Tab
                            onClick={() => this.onSelectedTabChanged(tab.id)}
                            isSelected={tab.id === this.state.selectedTabId}
                            disabled={tab.disabled}
                            key={index}>
                            {tab.name}
                        </Tab>
                    ));
                }

                render() {
                    return <Tabs display="condensed">{this.renderTabs()}</Tabs>;
                }
            }

            return (
                <div style={{margin: 20}}>
                    <div>
                        <SoftTabsExample/>
                    </div>
                </div>
            )
        }, {}
    )
    .add('Tabbed content',
        () => {
            class SoftTabsExample extends Component {
                private tabs: any;

                constructor(props) {
                    super(props);

                    this.tabs = [
                        {
                            id: 'cobalt',
                            name: 'Cobalt',
                            content: (
                                <Fragment>
                                    <Spacer/>
                                    <Title>
                                        <h3>Cobalt</h3>
                                    </Title>
                                    <Text>
                                        Cobalt is a chemical element with symbol Co and atomic number 27.
                                        Like nickel, cobalt is found in the Earth&rsquo;s crust only in
                                        chemically combined form, save for small deposits found in alloys
                                        of natural meteoric iron. The free element, produced by reductive
                                        smelting, is a hard, lustrous, silver-gray metal.
                                    </Text>
                                </Fragment>
                            ),
                        },
                        {
                            id: 'dextrose',
                            name: 'Dextrose',
                            content: (
                                <Fragment>
                                    <Spacer/>
                                    <Title>
                                        <h3>Dextrose</h3>
                                    </Title>
                                    <Text>
                                        Intravenous sugar solution, also known as dextrose solution, is a
                                        mixture of dextrose (glucose) and water. It is used to treat low
                                        blood sugar or water loss without electrolyte loss.
                                    </Text>
                                </Fragment>
                            ),
                        },
                        {
                            id: 'hydrogen',
                            name: 'Hydrogen',
                            content: (
                                <Fragment>
                                    <Spacer/>
                                    <Title>
                                        <h3>Hydrogen</h3>
                                    </Title>
                                    <Text>
                                        Hydrogen is a chemical element with symbol H and atomic number 1.
                                        With a standard atomic weight of 1.008, hydrogen is the lightest
                                        element on the periodic table
                                    </Text>
                                </Fragment>
                            ),
                        },
                        {
                            id: 'monosodium_glutammate',
                            name: 'Monosodium Glutamate',
                            content: (
                                <Fragment>
                                    <Spacer/>
                                    <Title>
                                        <h3>Monosodium Glutamate</h3>
                                    </Title>
                                    <Text>
                                        Monosodium glutamate (MSG, also known as sodium glutamate) is the
                                        sodium salt of glutamic acid, one of the most abundant naturally
                                        occurring non-essential amino acids. Monosodium glutamate is found
                                        naturally in tomatoes, cheese and other foods.
                                    </Text>
                                </Fragment>
                            ),
                        },
                    ];
                }

                render() {
                    return (
                        <TabbedContent
                            tabs={this.tabs}
                            initialSelectedTab={this.tabs[1]}
                            onTabClick={tab => {
                                console.log('clicked tab', tab);
                            }}
                        />
                    );
                }
            }


            return (
                <div style={{margin: 20}}>
                    <div>
                        <SoftTabsExample/>
                    </div>
                </div>
            )
        }, {}
    )
    .add('Controlled tabbed',
        () => {
            class SoftTabsExample extends Component {
                tabs = [
                    {
                        id: 'cobalt',
                        name: 'Cobalt',
                        content: (
                            <Fragment>
                                <Spacer/>
                                <Title>
                                    <h3>Cobalt</h3>
                                </Title>
                                <Text>
                                    Cobalt is a chemical element with symbol Co and atomic number 27.
                                    Like nickel, cobalt is found in the Earth&rsquo;s crust only in
                                    chemically combined form, save for small deposits found in alloys
                                    of natural meteoric iron. The free element, produced by reductive
                                    smelting, is a hard, lustrous, silver-gray metal.
                                </Text>
                            </Fragment>
                        ),
                    },
                    {
                        id: 'dextrose',
                        name: 'Dextrose',
                        content: (
                            <Fragment>
                                <Spacer/>
                                <Title>
                                    <h3>Dextrose</h3>
                                </Title>
                                <Text>
                                    Intravenous sugar solution, also known as dextrose solution, is a
                                    mixture of dextrose (glucose) and water. It is used to treat low
                                    blood sugar or water loss without electrolyte loss.
                                </Text>
                            </Fragment>
                        ),
                    },
                    {
                        id: 'hydrogen',
                        name: 'Hydrogen',
                        content: (
                            <Fragment>
                                <Spacer/>
                                <Title>
                                    <h3>Hydrogen</h3>
                                </Title>
                                <Text>
                                    Hydrogen is a chemical element with symbol H and atomic number 1.
                                    With a standard atomic weight of 1.008, hydrogen is the lightest
                                    element on the periodic table
                                </Text>
                            </Fragment>
                        ),
                    },
                    {
                        id: 'monosodium_glutammate',
                        name: 'Monosodium Glutamate',
                        content: (
                            <Fragment>
                                <Spacer/>
                                <Title>
                                    <h3>Monosodium Glutamate</h3>
                                </Title>
                                <Text>
                                    Monosodium glutamate (MSG, also known as sodium glutamate) is the
                                    sodium salt of glutamic acid, one of the most abundant naturally
                                    occurring non-essential amino acids. Monosodium glutamate is found
                                    naturally in tomatoes, cheese and other foods.
                                </Text>
                            </Fragment>
                        ),
                    },
                ];

                constructor(props) {
                    super(props);
                }

                state = {
                    selectedTab: this.tabs[1],
                };

                onTabClick = selectedTab => {
                    this.setState({selectedTab});
                };

                cycleTab = () => {
                    const selectedTabIndex = this.tabs.indexOf(this.state.selectedTab);
                    const nextTabIndex =
                        selectedTabIndex < this.tabs.length - 1 ? selectedTabIndex + 1 : 0;
                    this.setState({
                        selectedTab: this.tabs[nextTabIndex],
                    });
                };

                render() {
                    return (
                        <Fragment>
                            <Button
                                iconType="arrowRight"
                                iconSide="right"
                                onClick={this.cycleTab}
                                label={"Cycle through the tabs"}
                            />

                            <Spacer size="m"/>

                            <TabbedContent
                                tabs={this.tabs}
                                selectedTab={this.state.selectedTab}
                                onTabClick={this.onTabClick}
                            />
                        </Fragment>
                    );
                }
            }


            return (
                <div style={{margin: 20}}>
                    <div>
                        <SoftTabsExample/>
                    </div>
                </div>
            )
        }, {}
    );

