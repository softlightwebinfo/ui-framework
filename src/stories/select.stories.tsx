import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {Select} from "../components/Select";

storiesOf("Form|Select", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <Select
                    onChange={console.log}
                    options={[
                        {value: "Admin", label: "Admin"},
                        {value: "Super admin", label: "Super Admin"},
                    ]}
                    selected={"Super admin"}
                />
            </div>
        )
    );
