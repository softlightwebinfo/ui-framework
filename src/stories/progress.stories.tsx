import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {Progress, ProgressLabel} from "../components/Progress";

storiesOf("Layout|Progress", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <Progress value={70}/>
            </div>
        )
    )
    .add("Label",
        () => (
            <div style={{padding: 20}}>
                <ProgressLabel label={"Laravel"} value={70} style={{marginBottom: 5}}/>
                <ProgressLabel label={"HTML"} value={50} style={{marginBottom: 5}}/>
                <ProgressLabel label={"Photoshop"} value={23}/>
            </div>
        )
    );
