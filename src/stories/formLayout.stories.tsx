import React, {Component, Fragment} from 'react';
import {storiesOf} from '@storybook/react';
import {withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import makeId from "../components/FormExtend/form_row/make_id";
import {CheckboxGroup, DescribedFormGroup, FieldNumber, FieldSearch, FieldText, FilePicker, FormExtend, FormRow, SelectExtra, Switch, TextArea, Range} from "../components/FormExtend";
import {Button} from "../components/Button";
import {FlexGroup, FlexItem} from "../components/Flex";
import {Spacer} from "../components/Spacer";
import {Panel} from "../components/Panel";
import {ComboBox} from "../components/ComboBox";
import {Code} from "../components/Code";
import {Avatar} from "../components/Avatar";
import {Text} from "../components/Text";
import {Popover} from "../components/Popover";
import {Link} from "../components/Link";
import "../../build/index.css";

storiesOf('Form|Form layouts', module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add('Default', () => {
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
                        <FormExtend>
                            <FormRow label="Text field" helpText="I am some friendly help text.">
                                <FieldText name="first"/>
                            </FormRow>

                            <FormRow
                                label="Select (with no initial selection)"
                                labelAppend={
                                    <Text size="s">
                                        <Link>Link to some help</Link>
                                    </Text>
                                }>
                                <SelectExtra
                                    hasNoInitialSelection
                                    options={[
                                        {value: 'option_one', text: 'Option one'},
                                        {value: 'option_two', text: 'Option two'},
                                        {value: 'option_three', text: 'Option three'},
                                    ]}
                                />
                            </FormRow>

                            <FormRow label="File picker">
                                <FilePicker/>
                            </FormRow>

                            <FormRow label="Range">
                                <Range min={0} max={100} name="range" id="range"/>
                            </FormRow>

                            <FormRow label="Use a switch instead of a single checkbox">
                                <Switch
                                    name="switch"
                                    label="Should we do this?"
                                    checked={this.state.isSwitchChecked}
                                    onChange={this.onSwitchChange}
                                />
                            </FormRow>

                            <FormRow
                                label="Checkbox group labels should use a `legend` label type"
                                labelType="legend">
                                <CheckboxGroup
                                    options={this.state.checkboxes}
                                    idToSelectedMap={this.state.checkboxIdToSelectedMap}
                                    onChange={this.onCheckboxChange}
                                />
                            </FormRow>

                            <Button type="submit" label={"Save form"}/>
                        </FormExtend>
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
    .add('Full-width',
        () => {
            return (
                <div style={{margin: 20}}>
                    <div>
                        <FlexGroup>
                            <FlexItem>
                                <FieldSearch placeholder="Search..." fullWidth/>
                            </FlexItem>
                            <FlexItem grow={false}>
                                <Button label={"Search"}/>
                            </FlexItem>
                        </FlexGroup>

                        <Spacer size="l"/>

                        <FormRow
                            label="Works on form rows too"
                            fullWidth
                            helpText="Note that the fullWidth prop is not passed to the form row's child">
                            <Range fullWidth min={0} max={100} name="range"/>
                        </FormRow>

                        <FormRow label="Often useful for text areas" fullWidth>
                            <TextArea
                                fullWidth
                                placeholder="There is a reason we do not make forms ALWAYS 100% width.
          See how this text area becomes extremely hard to read when the individual
          lines get this long? It is much more readable when contained to a scannable max-width."
                            />
                        </FormRow>
                    </div>
                </div>
            )
        }, {}
    )
    .add('Compressed',
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
                        <Panel style={{maxWidth: 300}}>
                            <FormExtend>
                                <FormRow
                                    label="Text field"
                                    helpText="I am some friendly help text."
                                    compressed>
                                    <FieldText name="first" isLoading/>
                                </FormRow>

                                <FormRow label="Select" compressed>
                                    <SelectExtra
                                        options={[
                                            {value: 'option_one', text: 'Option one'},
                                            {value: 'option_two', text: 'Option two'},
                                            {value: 'option_three', text: 'Option three'},
                                        ]}
                                    />
                                </FormRow>

                                <FormRow label="File picker" compressed>
                                    <FilePicker/>
                                </FormRow>

                                <FormRow label="Combo box" compressed>
                                    <ComboBox
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
                                </FormRow>

                                <FormRow label="Range" compressed>
                                    <Range min={0} max={100} name="range" id="range"/>
                                </FormRow>

                                <FormRow
                                    label="Use a switch instead of a single checkbox"
                                    compressed>
                                    <Switch
                                        label="Should we do this?"
                                        name="switch"
                                        checked={this.state.isSwitchChecked}
                                        onChange={this.onSwitchChange}
                                    />
                                </FormRow>

                                <FormRow label="Checkboxes" compressed>
                                    <CheckboxGroup
                                        options={this.state.checkboxes}
                                        idToSelectedMap={this.state.checkboxIdToSelectedMap}
                                        onChange={this.onCheckboxChange}
                                    />
                                </FormRow>

                                <Button
                                    type="submit" size="s"
                                    label={"Save form"}
                                />
                            </FormExtend>
                        </Panel>
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
    .add('Described',
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
                        <FormExtend>
                            <DescribedFormGroup
                                idAria="single-example-aria"
                                title={<h3>Single text field</h3>}
                                description={
                                    <Fragment>
                                        When using this with a single form row where this text serves as
                                        the help text for the input, it is a good idea to pass{' '}
                                        <Code>idAria=&quot;someID&quot;</Code> to the form group and
                                        pass
                                        <Code>describedByIds=&#123;[someID]&#125;</Code> to its form
                                        row.
                                    </Fragment>
                                }>
                                <FormRow
                                    label="Text field"
                                    describedByIds={['single-example-aria']}>
                                    <FieldText name="first"/>
                                </FormRow>
                            </DescribedFormGroup>

                            <DescribedFormGroup
                                idAria="no-description"
                                title={<h3>No description</h3>}>
                                <FormRow label="Text field" describedByIds={['no-description']}>
                                    <FieldText name="first"/>
                                </FormRow>
                            </DescribedFormGroup>

                            <DescribedFormGroup
                                title={<strong>Multiple fields</strong>}
                                titleSize="m"
                                description="Here are three form rows. The first form row does not have a title.">
                                <FormRow
                                    hasEmptyLabelSpace
                                    helpText={
                                        <span>
                                            We do not pass <Code>describedByIds</Code> when there are
                                            multiple form rows.
                                        </span>
                                    }>
                                    <SelectExtra
                                        hasNoInitialSelection
                                        options={[
                                            {value: 'option_one', text: 'Option one'},
                                            {value: 'option_two', text: 'Option two'},
                                            {value: 'option_three', text: 'Option three'},
                                        ]}
                                    />
                                </FormRow>

                                <FormRow label="File picker">
                                    <FilePicker/>
                                </FormRow>

                                <FormRow label="Range">
                                    <Range min={0} max={100} name="range" id="range"/>
                                </FormRow>
                            </DescribedFormGroup>

                            <DescribedFormGroup
                                title={<h2>Full width</h2>}
                                titleSize="xxxs"
                                description={
                                    <Fragment>
                                        By default, <Code>DescribedFormGroup</Code> will be
                                        double the default width of form elements. However, you can pass{' '}
                                        <Code>fullWidth</Code> prop to this, the individual field
                                        and row components to expand to their container.
                                    </Fragment>
                                }
                                fullWidth>
                                <FormRow
                                    label="Use a switch instead of a single checkbox"
                                    fullWidth>
                                    <Switch
                                        name="switch"
                                        label="Should we do this?"
                                        checked={this.state.isSwitchChecked}
                                        onChange={this.onSwitchChange}
                                    />
                                </FormRow>

                                <FormRow fullWidth>
                                    <FieldText name="second" fullWidth/>
                                </FormRow>
                            </DescribedFormGroup>
                        </FormExtend>
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
    .add('Inline',
        () => {
            return (
                <div style={{margin: 20}}>
                    <div>
                        <FlexGroup style={{maxWidth: 600}}>
                            <FlexItem>
                                <FormRow label="First name" helpText="I am helpful help text!">
                                    <FieldText/>
                                </FormRow>
                            </FlexItem>
                            <FlexItem>
                                <FormRow label="Last name">
                                    <FieldText/>
                                </FormRow>
                            </FlexItem>
                            <FlexItem grow={false}>
                                <FormRow hasEmptyLabelSpace>
                                    <Button label={"Save"}/>
                                </FormRow>
                            </FlexItem>
                        </FlexGroup>
                    </div>
                </div>
            )
        }, {}
    )
    .add('Sizing inline',
        () => {
            return (
                <div style={{margin: 20}}>
                    <div>
                        <FlexGroup style={{maxWidth: 600}}>
                            <FlexItem grow={false} style={{width: 100}}>
                                <FormRow label="Age">
                                    <FieldNumber max={10} placeholder={42}/>
                                </FormRow>
                            </FlexItem>
                            <FlexItem>
                                <FormRow label="Full name">
                                    <FieldText icon="user" placeholder="John Doe"/>
                                </FormRow>
                            </FlexItem>
                            <FlexItem grow={false}>
                                <FormRow label="Avatar" displayOnly>
                                    <Avatar name="John Doe" size={30} default/>
                                </FormRow>
                            </FlexItem>
                            <FlexItem grow={false}>
                                <FormRow hasEmptyLabelSpace>
                                    <Button label={"Save"}/>
                                </FormRow>
                            </FlexItem>
                        </FlexGroup>
                    </div>
                </div>
            )
        }, {}
    )
    .add('In a popover',
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
                        <Button
                            iconSide="right"
                            fill
                            iconType="arrowDown"
                            onClick={this.onButtonClick}
                            label={"Inline form in a popover"}
                        />
                    );

                    const formSample = (
                        <FormExtend>
                            <FlexGroup>
                                <FlexItem grow={false} style={{width: 100}}>
                                    <FormRow label="Age">
                                        <FieldNumber max={10} placeholder={42}/>
                                    </FormRow>
                                </FlexItem>
                                <FlexItem>
                                    <FormRow label="Full name">
                                        <FieldText icon="user" placeholder="John Doe"/>
                                    </FormRow>
                                </FlexItem>
                                <FlexItem grow={false}>
                                    <FormRow hasEmptyLabelSpace>
                                        <Button label={"Save"}/>
                                    </FormRow>
                                </FlexItem>
                            </FlexGroup>
                        </FormExtend>
                    );

                    const button2 = (
                        <Button
                            iconSide="right"
                            fill
                            iconType="arrowDown"
                            onClick={this.onButton2Click}
                            label={"Vertical form in a popover"}
                        />
                    );

                    const formSample2 = (
                        <FormExtend>
                            <FormRow>
                                <Switch
                                    id={makeId()}
                                    name="popswitch"
                                    label="Isn't this popover form cool?"
                                    checked={this.state.isSwitch2Checked}
                                    onChange={this.onSwitch2Change}
                                />
                            </FormRow>

                            <FormRow label="A text field">
                                <FieldText name="popfirst"/>
                            </FormRow>

                            <FormRow label="Range" helpText="Some help text for the range">
                                <Range min={0} max={100} name="poprange"/>
                            </FormRow>
                            <Button block label={"Save"}/>
                        </FormExtend>
                    );

                    return (
                        <div>
                            <Popover
                                id="inlineFormPopover"
                                ownFocus
                                button={button}
                                isOpen={this.state.isPopoverOpen}
                                dropDownMenuStyle={{padding: 20}}
                                closePopover={this.closePopover.bind(this)}>
                                <div style={{width: 500}}>{formSample}</div>
                            </Popover>
                            &emsp;
                            <Popover
                                id="formPopover"
                                dropDownMenuStyle={{padding: 20}}
                                ownFocus
                                button={button2}
                                isOpen={this.state.isPopover2Open}
                                closePopover={this.closePopover2.bind(this)}>
                                <div style={{width: '300px'}}>{formSample2}</div>
                            </Popover>
                        </div>
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
