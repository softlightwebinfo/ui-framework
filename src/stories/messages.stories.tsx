import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {Message} from "../components/Message";

storiesOf("Layout|Message", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <Message
                    icon={"icon-error"}
                    type={"light"}
                    separate
                >
                    The widget has been added successfully
                </Message>
            </div>
        )
    );
