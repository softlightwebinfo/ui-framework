import React, {Component, Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import "../../build/index.css";
import {withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import {Button} from "../components/Button";
import {FieldText, FormExtend, FormRow, SelectExtra, TextArea} from "../components/FormExtend";

storiesOf('Form|Form Validation', module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add('Default', () => {
            class Test extends Component {
                constructor(props) {
                    super(props);

                    this.state = {
                        showErrors: true,
                    };
                }

                onButtonClick() {
                    this.setState({
                        showErrors: !this.state.showErrors,
                    });
                }

                render() {
                    const button = (
                        <Button fill color="danger" onClick={this.onButtonClick.bind(this)} label={"Toggle errors"}/>
                    );

                    let errors;

                    if (this.state.showErrors) {
                        errors = [
                            "Here's an example of an error",
                            'You might have more than one error, so pass an array.',
                        ];
                    }

                    return (
                        <Fragment>
                            <FormExtend isInvalid={this.state.showErrors} error={errors}>
                                <FormRow label="Validation only" isInvalid={this.state.showErrors}>
                                    <FieldText name="first" isInvalid={this.state.showErrors}/>
                                </FormRow>

                                <FormRow
                                    label="Validation with help text and errors"
                                    helpText="I am some friendly help text."
                                    isInvalid={this.state.showErrors}
                                    error={errors}>
                                    <FieldText name="text" isInvalid={this.state.showErrors}/>
                                </FormRow>

                                <FormRow label="Text area" isInvalid={this.state.showErrors}>
                                    <TextArea name="area" isInvalid={this.state.showErrors}/>
                                </FormRow>

                                <FormRow label="Select" isInvalid={this.state.showErrors}>
                                    <SelectExtra
                                        options={[
                                            {value: 'option_one', text: 'Option one'},
                                            {value: 'option_two', text: 'Option two'},
                                            {value: 'option_three', text: 'Option three'},
                                        ]}
                                        isInvalid={this.state.showErrors}
                                    />
                                </FormRow>

                                {button}
                            </FormExtend>
                        </Fragment>
                    );
                }
            }

            return (
                <div style={{margin: 20}}>
                    <div>
                        <Test/>
                    </div>
                </div>
            )
        }, {}
    );
