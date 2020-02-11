import {Component, Fragment} from "react";
import * as React from "react";
import {ToolBar} from "../components/ToolBar";
import {Button, ButtonInterfaceProps} from "../components/Button";
import {AvatarUser, AvatarUserInterfaceProps} from "../components/Avatar";
import {Section} from "../components/ContentSection";
import {Message, MessageInterfaceProps} from "../components/Message";
import {Tab, TabInterfaceProps, Tabs} from "../components/Tabs";
import {ModuleKanban, ModuleKanbanInterfaceProps, ModuleKanbanPanelTasksInterfacePropsCenterPanel} from "../components/Modules";
import {Spacer} from "../components/Spacer";
import {Jumbotron, JumbotronInterfaceProps} from "../components/Jumbotron";
import {DragDropContext} from 'react-beautiful-dnd';

// import uuid from 'uuid/v4';

export interface AppKanbanInterfacePropsTabNoContent extends JumbotronInterfaceProps {

}

export interface AppKanbanInterfacePropsTab extends TabInterfaceProps {
    name: string;
    id: string;
    kanban: ModuleKanbanInterfaceProps[];
    noContent: AppKanbanInterfacePropsTabNoContent;
}

export interface AppKanbanInterfacePropsTabs {
    list: AppKanbanInterfacePropsTab[];
    button?: ButtonInterfaceProps;
}

export interface AppKanbanInterfacePropsTabsMessage extends MessageInterfaceProps {
    show: boolean;
}

export interface AppKanbanInterfaceProps {
    tabs: AppKanbanInterfacePropsTabs;
    messageInfo?: AppKanbanInterfacePropsTabsMessage;
    user: AvatarUserInterfaceProps;
    onChangeKanban: (result: ModuleKanbanPanelTasksInterfacePropsCenterPanel[], data: any) => any;
}

export class AppKanban extends Component<AppKanbanInterfaceProps, {
    selectedTabId: string;
}> {
    constructor(props) {
        super(props);
    }

    state = {
        selectedTabId: 'cobalt',
    };

    onSelectedTabChanged = id => {
        this.setState({
            selectedTabId: id,
        });
    };

    renderTabs() {
        return this.props.tabs.list.map((tab, index) => (
            <Tab
                onClick={() => this.onSelectedTabChanged(tab.id)}
                isSelected={tab.id === this.state.selectedTabId}
                disabled={tab.disabled}
                key={index}>
                {tab.name}
            </Tab>
        ));
    }

    get selectedTabs(): AppKanbanInterfacePropsTab | undefined {
        return this.props.tabs.list.find(i => i.id == this.state.selectedTabId);
    }

    onDragEnd = (data) => {
        const result = this.selectedTabs.kanban[0].panelCenter.panels;
        result[data.destination.droppableId].tasks = [result[data.source.droppableId].tasks.find(i => i.id == data.draggableId), ...result[data.destination.droppableId].tasks];
        result[data.source.droppableId].tasks = result[data.source.droppableId].tasks.filter(i => i.id != data.draggableId);
        this.props.onChangeKanban(result, data);
    };

    render() {
        return (
            <DragDropContext
                onDragEnd={this.onDragEnd}
            >
                <div className={"a-kanban"}>
                    <Section>
                        {(this.props.messageInfo && this.props.messageInfo.show) && (
                            <Message
                                icon={this.props.messageInfo.icon}
                                type={this.props.messageInfo.type}
                                separate
                            >
                                {this.props.messageInfo.children}
                            </Message>
                        )}
                        <AvatarUser
                            {...(this.props.user)}
                            name={this.props.user.name}
                            fluid
                            image={this.props.user.image}
                            subTitle={this.props.user.subTitle}
                        />
                    </Section>
                    <ToolBar>
                        <ToolBar.Item>
                            <Tabs display="condensed">{this.renderTabs()}</Tabs>
                        </ToolBar.Item>
                        {this.props.tabs.button && (
                            <ToolBar.Item>
                                <Button
                                    {...this.props.tabs.button}
                                    icon={this.props.tabs.button.icon || "icon-plus"}
                                    label={this.props.tabs.button.label || "Add dashboard"}
                                    new
                                    border
                                    color={this.props.tabs.button.color || "primary"}
                                />
                            </ToolBar.Item>
                        )}
                    </ToolBar>
                    <Section>
                        {(this.selectedTabs && !this.selectedTabs.kanban.length) ? (
                            <Jumbotron
                                {...this.selectedTabs.noContent}
                                children={this.selectedTabs.noContent.children}
                                title={this.selectedTabs.noContent.title}
                                description={this.selectedTabs.noContent.description}
                                subDescription={this.selectedTabs.noContent.subDescription}
                            />
                        ) : this.selectedTabs && this.selectedTabs.kanban.map((item, index) => (
                            <Fragment key={index}>
                                <ModuleKanban
                                    index={index}
                                    optionsMenu={item.optionsMenu}
                                    buttons={item.buttons}
                                    filtered={item.filtered}
                                    disconnectedRealTime={item.disconnectedRealTime}
                                    title={item.title}
                                    icon={item.icon}
                                    panelCenter={item.panelCenter}
                                    panelRight={item.panelRight}
                                    panelLeft={item.panelLeft}
                                    open={item.open}
                                />
                                <Spacer/>
                            </Fragment>
                        ))}
                    </Section>
                </div>
            </DragDropContext>
        );
    }
}
