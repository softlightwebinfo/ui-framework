import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {boolean, withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {Badge} from "../components/Badge";

storiesOf("Layout|Badge", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <Badge isRead={boolean("isRead", true)}>7</Badge>
                <Badge>1000</Badge>
            </div>
        )
    );
