import {PureComponent, ReactElement} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {OutsideClickDetector} from "../OutsideClickDetector";
import {cascadingMenuKeyCodes} from "../../interfaces/const/key_codes";
import {DropdownMenu} from "../Dropdown";
import {PositionType} from "../../interfaces/types/PositionType";


export interface PopoverInterfaceProps extends PropsInterface {
    isOpen: boolean;
    closePopover: () => void;
    button?: ReactElement;
    children?: ReactElement;
    hasArrow?: boolean;
    position?: PositionType;
}

export class Popover extends PureComponent<PopoverInterfaceProps> {
    static defaultProps = {
        isOpen: false,
        ownFocus: false,
        anchorPosition: 'downCenter',
        panelPaddingSize: 'm',
        hasArrow: true,
    };


    constructor(props) {
        super(props);
    }

    onKeyDown = e => {
        if (e.keyCode === cascadingMenuKeyCodes.ESCAPE) {
            e.preventDefault();
            e.stopPropagation();
            this.props.closePopover();
        }
    };

    render() {
        const classes = classNames("c-popover", {
            "c-popover--left": this.props.position === "left",
            "c-popover--right": this.props.position === "right",
        });
        let panel;
        if (this.props.isOpen) {
            panel = (
                <DropdownMenu position={this.props.position}>
                    {this.props.children}
                </DropdownMenu>
            )
        }
        return (
            <OutsideClickDetector
                isDisabled={!this.props.isOpen}
                onOutsideClick={this.props.closePopover}
            >
                <div className={classes} onKeyDown={this.onKeyDown}>
                    {
                        // @ts-ignore
                        React.cloneElement(this.props.button, {
                            className: "c-popover__button"
                        })}
                    {panel}
                </div>
            </OutsideClickDetector>
        );
    }
}
