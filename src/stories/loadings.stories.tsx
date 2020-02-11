import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {text, withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {Loading} from "../components/Loading";

storiesOf("Layout|Loadings", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <div>
                <Loading
                    // @ts-ignore
                    size={text("size", "l")}
                />
            </div>
        )
    );
