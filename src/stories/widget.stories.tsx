import * as React from 'react'
import {storiesOf} from "@storybook/react";
import {boolean, text, withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {Ribbon} from "../components/Ribbon";

storiesOf("Layout|Ribbon", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <Ribbon fluid={boolean("fluid", false)} number={5} title={text("title", "users")} icon={text("icon", "icon icon-user")} style={{width: 300, marginBottom: 15}}/>
                <Ribbon fluid={boolean("fluid", false)} title={text("title", "users")} icon={text("icon", "icon icon-user")} style={{width: 300, marginBottom: 15}}/>
                <Ribbon fluid={boolean("fluid", false)} number={20} title={text("title", "users")} icon={text("icon", "icon icon-user")} style={{width: 300}}/>
            </div>
        )
    );
