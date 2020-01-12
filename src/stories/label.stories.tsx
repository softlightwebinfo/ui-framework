import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {boolean, withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {Label} from "../components/Label";

storiesOf("Layout|Label", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <Label isCompact={boolean("isCompact", true)}>Default</Label>
                <Label style={{marginLeft: 10}}>Default</Label>
            </div>
        )
    );
