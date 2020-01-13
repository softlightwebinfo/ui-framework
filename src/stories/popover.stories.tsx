import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {PopoverExample} from "../examples/PopoverExample";
import {PopoverExampleIcon} from "../examples/PopoverExampleIcon";

storiesOf("Layout|Popover", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <PopoverExample/>
            </div>
        )
    )
    .add("Icon",
        () => (
            <div style={{padding: 20}}>
                <PopoverExampleIcon/>
            </div>
        )
    );
