import {Component} from "react";
import * as React from "react";
import {ModuleKanbanPanelTasks, ModuleKanbanPanelTasksInterfacePropsCenter, ModuleKanbanPanelTasksInterfacePropsPanelDirection} from "./ModuleKanbanPanelTasks";
import {Spacer} from "../Spacer";
import {Message} from "../Message";
import {Button, ButtonInterfaceProps} from "../Button";
import {CardCollapse} from "../Card";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {Popover} from "../Popover";
import {ContextMenu, ContextMenuInterfaceProps} from "../ContextMenu";

export interface ModuleKanbanInterfaceProps extends PropsInterface {
    disconnectedRealTime?: {
        show: boolean,
        message: string;
    };
    filtered?: {
        show: boolean,
        message: string;
    },
    buttons?: ButtonInterfaceProps[];
    open: boolean;
    panelLeft: ModuleKanbanPanelTasksInterfacePropsPanelDirection;
    panelRight: ModuleKanbanPanelTasksInterfacePropsPanelDirection;
    panelCenter: ModuleKanbanPanelTasksInterfacePropsCenter;
    icon: string;
    title: string;
    optionsMenu?: ContextMenuInterfaceProps;
    index?: number;
}

export class ModuleKanban extends Component<ModuleKanbanInterfaceProps, {
    open: boolean
    isOpenPopover: boolean
}> {

    public state = {
        open: this.props.open,
        isOpenPopover: false,
    };

    constructor(props) {
        super(props);
    }

    popoverSetting = () => this.setState(e => ({isOpenPopover: !e.isOpenPopover}));

    render() {
        return (
            <CardCollapse
                open={this.state.open}
                onClickOpen={() => this.setState(e => ({open: !e.open}))}
                icon={this.props.icon}
                title={this.props.title}
                options={this.props.optionsMenu && (
                    <Popover
                        position={"right"}
                        isOpen={this.state.isOpenPopover}
                        closePopover={this.popoverSetting}
                        button={<div style={{minWidth: 32}}><i onClick={this.popoverSetting} className={"icon icon-cog-1"} style={{marginRight: 5}}/></div>}
                    >
                        <ContextMenu
                            menu={[]}
                            {...this.props.optionsMenu}
                        />
                    </Popover>
                )}
            >
                {(this.props.disconnectedRealTime && this.props.disconnectedRealTime.show) && (
                    <Message
                        icon={"icon-error"}
                        type={"danger"}
                        separate
                    >
                        {this.props.disconnectedRealTime.message}
                    </Message>
                )}
                {this.props.buttons && this.props.buttons.map((item, index) => (
                    <Button
                        {...item}
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        new
                        padding
                        border
                        color={item.color}
                        style={{marginRight: 10}}
                    />
                ))}
                {(this.props.filtered && this.props.filtered.show) ? (
                    <Message
                        icon={"icon-error"}
                        type={"info"}
                        empty
                    >
                        {this.props.filtered.message}
                    </Message>
                ) : <Spacer/>}
                <ModuleKanbanPanelTasks
                    index={this.props.index}
                    panelCenter={this.props.panelCenter}
                    panelLeft={this.props.panelLeft}
                    panelRight={this.props.panelRight}
                />
            </CardCollapse>
        );
    }
}
