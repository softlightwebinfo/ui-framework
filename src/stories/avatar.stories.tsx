import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {boolean, text, withKnobs, number} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {Avatar, AvatarList} from "../components/Avatar";

storiesOf("Layout|Avatar", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <Avatar
                    name={text("name", "Rafael gonzalez muñoz")}
                    fluid={boolean("fluid", false)}
                />
                <Avatar
                    name={text("name", "Rafael gonzalez muñoz")}
                    fluid={boolean("fluid", false)}
                />
                <Avatar
                    name={text("name", "Rafael gonzalez muñoz")}
                    fluid={boolean("fluid", false)}
                    image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                />
                <Avatar
                    name={text("name", "Rafael gonzalez muñoz")}
                    fluid={boolean("fluid", false)}
                    size={number("size", 80)}
                    image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                />
            </div>
        )
    )
    .add("List",
        () => (
            <div style={{padding: 20}}>
                <AvatarList>
                    <Avatar
                        name={text("name", "Rafael gonzalez muñoz")}
                        fluid={boolean("fluid", false)}
                    />
                    <Avatar
                        name={text("name", "Rafael gonzalez muñoz")}
                        fluid={boolean("fluid", false)}
                    />
                    <Avatar
                        name={text("name", "Rafael gonzalez muñoz")}
                        fluid={boolean("fluid", false)}
                        image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                    />
                    <Avatar
                        name={text("name", "Rafael gonzalez muñoz")}
                        fluid={boolean("fluid", false)}
                        image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                    />
                    <Avatar
                        name={text("name", "Rafael gonzalez muñoz")}
                        fluid={boolean("fluid", false)}
                    />
                    <Avatar
                        name={text("name", "Rafael gonzalez muñoz")}
                        fluid={boolean("fluid", false)}
                    />
                    <Avatar
                        name={text("name", "Rafael gonzalez muñoz")}
                        fluid={boolean("fluid", false)}
                        image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                    />
                    <Avatar
                        name={text("name", "Rafael gonzalez muñoz")}
                        fluid={boolean("fluid", false)}
                        image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                    />
                </AvatarList>
            </div>
        )
    );
