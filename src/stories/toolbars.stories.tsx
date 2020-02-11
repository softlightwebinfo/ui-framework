import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {ToolBar} from "../components/ToolBar";
import {Button} from "../components/Button";

storiesOf("Layout|ToolBar", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <div>
                <ToolBar>
                    <ToolBar.Item>Create account</ToolBar.Item>
                    <ToolBar.Item>Sign in</ToolBar.Item>
                    <ToolBar.Item>Profile</ToolBar.Item>
                </ToolBar>
            </div>
        )
    )
    .add("Buttons",
        () => (
            <div>
                <ToolBar>
                    <ToolBar.Item>Home</ToolBar.Item>
                    <ToolBar.Item>
                        <Button
                            color={"primary"}
                            border
                            new
                            icon={"icon-plus"}
                            label={"Add dashboard"}
                        />
                    </ToolBar.Item>
                </ToolBar>
            </div>
        )
    );
