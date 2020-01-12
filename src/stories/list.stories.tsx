import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {List} from "../components/List";
import {ListItem} from "../components/ListItem";
import {ListVariant} from "../interfaces/enum/ListVariant";
import {ListComponent} from "../interfaces/enum/ListComponent";

storiesOf("Layout|List", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <List>
                    <ListItem>First</ListItem>
                    <ListItem>Second</ListItem>
                    <ListItem>Third</ListItem>
                </List>
            </div>
        )
    )
    .add("Inline",
        () => (
            <div style={{padding: 20}}>
                <List variant={ListVariant.INLINE}>
                    <ListItem>First</ListItem>
                    <ListItem>Second</ListItem>
                    <ListItem>Third</ListItem>
                </List>
            </div>
        )
    )
    .add("Ordered",
        () => (
            <div style={{padding: 20}}>
                <List
                    component={ListComponent.OL}
                >
                    <ListItem>First</ListItem>
                    <ListItem>Second</ListItem>
                    <ListItem>Third</ListItem>
                </List>
            </div>
        )
    )
    .add("SubItems Ul",
        () => (
            <div style={{padding: 20}}>
                <List
                >
                    <ListItem>
                        First
                        <List>
                            <ListItem>Second</ListItem>
                            <ListItem>Third</ListItem>
                        </List>
                    </ListItem>
                    <ListItem>Second</ListItem>
                    <ListItem>
                        Third
                        <List>
                            <ListItem>Second</ListItem>
                            <ListItem>
                                Third
                                <List>
                                    <ListItem>First</ListItem>
                                    <ListItem>Second</ListItem>
                                </List>
                            </ListItem>
                        </List>
                    </ListItem>
                </List>
            </div>
        )
    )
    .add("SubItems OL",
        () => (
            <div style={{padding: 20}}>
                <List
                    component={ListComponent.OL}
                >
                    <ListItem>
                        First
                        <List component={ListComponent.OL}>
                            <ListItem>Second</ListItem>
                            <ListItem>Third</ListItem>
                        </List>
                    </ListItem>
                    <ListItem>Second</ListItem>
                    <ListItem>
                        Third
                        <List component={ListComponent.OL}>
                            <ListItem>Second</ListItem>
                            <ListItem>
                                Third
                                <List component={ListComponent.OL}>
                                    <ListItem>First</ListItem>
                                    <ListItem>Second</ListItem>
                                </List>
                            </ListItem>
                        </List>
                    </ListItem>
                </List>
            </div>
        )
    )
    .add("List array",
        () => (
            <div style={{padding: 20}}>
                <List
                    component={ListComponent.OL}
                    list={[
                        {label: "First"},
                        {label: "Second"},
                        {
                            label: "Third", list: [
                                {label: "First"},
                                {label: "Second"},
                                {label: "Third"},
                            ]
                        }, {
                            label: "First",
                            list: [
                                {
                                    label: "First", list: [

                                        {
                                            label: "First", list: [
                                                {label: "First"},
                                                {
                                                    label: "Second", list: [
                                                        {
                                                            label: "First", list: [
                                                                {label: "First"},
                                                                {label: "Second"},
                                                                {label: "Third"},
                                                            ]
                                                        }
                                                    ]
                                                },
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]}
                />
            </div>
        )
    );
