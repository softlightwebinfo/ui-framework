import * as React from 'react'
import {storiesOf} from "@storybook/react";
import {action} from "@storybook/addon-actions";
import {select, withKnobs, text, boolean} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {Button} from "../components/Button";

storiesOf("Form|Button", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <Button
                    label={text("label", "Default")}
                    // color={select("color", {Red: "red", Dark: "darkred"}, "red")}
                    onClick={action("clicked")}
                />
            </div>
        )
    )
    .add("Colors", () => (
        <div style={{padding: 20}}>
            <Button
                label={text("label", "Colors")}
                // color={select("color", {Red: "red", Dark: "darkred"}, "red")}
                // @ts-ignore
                color={select("color", {Primary: "primary", Secondary: "secondary", Success: "success", Info: "info", Warning: "warning", Danger: "danger"}, "danger")}
                onClick={action("clicked")}
                raised={boolean("raised", false)}
            />
        </div>
    ))
    .add("Raised", () => (
        <div style={{padding: 20}}>
            <Button
                label={text("label", "Raised")}
                // color={select("color", {Red: "red", Dark: "darkred"}, "red")}
                // @ts-ignore
                color={select("color", {Primary: "primary", Secondary: "secondary", Success: "success", Info: "info", Warning: "warning", Danger: "danger"}, "success")}
                onClick={action("clicked")}
                raised={boolean("raised", true)}
            />
        </div>
    ))
    .add("Rounded", () => (
        <div style={{padding: 20}}>
            <Button
                label={text("label", "Rounded")}
                // color={select("color", {Red: "red", Dark: "darkred"}, "red")}
                // @ts-ignore
                color={select("color", {Primary: "primary", Secondary: "secondary", Success: "success", Info: "info", Warning: "warning", Danger: "danger"}, "success")}
                onClick={action("clicked")}
                raised={boolean("raised", false)}
                rounded={boolean("rounded", true)}
            />
        </div>
    ))
    .add("Icon", () => (
        <div style={{padding: 20}}>
            <Button
                label={text("label", "Icon")}
                // color={select("color", {Red: "red", Dark: "darkred"}, "red")}
                // @ts-ignore
                color={select("color", {Primary: "primary", Secondary: "secondary", Success: "success", Info: "info", Warning: "warning", Danger: "danger"}, "success")}
                onClick={action("clicked")}
                raised={boolean("raised", false)}
                rounded={boolean("rounded", false)}
                icon={text("icon", "icon icon-check")}
                // @ts-ignore
                iconPos={text("iconPos", "left")}
            />
        </div>
    ));

