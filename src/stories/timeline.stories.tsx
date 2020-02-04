import * as React from 'react'
import {storiesOf} from "@storybook/react";
import {boolean, number, text, withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {Row, RowCol} from "../components/Row";
import {Timeline} from "../components/Timeline";
import moment from 'moment';
import {Avatar, AvatarList} from "../components/Avatar";

storiesOf("Layout|Timeline", module)
    .addDecorator(jsxDecorator)
    .addDecorator(withKnobs)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <Row>
                    <RowCol>
                        <Timeline
                            card={boolean("card", true)}
                            fluid={boolean("fluid", true)}
                            timeline={[
                                {
                                    type: "success",
                                    time: moment(),
                                    format: "HH:mm",
                                    title: "Attendance",
                                    subTitle: "Computer class",
                                    description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
                                    component: (
                                        <AvatarList>
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 40)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 40)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 40)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 40)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                        </AvatarList>
                                    )
                                },
                                {
                                    type: "success",
                                    time: moment().add(1, "hour"),
                                    format: "HH:mm",
                                    title: "Attendance",
                                    subTitle: "Computer class",
                                },
                                {
                                    type: "danger",
                                    time: moment().add(2, "hour"),
                                    format: "HH:mm",
                                    title: "Attendance",
                                    subTitle: "Test"
                                },
                            ]}
                        />
                    </RowCol>
                </Row>
            </div>
        )
    );
