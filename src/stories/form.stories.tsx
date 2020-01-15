import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {text, withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {FormGroup} from "../components/FormGroup";
import {Input} from "../components/Input";
import {Form} from "../components/Form";

storiesOf("Form|Form", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <Form>
                    <FormGroup>
                        <Input
                            placeholder={text("placeholder", "Placeholder")}
                            // @ts-ignore
                            type={text("type", "text")}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Input
                            placeholder={text("placeholder", "Placeholder")}
                            // @ts-ignore
                            type={text("type", "text")}
                        />
                    </FormGroup>
                </Form>
            </div>
        )
    );
