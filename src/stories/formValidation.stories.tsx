import React, {Component, Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import '@softlightweb/softlightweb-components/dist/theme_light.css';
import {
  SoftCheckbox,
  make_id as makeId,
  SoftFieldNumber,
  SoftFieldPassword,
  SoftFieldSearch,
  SoftFieldText,
  SoftFilePicker,
  SoftFlexGroup,
  SoftFlexItem,
  SoftHealth,
  SoftSelect,
  SoftSpacer,
  SoftText,
  SoftTextArea,
  SoftCheckboxGroup,
  SoftTitle,
  SoftRadio,
  SoftRadioGroup, SoftSwitch, SoftFormControlLayout, SoftFormLabel, SoftButtonEmpty, SoftButton, SoftForm, SoftFormRow
} from "@softlightweb/softlightweb-components";
import welcomeMd from './markdown/welcomeMd.md';
import {Title} from "./components/story";

storiesOf('Form|Form Validation', module)
.addWithJSX('Default',
  () => {
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
          <SoftButton fill color="danger" onClick={this.onButtonClick.bind(this)}>
            Toggle errors
          </SoftButton>
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
            <SoftForm isInvalid={this.state.showErrors} error={errors}>
              <SoftFormRow label="Validation only" isInvalid={this.state.showErrors}>
                <SoftFieldText name="first" isInvalid={this.state.showErrors}/>
              </SoftFormRow>
              
              <SoftFormRow
                label="Validation with help text and errors"
                helpText="I am some friendly help text."
                isInvalid={this.state.showErrors}
                error={errors}>
                <SoftFieldText name="text" isInvalid={this.state.showErrors}/>
              </SoftFormRow>
              
              <SoftFormRow label="Text area" isInvalid={this.state.showErrors}>
                <SoftTextArea name="area" isInvalid={this.state.showErrors}/>
              </SoftFormRow>
              
              <SoftFormRow label="Select" isInvalid={this.state.showErrors}>
                <SoftSelect
                  options={[
                    {value: 'option_one', text: 'Option one'},
                    {value: 'option_two', text: 'Option two'},
                    {value: 'option_three', text: 'Option three'},
                  ]}
                  isInvalid={this.state.showErrors}
                />
              </SoftFormRow>
              
              {button}
            </SoftForm>
          </Fragment>
        );
      }
    }
    
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Form Validation - Form controls"}
          subtitle={`
        Validation is achieved by applying isInvalid and optionally error props onto the SoftForm or SoftFormRow components. Errors are optional and are passed as an array in case you need to list many errors.
        `}
        />
        <div>
          <Test/>
        </div>
      </div>
    )
  }, {
    notes: {markdown: welcomeMd}
  }
)
