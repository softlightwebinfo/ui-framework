import React, {Component, Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import {Spacer} from "../components/Spacer";
import {Text} from "../components/Text";
import {Checkbox, CheckboxGroup, FieldPassword, FieldText, FilePicker, FormControlLayout, FormLabel, Radio, RadioGroup, SelectExtra, Switch, TextArea} from "../components/FormExtend";
import {FieldNumber} from "../components/FormExtend";
import {FieldSearch} from "../components/FormExtend";
import {FlexGroup, FlexItem} from "../components/Flex";
import makeId from "../components/FormExtend/form_row/make_id";
import {Title} from "../components/Title";
import {Button} from "../components/Button";
import "../../build/index.css";

storiesOf('Form|Form controls', module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add('Search field',
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
                            <FieldSearch
                                placeholder="Placeholder text"
                                value={this.state.value}
                                onChange={this.onChange}
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldSearch
                                placeholder="Disabled"
                                value={this.state.value}
                                onChange={this.onChange}
                                disabled
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldSearch
                                placeholder="Loading"
                                value={this.state.value}
                                onChange={this.onChange}
                                isLoading
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldSearch
                                placeholder="Loading and disabled"
                                value={this.state.value}
                                onChange={this.onChange}
                                isLoading
                                disabled
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldSearch
                                placeholder="Read-only"
                                value={this.state.value}
                                onChange={this.onChange}
                                readOnly
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldSearch
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
                    <div>
                        <Test/>
                    </div>
                </div>
            )
        }, {}
    )
    .add('Text field',
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
                            <FieldText
                                placeholder="Placeholder text"
                                value={this.state.value}
                                onChange={this.onChange}
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldText
                                placeholder="Disabled"
                                value={this.state.value}
                                onChange={this.onChange}
                                disabled
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldText
                                placeholder="Loading"
                                value={this.state.value}
                                onChange={this.onChange}
                                isLoading
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldText
                                placeholder="Loading and disabled"
                                value={this.state.value}
                                onChange={this.onChange}
                                isLoading
                                disabled
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldText
                                placeholder="Read-only"
                                value={this.state.value}
                                onChange={this.onChange}
                                readOnly
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldText
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
                    <div>
                        <Test/>
                    </div>
                </div>
            )
        }, {}
    )
    .add('Number field',
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
                            <FieldNumber
                                placeholder="Placeholder text"
                                value={this.state.value}
                                onChange={this.onChange}
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldNumber
                                placeholder="Disabled"
                                value={this.state.value}
                                onChange={this.onChange}
                                disabled
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldNumber
                                placeholder="Loading"
                                value={this.state.value}
                                onChange={this.onChange}
                                isLoading
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldNumber
                                placeholder="Loading and disabled"
                                value={this.state.value}
                                onChange={this.onChange}
                                disabled
                                isLoading
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldNumber
                                placeholder="Read-only"
                                value={this.state.value}
                                onChange={this.onChange}
                                readOnly
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldNumber
                                placeholder="Compressed"
                                value={this.state.value}
                                onChange={this.onChange}
                                compressed
                            />

                            <Spacer size="m"/>

                            <FieldNumber
                                style={{textAlign: 'right'}}
                                append={
                                    <Text size="s">
                                        <strong>%</strong>
                                    </Text>
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
                    <div>
                        <Test/>
                    </div>
                </div>
            )
        }, {}
    )
    .add('Password field',
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
                            <FieldPassword
                                placeholder="Placeholder text"
                                value={this.state.value}
                                onChange={this.onChange}
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldPassword
                                placeholder="Disabled"
                                value={this.state.value}
                                onChange={this.onChange}
                                disabled
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldPassword
                                placeholder="Loading"
                                value={this.state.value}
                                onChange={this.onChange}
                                isLoading
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldPassword
                                placeholder="Loading and disabled"
                                value={this.state.value}
                                onChange={this.onChange}
                                isLoading
                                disabled
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <FieldPassword
                                placeholder="Compressed"
                                value={this.state.value}
                                onChange={this.onChange}
                                compressed
                            />

                            <Spacer size="m"/>

                            <FieldPassword
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
                    <div>
                        <Test/>
                    </div>
                </div>
            )
        }, {}
    )
    .add('Textarea', () => {
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
                            <TextArea
                                placeholder="Placeholder text"
                                aria-label="Use aria labels when no actual label is in use"
                                value={this.state.value}
                                onChange={this.onChange}
                            />

                            <Spacer size="m"/>

                            <TextArea
                                placeholder="Disabled"
                                aria-label="Use aria labels when no actual label is in use"
                                value={this.state.value}
                                onChange={this.onChange}
                                disabled
                            />

                            <Spacer size="m"/>

                            <TextArea
                                placeholder="Read-only"
                                aria-label="Use aria labels when no actual label is in use"
                                value={this.state.value}
                                onChange={this.onChange}
                                readOnly
                            />

                            <Spacer size="m"/>

                            <TextArea
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
                    <div>
                        <Test/>
                    </div>
                </div>
            )
        }, {}
    )
    .add('File Picker',
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
                            <FlexGroup>
                                <FlexItem>
                                    <FilePicker
                                        id="asdf2"
                                        multiple
                                        initialPromptText="Select or drag and drop multiple files"
                                        onChange={files => {
                                            this.onChange(files);
                                        }}
                                    />
                                </FlexItem>
                                <FlexItem>
                                    <Text>
                                        <h3>Files attached</h3>
                                        {this.renderFiles()}
                                    </Text>
                                </FlexItem>
                            </FlexGroup>

                            <Spacer size="m"/>

                            <FilePicker disabled initialPromptText="Disabled"/>

                            <Spacer size="m"/>

                            <FilePicker
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
                    <div>
                        <Test/>
                    </div>
                </div>
            )
        }, {}
    )
    .add('Select',
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
                            <SelectExtra
                                options={this.options}
                                value={this.state.value}
                                onChange={this.onChange}
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <SelectExtra
                                options={this.options}
                                value={this.state.value}
                                onChange={this.onChange}
                                disabled
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <SelectExtra
                                options={this.options}
                                value={this.state.value}
                                onChange={this.onChange}
                                isLoading
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <SelectExtra
                                options={this.options}
                                value={this.state.value}
                                onChange={this.onChange}
                                isLoading
                                disabled
                                aria-label="Use aria labels when no actual label is in use"
                            />

                            <Spacer size="m"/>

                            <SelectExtra
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
                    <div>
                        <Test/>
                    </div>
                </div>
            )
        }, {}
    )
    .add('Checkbox',
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
                            <Checkbox
                                id={makeId()}
                                label="I am a checkbox"
                                checked={this.state.checked}
                                onChange={this.onChange}
                            />

                            <Spacer size="m"/>

                            <Checkbox
                                id={makeId()}
                                label="I am an indeterminate checkbox"
                                indeterminate={this.state.indeterminate}
                                onChange={this.onChangeIndeterminate}
                            />

                            <Spacer size="m"/>

                            <Checkbox
                                id={makeId()}
                                label="I am a disabled checkbox"
                                checked={this.state.checked}
                                onChange={this.onChange}
                                disabled
                            />

                            <Spacer size="m"/>

                            <Checkbox
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
                    <div>
                        <Test/>
                    </div>
                </div>
            )
        }, {}
    )
    .add('Checkbox group',
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
                            <CheckboxGroup
                                options={this.checkboxes}
                                idToSelectedMap={this.state.checkboxIdToSelectedMap}
                                onChange={this.onChange}
                            />

                            <Spacer size="m"/>

                            <Title size="xxs">
                                <h3>Disabled</h3>
                            </Title>

                            <Spacer size="s"/>

                            <CheckboxGroup
                                options={this.checkboxes}
                                idToSelectedMap={this.state.checkboxIdToSelectedMap}
                                onChange={this.onChange}
                                disabled
                            />

                            <Spacer size="m"/>

                            <Title size="xxs">
                                <h3>Compressed</h3>
                            </Title>

                            <Spacer size="s"/>

                            <CheckboxGroup
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
                    <div>
                        <Test/>
                    </div>
                </div>
            )
        }, {}
    )
    .add('Radio',
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
                            <Radio
                                id={makeId()}
                                label="I am a radio"
                                checked={this.state.checked}
                                onChange={this.onChange}
                            />

                            <Spacer size="m"/>

                            <Radio
                                id={makeId()}
                                label="I am a disabled radio"
                                checked={this.state.checked}
                                onChange={this.onChange}
                                disabled
                            />

                            <Spacer size="m"/>

                            <Radio
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
                    <div>
                        <Test/>
                    </div>
                </div>
            )
        }, {}
    )
    .add('Radio group', () => {

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
                            <RadioGroup
                                options={this.radios}
                                idSelected={this.state.radioIdSelected}
                                onChange={this.onChange}
                            />

                            <Spacer size="m"/>

                            <Title size="xxs">
                                <h3>Disabled</h3>
                            </Title>

                            <Spacer size="s"/>

                            <RadioGroup
                                options={this.radios}
                                idSelected={this.state.radioIdSelected}
                                onChange={this.onChange}
                                disabled
                            />

                            <Spacer size="m"/>

                            <Title size="xxs">
                                <h3>Compressed</h3>
                            </Title>

                            <Spacer size="s"/>

                            <RadioGroup
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
                    <div>
                        <Test/>
                    </div>
                </div>
            )
        }, {}
    )
    .add('Switch',
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
                            <Switch
                                label="I am a switch"
                                checked={this.state.checked}
                                onChange={this.onChange}
                            />

                            <Spacer size="m"/>

                            <Switch
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
                    <div>
                        <Test/>
                    </div>
                </div>
            )
        }, {}
    )
    .add('Form control layout',
        () => {
            return (
                <div style={{margin: 20}}>
                    <div>
                        <FormControlLayout icon="search">
                            <input type="text" className="c-field-text"/>
                        </FormControlLayout>

                        <Spacer size="m"/>

                        <FormControlLayout isLoading>
                            <input type="text" className="c-field-text"/>
                        </FormControlLayout>

                        <Spacer size="m"/>

                        <FormControlLayout clear={{
                            onClick: () => {
                            }
                        }}>
                            <input type="text" className="c-field-text"/>
                        </FormControlLayout>

                        <Spacer size="m"/>

                        <FormControlLayout isLoading clear={{
                            onClick: () => {
                            }
                        }}>
                            <input type="text" className="c-field-text"/>
                        </FormControlLayout>

                        <Spacer size="m"/>

                        <FormControlLayout isLoading icon="search">
                            <input type="text" className="c-field-text"/>
                        </FormControlLayout>

                        <Spacer size="m"/>

                        <FormControlLayout isLoading icon={{type: 'arrowDown', side: 'right'}}>
                            <input type="text" className="c-field-text"/>
                        </FormControlLayout>

                        <Spacer size="m"/>

                        <FormControlLayout clear={{
                            onClick: () => {
                            }
                        }} icon="search">
                            <input type="text" className="c-field-text"/>
                        </FormControlLayout>

                        <Spacer size="m"/>

                        <FormControlLayout
                            clear={{
                                onClick: () => {
                                }
                            }}
                            icon={{type: 'arrowDown', side: 'right'}}>
                            <input type="text" className="c-field-text"/>
                        </FormControlLayout>

                        <Spacer size="m"/>

                        <FormControlLayout isLoading clear={{
                            onClick: () => {
                            }
                        }} icon="search">
                            <input type="text" className="c-field-text"/>
                        </FormControlLayout>

                        <Spacer size="m"/>

                        <FormControlLayout
                            isLoading
                            clear={{
                                onClick: () => {
                                }
                            }}
                            icon={{type: 'arrowDown', side: 'right'}}>
                            <input type="text" className="c-field-text"/>
                        </FormControlLayout>

                        <Spacer size="m"/>

                        <FormControlLayout isLoading clear={{
                            onClick: () => {
                            }
                        }} icon="search">
                            <input type="text" className="c-field-text"/>
                        </FormControlLayout>

                        <Spacer size="m"/>

                        <FormControlLayout
                            prepend={<FormLabel htmlFor="textField19">Label</FormLabel>}>
                            <input
                                type="text"
                                className="c-field-text c-field-text--inGroup"
                                id="textField19"
                            />
                        </FormControlLayout>

                        <Spacer size="m"/>

                        <FormControlLayout
                            append={
                                <Text size="s">
                                    <strong>%</strong>
                                </Text>
                            }>
                            <input type="number" className="c-field-number c-field-number--inGroup"/>
                        </FormControlLayout>

                        <Spacer size="m"/>

                        <FormControlLayout
                            isLoading
                            clear={{
                                onClick: () => {
                                }
                            }}
                            prepend={
                                <Button empty size="xs" iconType="arrowDown" iconSide="right" label={"Button"}/>
                            }>
                            <input type="text" className="c-field-text c-field-text--inGroup"/>
                        </FormControlLayout>
                    </div>
                </div>
            )
        }, {}
    );
