import React, {Component, Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import '@softlightweb/softlightweb-components/dist/theme_light.css';
import {
  SoftHealth,
  SoftSpacer,
  make_id as makeId,
  SoftFormRow,
  SoftButton,
  SoftCheckboxGroup,
  SoftSwitch,
  SoftRange,
  SoftFilePicker,
  SoftSelect,
  SoftLink,
  SoftText,
  SoftFieldText,
  SoftForm,
  SoftFlexGroup,
  SoftFlexItem,
  SoftFieldSearch,
  SoftTextArea,
  SoftPanel,
  SoftComboBox, SoftDescribedFormGroup, SoftCode, SoftFieldNumber, SoftAvatar, SoftPopover
} from "@softlightweb/softlightweb-components";
import welcomeMd from './markdown/welcomeMd.md';
import {Title} from "./components/story";

storiesOf('Form|Form layouts', module)
.addWithJSX('Default',
  () => {
    class Test extends Component {
      constructor(props) {
        super(props);
        
        const idPrefix = makeId();
        
        this.state = {
          isSwitchChecked: false,
          checkboxes: [
            {
              id: `${idPrefix}0`,
              label: 'Option one',
            },
            {
              id: `${idPrefix}1`,
              label: 'Option two is checked by default',
            },
            {
              id: `${idPrefix}2`,
              label: 'Option three',
            },
          ],
          checkboxIdToSelectedMap: {
            [`${idPrefix}1`]: true,
          },
          radios: [
            {
              id: `${idPrefix}4`,
              label: 'Option one',
            },
            {
              id: `${idPrefix}5`,
              label: 'Option two is selected by default',
            },
            {
              id: `${idPrefix}6`,
              label: 'Option three',
            },
          ],
          radioIdSelected: `${idPrefix}5`,
        };
      }
      
      onSwitchChange = () => {
        this.setState({
          isSwitchChecked: !this.state.isSwitchChecked,
        });
      };
      
      onCheckboxChange = optionId => {
        const newCheckboxIdToSelectedMap = {
          ...this.state.checkboxIdToSelectedMap,
          ...{
            [optionId]: !this.state.checkboxIdToSelectedMap[optionId],
          },
        };
        
        this.setState({
          checkboxIdToSelectedMap: newCheckboxIdToSelectedMap,
        });
      };
      
      onRadioChange = optionId => {
        this.setState({
          radioIdSelected: optionId,
        });
      };
      
      render() {
        return (
          <SoftForm>
            <SoftFormRow label="Text field" helpText="I am some friendly help text.">
              <SoftFieldText name="first"/>
            </SoftFormRow>
            
            <SoftFormRow
              label="Select (with no initial selection)"
              labelAppend={
                <SoftText size="xs">
                  <SoftLink>Link to some help</SoftLink>
                </SoftText>
              }>
              <SoftSelect
                hasNoInitialSelection
                options={[
                  {value: 'option_one', text: 'Option one'},
                  {value: 'option_two', text: 'Option two'},
                  {value: 'option_three', text: 'Option three'},
                ]}
              />
            </SoftFormRow>
            
            <SoftFormRow label="File picker">
              <SoftFilePicker/>
            </SoftFormRow>
            
            <SoftFormRow label="Range">
              <SoftRange min={0} max={100} name="range" id="range"/>
            </SoftFormRow>
            
            <SoftFormRow label="Use a switch instead of a single checkbox">
              <SoftSwitch
                name="switch"
                label="Should we do this?"
                checked={this.state.isSwitchChecked}
                onChange={this.onSwitchChange}
              />
            </SoftFormRow>
            
            <SoftFormRow
              label="Checkbox group labels should use a `legend` label type"
              labelType="legend">
              <SoftCheckboxGroup
                options={this.state.checkboxes}
                idToSelectedMap={this.state.checkboxIdToSelectedMap}
                onChange={this.onCheckboxChange}
              />
            </SoftFormRow>
            
            <SoftButton type="submit" fill>
              Save form
            </SoftButton>
          </SoftForm>
        );
      }
    }
    
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Health - Default"}
          subtitle={`
        Use the SoftFormRow component to easily associate form components with labels, help text, and error text. Use the SoftForm component to group SoftFormRows.
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
.addWithJSX('Full-width',
  () => {
    
    
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Health - Full-width"}
          subtitle={`
       Form elements will automatically flex to a max-width of 400px. You can optionally pass the fullWidth prop to the row and form control to expand to their container. This should be done rarely and usually you will only need it for isolated controls like search bars and sliders.
        `}
        />
        <div>
          <SoftFlexGroup>
            <SoftFlexItem>
              <SoftFieldSearch placeholder="Search..." fullWidth/>
            </SoftFlexItem>
            <SoftFlexItem grow={false}>
              <SoftButton>Search</SoftButton>
            </SoftFlexItem>
          </SoftFlexGroup>
          
          <SoftSpacer size="l"/>
          
          <SoftFormRow
            label="Works on form rows too"
            fullWidth
            helpText="Note that the fullWidth prop is not passed to the form row's child">
            <SoftRange fullWidth min={0} max={100} name="range"/>
          </SoftFormRow>
          
          <SoftFormRow label="Often useful for text areas" fullWidth>
            <SoftTextArea
              fullWidth
              placeholder="There is a reason we do not make forms ALWAYS 100% width.
          See how this text area becomes extremely hard to read when the individual
          lines get this long? It is much more readable when contained to a scannable max-width."
            />
          </SoftFormRow>
        </div>
      </div>
    )
  }, {
    notes: {markdown: welcomeMd}
  }
)
.addWithJSX('Compressed',
  () => {
    
    class Test extends Component {
      constructor(props) {
        super(props);
        
        const idPrefix = makeId();
        
        this.state = {
          isSwitchChecked: false,
          checkboxes: [
            {
              id: `${idPrefix}0`,
              label: 'Option one',
            },
            {
              id: `${idPrefix}1`,
              label: 'Option two is checked by default',
            },
            {
              id: `${idPrefix}2`,
              label: 'Option three',
            },
          ],
          checkboxIdToSelectedMap: {
            [`${idPrefix}1`]: true,
          },
          radios: [
            {
              id: `${idPrefix}4`,
              label: 'Option one',
            },
            {
              id: `${idPrefix}5`,
              label: 'Option two is selected by default',
            },
            {
              id: `${idPrefix}6`,
              label: 'Option three',
            },
          ],
          radioIdSelected: `${idPrefix}5`,
          comboBoxSelectionOptions: [],
        };
      }
      
      onSwitchChange = () => {
        this.setState({
          isSwitchChecked: !this.state.isSwitchChecked,
        });
      };
      
      onCheckboxChange = optionId => {
        const newCheckboxIdToSelectedMap = {
          ...this.state.checkboxIdToSelectedMap,
          ...{
            [optionId]: !this.state.checkboxIdToSelectedMap[optionId],
          },
        };
        
        this.setState({
          checkboxIdToSelectedMap: newCheckboxIdToSelectedMap,
        });
      };
      
      onRadioChange = optionId => {
        this.setState({
          radioIdSelected: optionId,
        });
      };
      
      render() {
        return (
          <SoftPanel style={{maxWidth: 300}}>
            <SoftForm>
              <SoftFormRow
                label="Text field"
                helpText="I am some friendly help text."
                compressed>
                <SoftFieldText name="first" isLoading/>
              </SoftFormRow>
              
              <SoftFormRow label="Select" compressed>
                <SoftSelect
                  options={[
                    {value: 'option_one', text: 'Option one'},
                    {value: 'option_two', text: 'Option two'},
                    {value: 'option_three', text: 'Option three'},
                  ]}
                />
              </SoftFormRow>
              
              <SoftFormRow label="File picker" compressed>
                <SoftFilePicker/>
              </SoftFormRow>
              
              <SoftFormRow label="Combo box" compressed>
                <SoftComboBox
                  options={[
                    {label: 'Option one'},
                    {label: 'Option two'},
                    {label: 'Option three'},
                  ]}
                  selectedOptions={this.state.comboBoxSelectionOptions}
                  onChange={comboBoxSelectionOptions =>
                    this.setState({comboBoxSelectionOptions})
                  }
                />
              </SoftFormRow>
              
              <SoftFormRow label="Range" compressed>
                <SoftRange min={0} max={100} name="range" id="range"/>
              </SoftFormRow>
              
              <SoftFormRow
                label="Use a switch instead of a single checkbox"
                compressed>
                <SoftSwitch
                  label="Should we do this?"
                  name="switch"
                  checked={this.state.isSwitchChecked}
                  onChange={this.onSwitchChange}
                />
              </SoftFormRow>
              
              <SoftFormRow label="Checkboxes" compressed>
                <SoftCheckboxGroup
                  options={this.state.checkboxes}
                  idToSelectedMap={this.state.checkboxIdToSelectedMap}
                  onChange={this.onCheckboxChange}
                />
              </SoftFormRow>
              
              <SoftButton type="submit" size="s" fill>
                Save form
              </SoftButton>
            </SoftForm>
          </SoftPanel>
        );
      }
    }
    
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Health - Compressed"}
          subtitle={`
          If the particular form is in an area with a small amount of real estate, you can add the prop compressed to the SoftFormRows and it will pass down to the form controls.
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
.addWithJSX('Described',
  () => {
    
    class Test extends Component {
      constructor(props) {
        super(props);
        
        const idPrefix = makeId();
        
        this.state = {
          isSwitchChecked: false,
          checkboxes: [
            {
              id: `${idPrefix}0`,
              label: 'Option one',
            },
            {
              id: `${idPrefix}1`,
              label: 'Option two is checked by default',
            },
            {
              id: `${idPrefix}2`,
              label: 'Option three',
            },
          ],
          checkboxIdToSelectedMap: {
            [`${idPrefix}1`]: true,
          },
          radios: [
            {
              id: `${idPrefix}4`,
              label: 'Option one',
            },
            {
              id: `${idPrefix}5`,
              label: 'Option two is selected by default',
            },
            {
              id: `${idPrefix}6`,
              label: 'Option three',
            },
          ],
          radioIdSelected: `${idPrefix}5`,
        };
      }
      
      onSwitchChange = () => {
        this.setState({
          isSwitchChecked: !this.state.isSwitchChecked,
        });
      };
      
      onCheckboxChange = optionId => {
        const newCheckboxIdToSelectedMap = {
          ...this.state.checkboxIdToSelectedMap,
          ...{
            [optionId]: !this.state.checkboxIdToSelectedMap[optionId],
          },
        };
        
        this.setState({
          checkboxIdToSelectedMap: newCheckboxIdToSelectedMap,
        });
      };
      
      onRadioChange = optionId => {
        this.setState({
          radioIdSelected: optionId,
        });
      };
      
      render() {
        return (
          <SoftForm>
            <SoftDescribedFormGroup
              idAria="single-example-aria"
              title={<h3>Single text field</h3>}
              description={
                <Fragment>
                  When using this with a single form row where this text serves as
                  the help text for the input, it is a good idea to pass{' '}
                  <SoftCode>idAria=&quot;someID&quot;</SoftCode> to the form group and
                  pass
                  <SoftCode>describedByIds=&#123;[someID]&#125;</SoftCode> to its form
                  row.
                </Fragment>
              }>
              <SoftFormRow
                label="Text field"
                describedByIds={['single-example-aria']}>
                <SoftFieldText name="first"/>
              </SoftFormRow>
            </SoftDescribedFormGroup>
            
            <SoftDescribedFormGroup
              idAria="no-description"
              title={<h3>No description</h3>}>
              <SoftFormRow label="Text field" describedByIds={['no-description']}>
                <SoftFieldText name="first"/>
              </SoftFormRow>
            </SoftDescribedFormGroup>
            
            <SoftDescribedFormGroup
              title={<strong>Multiple fields</strong>}
              titleSize="m"
              description="Here are three form rows. The first form row does not have a title.">
              <SoftFormRow
                hasEmptyLabelSpace
                helpText={
                  <span>
                We do not pass <SoftCode>describedByIds</SoftCode> when there are
                multiple form rows.
              </span>
                }>
                <SoftSelect
                  hasNoInitialSelection
                  options={[
                    {value: 'option_one', text: 'Option one'},
                    {value: 'option_two', text: 'Option two'},
                    {value: 'option_three', text: 'Option three'},
                  ]}
                />
              </SoftFormRow>
              
              <SoftFormRow label="File picker">
                <SoftFilePicker/>
              </SoftFormRow>
              
              <SoftFormRow label="Range">
                <SoftRange min={0} max={100} name="range" id="range"/>
              </SoftFormRow>
            </SoftDescribedFormGroup>
            
            <SoftDescribedFormGroup
              title={<h2>Full width</h2>}
              titleSize="xxxs"
              description={
                <Fragment>
                  By default, <SoftCode>SoftDescribedFormGroup</SoftCode> will be
                  double the default width of form elements. However, you can pass{' '}
                  <SoftCode>fullWidth</SoftCode> prop to this, the individual field
                  and row components to expand to their container.
                </Fragment>
              }
              fullWidth>
              <SoftFormRow
                label="Use a switch instead of a single checkbox"
                fullWidth>
                <SoftSwitch
                  name="switch"
                  label="Should we do this?"
                  checked={this.state.isSwitchChecked}
                  onChange={this.onSwitchChange}
                />
              </SoftFormRow>
              
              <SoftFormRow fullWidth>
                <SoftFieldText name="second" fullWidth/>
              </SoftFormRow>
            </SoftDescribedFormGroup>
          </SoftForm>
        );
      }
    }
    
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Health - Described form groups"}
          subtitle={`
          Use SoftDescribedFormGroup component to associate multiple SoftFormRows. It can also simply be used with one SoftFormRow as a way to display help text (or additional text) next to the field instead of below (on mobile, will revert to being stacked).
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
.addWithJSX('Inline',
  () => {
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Health - Inline"}
          subtitle={`
          Inline forms can be made with FlexGroup. Applygrow=false on any of the items you want to collapse (like this button). Note that the button FormRow component also requires an additional prop because it’s missing a label.
        `}
        />
        <div>
          <SoftFlexGroup style={{maxWidth: 600}}>
            <SoftFlexItem>
              <SoftFormRow label="First name" helpText="I am helpful help text!">
                <SoftFieldText/>
              </SoftFormRow>
            </SoftFlexItem>
            <SoftFlexItem>
              <SoftFormRow label="Last name">
                <SoftFieldText/>
              </SoftFormRow>
            </SoftFlexItem>
            <SoftFlexItem grow={false}>
              <SoftFormRow hasEmptyLabelSpace>
                <SoftButton>Save</SoftButton>
              </SoftFormRow>
            </SoftFlexItem>
          </SoftFlexGroup>
        </div>
      </div>
    )
  }, {
    notes: {markdown: welcomeMd}
  }
)
.addWithJSX('Sizing inline',
  () => {
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Health - Inline"}
          subtitle={`
          Apply a width to the wrapping FlexItem to size individual controls. When you need to make a field smaller, always apply the width to the FlexItem, not the input. The input inside will resize as needed.

          When supplying children to an SoftFormRow that is not a form control, and you need to the content to vertically center with the other form controls, add the prop displayOnly.
        `}
        />
        <div>
          <SoftFlexGroup style={{ maxWidth: 600 }}>
            <SoftFlexItem grow={false} style={{ width: 100 }}>
              <SoftFormRow label="Age">
                <SoftFieldNumber max={10} placeholder={42} />
              </SoftFormRow>
            </SoftFlexItem>
            <SoftFlexItem>
              <SoftFormRow label="Full name">
                <SoftFieldText icon="user" placeholder="John Doe" />
              </SoftFormRow>
            </SoftFlexItem>
            <SoftFlexItem grow={false}>
              <SoftFormRow label="Avatar" displayOnly>
                <SoftAvatar name="John Doe" size="s" />
              </SoftFormRow>
            </SoftFlexItem>
            <SoftFlexItem grow={false}>
              <SoftFormRow hasEmptyLabelSpace>
                <SoftButton>Save</SoftButton>
              </SoftFormRow>
            </SoftFlexItem>
          </SoftFlexGroup>
        </div>
      </div>
    )
  }, {
    notes: {markdown: welcomeMd}
  }
)
.addWithJSX('In a popover',
  () => {
    class Test extends Component {
      constructor(props) {
        super(props);
      
        this.state = {
          isPopoverOpen: false,
          isSwitchChecked: true,
          isPopover2Open: false,
          isSwitch2Checked: true,
        };
      }
    
      onSwitchChange = () => {
        this.setState({
          isSwitchChecked: !this.state.isSwitchChecked,
        });
      };
    
      onButtonClick = () => {
        this.setState({
          isPopoverOpen: !this.state.isPopoverOpen,
        });
      };
    
      closePopover = () => {
        this.setState({
          isPopoverOpen: false,
        });
      };
    
      onSwitch2Change = () => {
        this.setState({
          isSwitch2Checked: !this.state.isSwitch2Checked,
        });
      };
    
      onButton2Click = () => {
        this.setState({
          isPopover2Open: !this.state.isPopover2Open,
        });
      };
    
      closePopover2 = () => {
        this.setState({
          isPopover2Open: false,
        });
      };
    
      render() {
        const button = (
          <SoftButton
            iconSide="right"
            fill
            iconType="arrowDown"
            onClick={this.onButtonClick}>
            Inline form in a popover
          </SoftButton>
        );
      
        const formSample = (
          <SoftForm>
            <SoftFlexGroup>
              <SoftFlexItem grow={false} style={{ width: 100 }}>
                <SoftFormRow label="Age">
                  <SoftFieldNumber max={10} placeholder={42} />
                </SoftFormRow>
              </SoftFlexItem>
              <SoftFlexItem>
                <SoftFormRow label="Full name">
                  <SoftFieldText icon="user" placeholder="John Doe" />
                </SoftFormRow>
              </SoftFlexItem>
              <SoftFlexItem grow={false}>
                <SoftFormRow hasEmptyLabelSpace>
                  <SoftButton>Save</SoftButton>
                </SoftFormRow>
              </SoftFlexItem>
            </SoftFlexGroup>
          </SoftForm>
        );
      
        const button2 = (
          <SoftButton
            iconSide="right"
            fill
            iconType="arrowDown"
            onClick={this.onButton2Click}>
            Vertical form in a popover
          </SoftButton>
        );
      
        const formSample2 = (
          <SoftForm>
            <SoftFormRow>
              <SoftSwitch
                id={makeId()}
                name="popswitch"
                label="Isn't this popover form cool?"
                checked={this.state.isSwitch2Checked}
                onChange={this.onSwitch2Change}
              />
            </SoftFormRow>
          
            <SoftFormRow label="A text field">
              <SoftFieldText name="popfirst" />
            </SoftFormRow>
          
            <SoftFormRow label="Range" helpText="Some help text for the range">
              <SoftRange min={0} max={100} name="poprange" />
            </SoftFormRow>
            <SoftButton fullWidth>Save</SoftButton>
          </SoftForm>
        );
      
        return (
          <div>
            <SoftPopover
              id="inlineFormPopover"
              ownFocus
              button={button}
              isOpen={this.state.isPopoverOpen}
              closePopover={this.closePopover.bind(this)}>
              <div style={{ width: 500 }}>{formSample}</div>
            </SoftPopover>
            &emsp;
            <SoftPopover
              id="formPopover"
              ownFocus
              button={button2}
              isOpen={this.state.isPopover2Open}
              closePopover={this.closePopover2.bind(this)}>
              <div style={{ width: '300px' }}>{formSample2}</div>
            </SoftPopover>
          </div>
        );
      }
    }
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Health - In a popover"}
          subtitle={`
          Because forms auto-size to their wrapping elements, it means you can do fun things with them like stuff them in popovers and they’ll still work perfectly.
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
