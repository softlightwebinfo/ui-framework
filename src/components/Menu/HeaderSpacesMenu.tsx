import {Component} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface HeaderSpacesMenuInterfaceProps extends PropsInterface {
    isRead?: boolean;
}

class HeaderSpacesMenu extends Component<HeaderSpacesMenuInterfaceProps> {
    spaces = [];
    additionalSpaces = [];
    state = {
        spaces: this.spaces,
        selectedSpace: this.spaces.filter(option => option.checked)[0],
        isOpen: false,
    };

    constructor(props) {
        super(props);

        this.spaces = [
            {
                label: 'Sales team',
                prepend: <SoftAvatar type="space" name="Sales Team" size="s"/>,
                checked: 'on',
            },
            {
                label: 'Engineering',
                prepend: <SoftAvatar type="space" name="Engineering" size="s"/>,
            },
            {
                label: 'Security',
                prepend: <SoftAvatar type="space" name="Security" size="s"/>,
            },
            {
                label: 'Default',
                prepend: <SoftAvatar type="space" name="Default" size="s"/>,
            },
        ];

        this.additionalSpaces = [
            {
                label: 'Sales team 2',
                prepend: <SoftAvatar type="space" name="Sales Team 2" size="s"/>,
            },
            {
                label: 'Engineering 2',
                prepend: <SoftAvatar type="space" name="Engineering 2" size="s"/>,
            },
            {
                label: 'Security 2',
                prepend: <SoftAvatar type="space" name="Security 2" size="s"/>,
            },
            {
                label: 'Default 2',
                prepend: <SoftAvatar type="space" name="Default 2" size="s"/>,
            },
        ];
        this.state = {
            spaces: this.spaces,
            selectedSpace: this.spaces.filter(option => option.checked)[0],
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
            <SoftHeaderSectionItemButton
                aria-controls="headerSpacesMenuList"
                aria-expanded={isOpen}
                aria-haspopup="true"
                aria-label="Apps menu"
                onClick={this.onMenuButtonClick}
            >
                {selectedSpace.prepend}
            </SoftHeaderSectionItemButton>
        );

        return (
            <SoftPopover
                id="headerSpacesMenu"
                ownFocus
                button={button}
                isOpen={isOpen}
                anchorPosition="downLeft"
                closePopover={this.closePopover}
                panelPaddingSize="none"
            >
                <SoftSelectable
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
                            <SoftPopoverTitle>{search || 'Your spaces'}</SoftPopoverTitle>
                            {list}
                            <SoftPopoverFooter>
                                <SoftButton
                                    size="s"
                                    fullWidth
                                    onClick={this.addMoreSpaces}
                                    disabled={this.isListExtended()}
                                >
                                    Add more spaces
                                </SoftButton>
                            </SoftPopoverFooter>
                        </Fragment>
                    )}
                </SoftSelectable>
            </SoftPopover>
        );
    }
}
