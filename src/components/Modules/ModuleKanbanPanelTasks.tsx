import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Box, BoxInterfaceProps, BoxOption} from "../Box";
import {ModuleCardTask, ModuleCardTaskInterfaceProps} from "./ModuleCardTask";
import {Jumbotron, JumbotronInterfaceProps} from "../Jumbotron";

export interface ModuleKanbanPanelTasksInterfacePropsPanel {
    label: string;
    number: number;
    content?: any;
}

export interface ModuleKanbanPanelTasksInterfacePropsCenterPanel extends BoxInterfaceProps {
    tasks: ModuleCardTaskInterfaceProps[];
}

export interface ModuleKanbanPanelTasksInterfacePropsCenterNoContent {
    show: boolean;
    icon: string;
    title: string;
    number: number;
    jumbotron: JumbotronInterfaceProps;
}

export interface ModuleKanbanPanelTasksInterfacePropsCenter {
    noContent: ModuleKanbanPanelTasksInterfacePropsCenterNoContent;
    panels: ModuleKanbanPanelTasksInterfacePropsCenterPanel[];
}

export interface ModuleKanbanPanelTasksInterfacePropsPanelDirection {
    icon: string;
    menu: ModuleKanbanPanelTasksInterfacePropsPanel[];
}

export type ModuleKanbanPanelTasksInterfacePropsOnChangeKanban = (panel: ModuleKanbanPanelTasksInterfacePropsCenterPanel[], dataTask: { task: number, index: number }, indexNew: number, indexKanban?: number) => void;

export interface ModuleKanbanPanelTasksInterfaceProps extends PropsInterface {
    panelLeft: ModuleKanbanPanelTasksInterfacePropsPanelDirection;
    panelRight: ModuleKanbanPanelTasksInterfacePropsPanelDirection;
    panelCenter: ModuleKanbanPanelTasksInterfacePropsCenter;
    onChangeKanban?: ModuleKanbanPanelTasksInterfacePropsOnChangeKanban;
    index?: number;
}


interface ModuleKanbanPanelTasksItemOption extends ModuleKanbanPanelTasksInterfacePropsPanel {
    content: any;
}

export class ModuleKanbanPanelTasks extends PureComponent<ModuleKanbanPanelTasksInterfaceProps, {
    showBody: number[];
    itemOption: ModuleKanbanPanelTasksItemOption | null;
    itemOptionRight: ModuleKanbanPanelTasksItemOption | null;
}> {
    constructor(props) {
        super(props);
    }

    public state: {
        showBody: number[];
        itemOption: ModuleKanbanPanelTasksItemOption | null;
        itemOptionRight: ModuleKanbanPanelTasksItemOption | null;
    } = {
        showBody: [],
        itemOption: null,
        itemOptionRight: null,
    };
    private height: number = 800;

    onClickIcon = (_, index: number) => {
        if (this.state.showBody.includes(index)) {
            this.setState(e => ({
                showBody: e.showBody.filter(i => i != index)
            }));
        } else {
            this.setState(e => ({
                showBody: [
                    ...e.showBody,
                    index,
                ]
            }));
        }
    };

    onCLickOption = (item) => this.setState(e => ({
        itemOption: item == e.itemOption ? null : item,
    }));

    onCLickOptionRight = (item) => this.setState(e => ({
        itemOptionRight: item == e.itemOptionRight ? null : item,
    }));

    render() {
        const classes = classNames("m-kanban-panel-tasks", this.props.className);
        return (
            <div className={classes}>
                <Box
                    body={{
                        panelVertical: true,
                        minHeight: this.height,
                    }}
                    header={{
                        icon: this.props.panelLeft.icon,
                    }}
                >
                    {this.props.panelLeft.menu.map((item, index) => (
                        <BoxOption
                            onClick={() => this.onCLickOption(item)}
                            key={index}
                            number={item.number}
                        >
                            {item.label}
                        </BoxOption>
                    ))}
                </Box>
                {this.state.itemOption && (
                    <Box
                        style={{
                            width: 200,
                            border: 0,
                        }}
                        body={{
                            minHeight: this.height,
                            panel: true,
                            style: {
                                backgroundColor: "white",
                                borderLeft: 0
                            }
                        }}
                        header={{
                            icon: this.props.panelLeft.icon,
                            title: this.state.itemOption.label,
                            number: this.state.itemOption.number,
                            style: {
                                borderLeft: 0
                            }
                        }}
                    >
                        {this.state.itemOption.content}
                    </Box>
                )}
                <div className={"m-kanban-panel-tasks__content"}>
                    {this.props.panelCenter.noContent.show ? (
                        <Box
                            dragable
                            header={{
                                icon: this.props.panelCenter.noContent.icon,
                                title: this.props.panelCenter.noContent.title,
                                number: this.props.panelCenter.noContent.number,
                            }}
                            body={{
                                panel: true,
                            }}
                        >
                            <Jumbotron
                                children={this.props.panelCenter.noContent.jumbotron.children}
                                title={this.props.panelCenter.noContent.jumbotron.title}
                                description={this.props.panelCenter.noContent.jumbotron.description}
                                subDescription={this.props.panelCenter.noContent.jumbotron.subDescription}
                            />
                        </Box>
                    ) : this.props.panelCenter.panels.slice(0, 4).map((item, index) => (
                        <Box
                            key={index}
                            body={{
                                panel: true,
                                show: !this.state.showBody.includes(index),
                                minHeight: this.height,
                                droppable: index.toString(),
                            }}
                            header={{
                                ...item.header,
                                onClickIcon: () => this.onClickIcon(item, index),
                            }}
                        >
                            {item.tasks.map((task, _index) => (
                                <ModuleCardTask
                                    draggable
                                    index={_index}
                                    key={_index}
                                    {...task}
                                    separate
                                    fluid
                                    id={task.id}
                                    color={task.color}
                                    user={task.user}
                                    icon={task.icon}
                                    title={task.title}
                                    code={task.code}
                                    description={task.description}
                                />
                            ))}
                        </Box>
                    ))}
                </div>
                {this.state.itemOptionRight && (
                    <Box
                        style={{
                            width: 200,
                            border: 0,
                        }}
                        body={{
                            minHeight: this.height,
                            panel: true,
                            style: {
                                backgroundColor: "white",
                                borderRight: 0
                            }
                        }}
                        header={{
                            icon: this.props.panelRight.icon,
                            title: this.state.itemOptionRight.label,
                            number: this.state.itemOptionRight.number,
                            style: {
                                borderRight: 0
                            }
                        }}
                    >
                        {this.state.itemOptionRight.content}
                    </Box>
                )}
                <Box
                    body={{
                        panelVertical: true,
                        minHeight: this.height,
                    }}
                    header={{
                        icon: this.props.panelRight.icon,
                    }}
                >
                    {this.props.panelRight.menu.map((item, index) => (
                        <BoxOption
                            onClick={() => this.onCLickOptionRight(item)}
                            key={index}
                            number={item.number}
                        >
                            {item.label}
                        </BoxOption>
                    ))}
                </Box>
            </div>
        );
    }
}
