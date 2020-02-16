import {Component, Fragment} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {Button} from "../Button";
import {Popover, PopoverFooter, PopoverTitle} from "../Popover";
import {Selectable} from "../Selectable";

export interface HeaderSpacesMenuItem {
    label: string;
    checked?: "on" | "off";
    prepend?: any;
}

export interface HeaderSpacesMenuInterfaceProps extends PropsInterface {
    isRead?: boolean;
    spaces: HeaderSpacesMenuItem[];
    additionalSpaces: HeaderSpacesMenuItem[];
}

export class HeaderSpacesMenu extends Component<HeaderSpacesMenuInterfaceProps> {
    spaces = this.props.spaces;
    additionalSpaces = this.props.additionalSpaces;
    state = {
        spaces: this.props.spaces,
        selectedSpace: this.props.spaces.filter(option => option.checked)[0],
        isOpen: false,
    };

    constructor(props) {
        super(props);
        this.state = {
            spaces: props.spaces,
            selectedSpace: props.spaces.filter(option => option.checked)[0],
            isOpen: false,
        };
    }

    isListExtended = () => {
        return this.state.spaces.length > 4;
    };

    onMenuButtonClick = () => {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    };

    closePopover = () => {
        this.setState({
            isOpen: false,
        });
    };

    onChange = options => {
        this.setState({
            spaces: options,
            selectedSpace: options.filter(option => option.checked)[0],
            isOpen: false,
        });
    };

    addMoreSpaces = () => {
        this.setState({
            spaces: this.spaces.concat(this.additionalSpaces),
        });
    };

    render() {
        const {selectedSpace, isOpen, spaces} = this.state;
        const button = (
            <Button
                label={selectedSpace.prepend}
                aria-controls="headerSpacesMenuList"
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-label="Apps menu"
                onClick={this.onMenuButtonClick}
            />
        );

        return (
            <Popover
                id="headerSpacesMenu"
                ownFocus
                button={button}
                isOpen={isOpen}
                anchorPosition="downLeft"
                closePopover={this.closePopover}
                panelPaddingSize="none"
            >
                <Selectable
                    searchable={this.isListExtended()}
                    searchProps={{
                        placeholder: 'Find a space',
                        compressed: true,
                    }}
                    options={spaces}
                    singleSelection="always"
                    style={{width: 300}}
                    onChange={this.onChange}
                    listProps={{
                        rowHeight: 40,
                        showIcons: false,
                    }}
                >
                    {(list, search) => (
                        <Fragment>
                            <PopoverTitle>{search || 'Your spaces'}</PopoverTitle>
                            {list}
                            <PopoverFooter>
                                <Button
                                    size={30}
                                    fullWidth
                                    onClick={this.addMoreSpaces}
                                    disabled={this.isListExtended()}
                                    label={"Add more spaces"}
                                />
                            </PopoverFooter>
                        </Fragment>
                    )}
                </Selectable>
            </Popover>
        );
    }
}


