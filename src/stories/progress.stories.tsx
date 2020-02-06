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
    )
    .add("Title - Subtitle",
        () => (
            <div style={{padding: 20}}>
                <ProgressLabel title={"05"} subTitle={"NEW TICKETS"} label={"Laravel"} value={70} style={{marginBottom: 5}}/>
                <ProgressLabel title={"18"} subTitle={"OPEN TICKETS"} label={"HTML"} value={50} style={{marginBottom: 5}}/>
                <ProgressLabel title={"06"} subTitle={"SOLVED TICKETS"} label={"Photoshop"} value={23}/>
            </div>
        )
    );
