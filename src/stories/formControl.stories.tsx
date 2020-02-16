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
  SoftRadioGroup, SoftSwitch, SoftFormControlLayout, SoftFormLabel, SoftButtonEmpty
} from "@softlightweb/softlightweb-components";
import welcomeMd from './markdown/welcomeMd.md';
import {Title} from "./components/story";

storiesOf('Form|Form controls', module)
.addWithJSX('Search field',
  () => {
    class Test extends Component {
      constructor(props) {
        super(props);
        
        this.state = {
          value: '',
        };
      }
      
      onChange = e => {
        this.setState({
          value: e.target.value,
        });
      };
      
      render() {
        return (
          <Fragment>
            <SoftFieldSearch
              placeholder="Placeholder text"
              value={this.state.value}
              onChange={this.onChange}
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldSearch
              placeholder="Disabled"
              value={this.state.value}
              onChange={this.onChange}
              disabled
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldSearch
              placeholder="Loading"
              value={this.state.value}
              onChange={this.onChange}
              isLoading
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldSearch
              placeholder="Loading and disabled"
              value={this.state.value}
              onChange={this.onChange}
              isLoading
              disabled
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldSearch
              placeholder="Read-only"
              value={this.state.value}
              onChange={this.onChange}
              readOnly
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldSearch
              placeholder="Compressed"
              value={this.state.value}
              onChange={this.onChange}
              compressed
            />
          </Fragment>
        );
      }
    }
    
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Form - Form controls"}
          subtitle={`
        Search field
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
.addWithJSX('Text field',
  () => {
    class Test extends Component {
      constructor(props) {
        super(props);
        
        this.state = {
          value: '',
        };
      }
      
      onChange = e => {
        this.setState({
          value: e.target.value,
        });
      };
      
      render() {
        return (
          <Fragment>
            <SoftFieldText
              placeholder="Placeholder text"
              value={this.state.value}
              onChange={this.onChange}
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldText
              placeholder="Disabled"
              value={this.state.value}
              onChange={this.onChange}
              disabled
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldText
              placeholder="Loading"
              value={this.state.value}
              onChange={this.onChange}
              isLoading
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldText
              placeholder="Loading and disabled"
              value={this.state.value}
              onChange={this.onChange}
              isLoading
              disabled
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldText
              placeholder="Read-only"
              value={this.state.value}
              onChange={this.onChange}
              readOnly
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldText
              placeholder="Compressed"
              value={this.state.value}
              onChange={this.onChange}
              compressed
            />
          </Fragment>
        );
      }
    }
    
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Form - Text field"}
          subtitle={`
          Search field
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
.addWithJSX('Number field',
  () => {
    class Test extends Component {
      constructor(props) {
        super(props);
        
        this.state = {
          value: '',
        };
      }
      
      onChange = e => {
        const sanitizedValue = parseInt(e.target.value, 10);
        this.setState({
          value: isNaN(sanitizedValue) ? '' : sanitizedValue,
        });
      };
      
      render() {
        return (
          <Fragment>
            <SoftFieldNumber
              placeholder="Placeholder text"
              value={this.state.value}
              onChange={this.onChange}
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldNumber
              placeholder="Disabled"
              value={this.state.value}
              onChange={this.onChange}
              disabled
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldNumber
              placeholder="Loading"
              value={this.state.value}
              onChange={this.onChange}
              isLoading
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldNumber
              placeholder="Loading and disabled"
              value={this.state.value}
              onChange={this.onChange}
              disabled
              isLoading
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldNumber
              placeholder="Read-only"
              value={this.state.value}
              onChange={this.onChange}
              readOnly
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldNumber
              placeholder="Compressed"
              value={this.state.value}
              onChange={this.onChange}
              compressed
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldNumber
              style={{textAlign: 'right'}}
              append={
                <SoftText size="xs">
                  <strong>%</strong>
                </SoftText>
              }
              placeholder="0 - 100"
              value={this.state.value}
              onChange={this.onChange}
              aria-label="Use aria labels when no actual label is in use"
            />
          </Fragment>
        );
      }
    }
    
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Form - Number field"}
          subtitle={`
          Search field
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
.addWithJSX('Password field',
  () => {
    class Test extends Component {
      constructor(props) {
        super(props);
        
        this.state = {
          value: '',
        };
      }
      
      onChange = e => {
        this.setState({
          value: e.target.value,
        });
      };
      
      render() {
        return (
          <Fragment>
            <SoftFieldPassword
              placeholder="Placeholder text"
              value={this.state.value}
              onChange={this.onChange}
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldPassword
              placeholder="Disabled"
              value={this.state.value}
              onChange={this.onChange}
              disabled
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldPassword
              placeholder="Loading"
              value={this.state.value}
              onChange={this.onChange}
              isLoading
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldPassword
              placeholder="Loading and disabled"
              value={this.state.value}
              onChange={this.onChange}
              isLoading
              disabled
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldPassword
              placeholder="Compressed"
              value={this.state.value}
              onChange={this.onChange}
              compressed
            />
            
            <SoftSpacer size="m"/>
            
            <SoftFieldPassword
              placeholder="Compressed and loading"
              value={this.state.value}
              onChange={this.onChange}
              isLoading
              compressed
            />
          </Fragment>
        );
      }
    }
    
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Form - Password field"}
          subtitle={`
          Search field
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
).addWithJSX('Textarea',
  () => {
    class Test extends Component {
      constructor(props) {
        super(props);
        
        this.state = {
          value: '',
        };
      }
      
      onChange = e => {
        this.setState({
          value: e.target.value,
        });
      };
      
      render() {
        return (
          <Fragment>
            <SoftTextArea
              placeholder="Placeholder text"
              aria-label="Use aria labels when no actual label is in use"
              value={this.state.value}
              onChange={this.onChange}
            />
            
            <SoftSpacer size="m"/>
            
            <SoftTextArea
              placeholder="Disabled"
              aria-label="Use aria labels when no actual label is in use"
              value={this.state.value}
              onChange={this.onChange}
              disabled
            />
            
            <SoftSpacer size="m"/>
            
            <SoftTextArea
              placeholder="Read-only"
              aria-label="Use aria labels when no actual label is in use"
              value={this.state.value}
              onChange={this.onChange}
              readOnly
            />
            
            <SoftSpacer size="m"/>
            
            <SoftTextArea
              placeholder="compressed has three rows"
              value={this.state.value}
              onChange={this.onChange}
              compressed
            />
          </Fragment>
        );
      }
    }
    
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Form - Textarea"}
          subtitle={`
          Search field
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
.addWithJSX('File Picker',
  () => {
    class Test extends Component {
      constructor(props) {
        super(props);
        this.state = {
          files: {},
        };
      }
      
      onChange = files => {
        this.setState({
          files: files,
        });
      };
      
      renderFiles() {
        if (this.state.files.length > 0) {
          return (
            <ul>
              {Object.keys(this.state.files).map((item, i) => (
                <li key={i}>
                  <strong>{this.state.files[item].name}</strong> (
                  {this.state.files[item].size} bytes)
                </li>
              ))}
            </ul>
          );
        } else {
          return (
            <p>Add some files to see a demo of retrieving from the FileList</p>
          );
        }
      }
      
      render() {
        return (
          <Fragment>
            <SoftFlexGroup>
              <SoftFlexItem>
                <SoftFilePicker
                  id="asdf2"
                  multiple
                  initialPromptText="Select or drag and drop multiple files"
                  onChange={files => {
                    this.onChange(files);
                  }}
                />
              </SoftFlexItem>
              <SoftFlexItem>
                <SoftText>
                  <h3>Files attached</h3>
                  {this.renderFiles()}
                </SoftText>
              </SoftFlexItem>
            </SoftFlexGroup>
            
            <SoftSpacer size="m"/>
            
            <SoftFilePicker disabled initialPromptText="Disabled"/>
            
            <SoftSpacer size="m"/>
            
            <SoftFilePicker
              id="asdf2"
              multiple
              compressed
              initialPromptText="Select some files"
              onChange={files => {
                this.onChange(files);
              }}
            />
          </Fragment>
        );
      }
    }
    
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Form - File Picker"}
          subtitle={`
          SoftFilePicker is a stylized, but generic HTML <input type="file"> tag. It supports drag and drop as well as on click style selection of files. The example below shows how to grab the files using the FileList API. Like other form elements, you can wrap it in a SoftFormRow to apply a label.
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
.addWithJSX('Select',
  () => {
    
    class Test extends Component {
      constructor(props) {
        super(props);
        
        this.options = [
          {value: 'option_one', text: 'Option one'},
          {value: 'option_two', text: 'Option two'},
          {value: 'option_three', text: 'Option three'},
        ];
        
        this.state = {
          value: this.options[1].value,
        };
      }
      
      onChange = e => {
        this.setState({
          value: e.target.value,
        });
      };
      
      render() {
        return (
          <Fragment>
            <SoftSelect
              options={this.options}
              value={this.state.value}
              onChange={this.onChange}
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftSelect
              options={this.options}
              value={this.state.value}
              onChange={this.onChange}
              disabled
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftSelect
              options={this.options}
              value={this.state.value}
              onChange={this.onChange}
              isLoading
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftSelect
              options={this.options}
              value={this.state.value}
              onChange={this.onChange}
              isLoading
              disabled
              aria-label="Use aria labels when no actual label is in use"
            />
            
            <SoftSpacer size="m"/>
            
            <SoftSelect
              options={this.options}
              value={this.state.value}
              onChange={this.onChange}
              compressed
            />
          </Fragment>
        );
      }
    }
    
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Form - Select"}
          subtitle={`
          This component renders a basic HTML <select> element. If you need more customization for how the options and/or selected values render, use the SoftSuperSelect. Another option is to use the SoftComboBox, which has search and multi-select capabilities, but also has restrictions on how items are rendered.
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
.addWithJSX('Checkbox',
  () => {
    
    class Test extends Component {
      constructor(props) {
        super(props);
        
        this.state = {
          checked: false,
          indeterminate: true,
        };
      }
      
      onChange = e => {
        this.setState({
          checked: e.target.checked,
        });
      };
      
      onChangeIndeterminate = () => {
        this.setState({
          indeterminate: !this.state.indeterminate,
        });
      };
      
      render() {
        return (
          <Fragment>
            <SoftCheckbox
              id={makeId()}
              label="I am a checkbox"
              checked={this.state.checked}
              onChange={this.onChange}
            />
            
            <SoftSpacer size="m"/>
            
            <SoftCheckbox
              id={makeId()}
              label="I am an indeterminate checkbox"
              indeterminate={this.state.indeterminate}
              onChange={this.onChangeIndeterminate}
            />
            
            <SoftSpacer size="m"/>
            
            <SoftCheckbox
              id={makeId()}
              label="I am a disabled checkbox"
              checked={this.state.checked}
              onChange={this.onChange}
              disabled
            />
            
            <SoftSpacer size="m"/>
            
            <SoftCheckbox
              id={makeId()}
              label="I am a compressed checkbox"
              checked={this.state.checked}
              onChange={this.onChange}
              compressed
            />
          </Fragment>
        );
      }
    }
    
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Form - Checkbox"}
          subtitle={`
          This component renders a basic HTML <select> element. If you need more customization for how the options and/or selected values render, use the SoftSuperSelect. Another option is to use the SoftComboBox, which has search and multi-select capabilities, but also has restrictions on how items are rendered.
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
.addWithJSX('Checkbox group',
  () => {
    
    class Test extends Component {
      constructor(props) {
        super(props);
        
        const idPrefix = makeId();
        
        this.checkboxes = [
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
        ];
        
        this.state = {
          checkboxIdToSelectedMap: {
            [`${idPrefix}1`]: true,
          },
        };
      }
      
      onChange = optionId => {
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
      
      render() {
        return (
          <Fragment>
            <SoftCheckboxGroup
              options={this.checkboxes}
              idToSelectedMap={this.state.checkboxIdToSelectedMap}
              onChange={this.onChange}
            />
            
            <SoftSpacer size="m"/>
            
            <SoftTitle size="xxs">
              <h3>Disabled</h3>
            </SoftTitle>
            
            <SoftSpacer size="s"/>
            
            <SoftCheckboxGroup
              options={this.checkboxes}
              idToSelectedMap={this.state.checkboxIdToSelectedMap}
              onChange={this.onChange}
              disabled
            />
            
            <SoftSpacer size="m"/>
            
            <SoftTitle size="xxs">
              <h3>Compressed</h3>
            </SoftTitle>
            
            <SoftSpacer size="s"/>
            
            <SoftCheckboxGroup
              options={this.checkboxes}
              idToSelectedMap={this.state.checkboxIdToSelectedMap}
              onChange={this.onChange}
              compressed
            />
          </Fragment>
        );
      }
    }
    
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Form - Checkbox group"}
          subtitle={`
          This component renders a basic HTML <select> element. If you need more customization for how the options and/or selected values render, use the SoftSuperSelect. Another option is to use the SoftComboBox, which has search and multi-select capabilities, but also has restrictions on how items are rendered.
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
.addWithJSX('Radio',
  () => {
    
    class Test extends Component {
      constructor(props) {
        super(props);
        
        this.state = {
          checked: false,
        };
      }
      
      onChange = e => {
        this.setState({
          checked: e.target.checked,
        });
      };
      
      render() {
        return (
          <Fragment>
            <SoftRadio
              id={makeId()}
              label="I am a radio"
              checked={this.state.checked}
              onChange={this.onChange}
            />
            
            <SoftSpacer size="m"/>
            
            <SoftRadio
              id={makeId()}
              label="I am a disabled radio"
              checked={this.state.checked}
              onChange={this.onChange}
              disabled
            />
            
            <SoftSpacer size="m"/>
            
            <SoftRadio
              id={makeId()}
              label="I am a compressed radio"
              checked={this.state.checked}
              onChange={this.onChange}
              compressed
            />
          </Fragment>
        );
      }
    }
    
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Form - Radio"}
          subtitle={`
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
).addWithJSX('Radio group',
  () => {
    
    class Test extends Component {
      constructor(props) {
        super(props);
        
        const idPrefix = makeId();
        
        this.radios = [
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
            disabled: true,
          },
        ];
        
        this.state = {
          radioIdSelected: `${idPrefix}1`,
        };
      }
      
      onChange = optionId => {
        this.setState({
          radioIdSelected: optionId,
        });
      };
      
      render() {
        return (
          <Fragment>
            <SoftRadioGroup
              options={this.radios}
              idSelected={this.state.radioIdSelected}
              onChange={this.onChange}
            />
            
            <SoftSpacer size="m"/>
            
            <SoftTitle size="xxs">
              <h3>Disabled</h3>
            </SoftTitle>
            
            <SoftSpacer size="s"/>
            
            <SoftRadioGroup
              options={this.radios}
              idSelected={this.state.radioIdSelected}
              onChange={this.onChange}
              disabled
            />
            
            <SoftSpacer size="m"/>
            
            <SoftTitle size="xxs">
              <h3>Compressed</h3>
            </SoftTitle>
            
            <SoftSpacer size="s"/>
            
            <SoftRadioGroup
              options={this.radios}
              idSelected={this.state.radioIdSelected}
              onChange={this.onChange}
              compressed
            />
          </Fragment>
        );
      }
    }
    
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Form - Radio group"}
          subtitle={`
          
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
.addWithJSX('Switch',
  () => {
    class Test extends Component {
      constructor(props) {
        super(props);
        
        this.state = {
          checked: false,
        };
      }
      
      onChange = e => {
        this.setState({
          checked: e.target.checked,
        });
      };
      
      render() {
        return (
          <Fragment>
            <SoftSwitch
              label="I am a switch"
              checked={this.state.checked}
              onChange={this.onChange}
            />
            
            <SoftSpacer size="m"/>
            
            <SoftSwitch
              label="I am a disabled switch"
              checked={this.state.checked}
              onChange={this.onChange}
              disabled
            />
          </Fragment>
        );
      }
    }
    
    
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Form - Switch"}
          subtitle={`
          
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
.addWithJSX('Form control layout',
  () => {
    return (
      <div style={{margin: 20}}>
        <Title
          title={"Form - Form control layout"}
          subtitle={`
          
        `}
        />
        <div>
          <SoftFormControlLayout icon="search">
            <input type="text" className="softFieldText"/>
          </SoftFormControlLayout>
          
          <SoftSpacer size="m"/>
          
          <SoftFormControlLayout isLoading>
            <input type="text" className="softFieldText"/>
          </SoftFormControlLayout>
          
          <SoftSpacer size="m"/>
          
          <SoftFormControlLayout clear={{
            onClick: () => {
            }
          }}>
            <input type="text" className="softFieldText"/>
          </SoftFormControlLayout>
          
          <SoftSpacer size="m"/>
          
          <SoftFormControlLayout isLoading clear={{
            onClick: () => {
            }
          }}>
            <input type="text" className="softFieldText"/>
          </SoftFormControlLayout>
          
          <SoftSpacer size="m"/>
          
          <SoftFormControlLayout isLoading icon="search">
            <input type="text" className="softFieldText"/>
          </SoftFormControlLayout>
          
          <SoftSpacer size="m"/>
          
          <SoftFormControlLayout isLoading icon={{type: 'arrowDown', side: 'right'}}>
            <input type="text" className="softFieldText"/>
          </SoftFormControlLayout>
          
          <SoftSpacer size="m"/>
          
          <SoftFormControlLayout clear={{
            onClick: () => {
            }
          }} icon="search">
            <input type="text" className="softFieldText"/>
          </SoftFormControlLayout>
          
          <SoftSpacer size="m"/>
          
          <SoftFormControlLayout
            clear={{
              onClick: () => {
              }
            }}
            icon={{type: 'arrowDown', side: 'right'}}>
            <input type="text" className="softFieldText"/>
          </SoftFormControlLayout>
          
          <SoftSpacer size="m"/>
          
          <SoftFormControlLayout isLoading clear={{
            onClick: () => {
            }
          }} icon="search">
            <input type="text" className="softFieldText"/>
          </SoftFormControlLayout>
          
          <SoftSpacer size="m"/>
          
          <SoftFormControlLayout
            isLoading
            clear={{
              onClick: () => {
              }
            }}
            icon={{type: 'arrowDown', side: 'right'}}>
            <input type="text" className="softFieldText"/>
          </SoftFormControlLayout>
          
          <SoftSpacer size="m"/>
          
          <SoftFormControlLayout isLoading clear={{
            onClick: () => {
            }
          }} icon="search">
            <input type="text" className="softFieldText"/>
          </SoftFormControlLayout>
          
          <SoftSpacer size="m"/>
          
          <SoftFormControlLayout
            prepend={<SoftFormLabel htmlFor="textField19">Label</SoftFormLabel>}>
            <input
              type="text"
              className="softFieldText softFieldText--inGroup"
              id="textField19"
            />
          </SoftFormControlLayout>
          
          <SoftSpacer size="m"/>
          
          <SoftFormControlLayout
            append={
              <SoftText size="xs">
                <strong>%</strong>
              </SoftText>
            }>
            <input type="number" className="softFieldNumber softFieldNumber--inGroup"/>
          </SoftFormControlLayout>
          
          <SoftSpacer size="m"/>
          
          <SoftFormControlLayout
            isLoading
            clear={{
              onClick: () => {
              }
            }}
            prepend={
              <SoftButtonEmpty size="xs" iconType="arrowDown" iconSide="right">
                Button
              </SoftButtonEmpty>
            }>
            <input type="text" className="softFieldText softFieldText--inGroup"/>
          </SoftFormControlLayout>
        </div>
      </div>
    )
  }, {
    notes: {markdown: welcomeMd}
  }
)
