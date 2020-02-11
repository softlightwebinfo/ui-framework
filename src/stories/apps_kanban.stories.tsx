import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {AppKanban} from "../apps";
import {Button} from "../components/Button";
import {ProgressLabel} from "../components/Progress";
import {Fragment} from 'react';
import {Spacer} from "../components/Spacer";
import {ModuleKanbanPanelTasksInterfacePropsCenterPanel} from "../components/Modules";

storiesOf("Apps|Kanban", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => {
            class App extends React.Component {
                constructor(props) {
                    super(props);
                }

                state = {
                    kanban: [
                        {
                            optionsMenu: {
                                menu: [
                                    {icon: "icon icon-user", label: "Profile", onClick: () => console.log("click")},
                                    {icon: "icon icon-cog-4", label: "Settings", onClick: () => console.log("click")},
                                    {icon: "icon icon-mail", label: "Inbox", badge: {label: 6}, onClick: () => console.log("click")},
                                    {icon: "icon icon-chat", label: "Message", onClick: () => console.log("click")},
                                    {separate: true},
                                    {icon: "icon icon-help", label: "Need help?", onClick: () => console.log("click")},
                                    {icon: "icon icon-logout", label: "Sign out", onClick: () => console.log("click")},
                                ]
                            },
                            buttons: [
                                {label: "Back kanban", icon: "icon icon-right-4"},
                                {label: "Show Backlog", icon: "icon icon-list"},
                                {label: "Show logs", icon: "icon icon-eye"},
                            ],
                            filtered: {
                                show: false,
                                message: "Your kanban is filtered, there is no update of cards in real time on WIP."
                            },
                            disconnectedRealTime: {
                                show: false,
                                message: "You are disconnected from real time. Please reload your page."
                            },
                            title: "App my dashboard",
                            icon: "icon-list-1",
                            open: true,
                            panelLeft: {
                                icon: "icon icon-folder",
                                menu: [
                                    {
                                        label: "Backlog", number: 10,
                                        content: (
                                            <>
                                                {[...Array(10)].map((_, index) => (
                                                    <Fragment key={index}>
                                                        <ProgressLabel color={"green"} value={Math.round(Math.random() * (index * 10))} label={"SeeSpaceEx plus"}/>
                                                        <Spacer/>
                                                    </Fragment>
                                                ))}
                                            </>
                                        ),
                                    },
                                    {
                                        label: "Epics", number: 20, content: (
                                            <>
                                                {[...Array(20)].map((_, index) => (
                                                    <Fragment key={index}>
                                                        <ProgressLabel color={"red"} value={Math.round(Math.random() * (index * 10))} label={"SeeSpaceEx plus"}/>
                                                        <Spacer/>
                                                    </Fragment>
                                                ))}
                                            </>
                                        )
                                    }
                                ]
                            },
                            panelRight: {
                                icon: "icon icon-folder",
                                menu: [
                                    {
                                        label: "Archive", number: 0, content: (
                                            <>
                                                {[...Array(10)].map((_, index) => (
                                                    <Fragment key={index}>
                                                        <ProgressLabel color={"green"} value={Math.round(Math.random() * (index * 10))} label={"SeeSpaceEx plus"}/>
                                                        <Spacer/>
                                                    </Fragment>
                                                ))}
                                            </>
                                        ),
                                    },
                                ]
                            },
                            panelCenter: {
                                panels: [
                                    {
                                        tasks: [
                                            {
                                                id: 1,
                                                title: "Create a dashboard panel",
                                                description: "We will create a dashboard panel so that it can be easily published in world musicians",
                                                icon: "icon icon-user",
                                                user: null,
                                                code: "HBEN-1200",
                                                onClickTitle: () => alert("Hola"),
                                                onClickCard: () => alert("adios")
                                            },
                                            {
                                                id: 2,
                                                title: "Create a dashboard panel",
                                                description: "We will create a dashboard panel so that it can be easily published in world musicians",
                                                icon: "icon icon-user",
                                                user: {
                                                    userName: "Rafa gonzalez Muñoz",
                                                    userImage: "",
                                                },
                                                code: "HBEN-1201"
                                            },
                                            {
                                                id: 3,
                                                title: "Create a dashboard panel",
                                                description: "We will create a dashboard panel so that it can be easily published in world musicians",
                                                icon: "icon icon-user",
                                                user: null,
                                                code: "HBEN-1202"
                                            },
                                            {
                                                id: 4,
                                                title: "Create a dashboard panel",
                                                description: "We will create a dashboard panel so that it can be easily published in world musicians",
                                                icon: "icon icon-user",
                                                user: {
                                                    userName: "Carlos Perez",
                                                    userImage: "http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"
                                                },
                                                code: "HBEN-1203"
                                            },
                                            {
                                                id: 5,
                                                title: "Create a dashboard panel",
                                                description: "We will create a dashboard panel so that it can be easily published in world musicians",
                                                icon: "icon icon-user",
                                                user: null,
                                                color: "red",
                                                code: "HBEN-1204"
                                            },
                                            {
                                                id: 6,
                                                title: "Create a dashboard panel",
                                                description: "We will create a dashboard panel so that it can be easily published in world musicians",
                                                icon: "icon icon-user",
                                                user: null,
                                                code: "HBEN-1205"
                                            },
                                            {
                                                id: 7,
                                                title: "Create a dashboard panel",
                                                description: "We will create a dashboard panel so that it can be easily published in world musicians",
                                                icon: "icon icon-user",
                                                user: null,
                                                code: "HBEN-1206"
                                            }
                                        ],
                                        header: {
                                            title: "TODO",
                                            number: 7,
                                        },
                                        body: {}
                                    },
                                    {
                                        tasks: [
                                            {
                                                id: 8,
                                                title: "Create a dashboard panel",
                                                description: "We will create a dashboard panel so that it can be easily published in world musicians",
                                                icon: "icon icon-user",
                                                user: null,
                                                code: "HBEN-1210"
                                            },
                                            {
                                                id: 9,
                                                title: "Create a dashboard panel",
                                                description: "We will create a dashboard panel so that it can be easily published in world musicians",
                                                icon: "icon icon-user",
                                                user: {
                                                    userName: "Carlos Perez",
                                                    userImage: "http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"
                                                },
                                                code: "HBEN-1211"
                                            }
                                        ],
                                        header: {
                                            title: "In progress",
                                            number: 2,
                                        },
                                        body: {}
                                    },
                                    {
                                        tasks: [
                                            {
                                                id: 10,
                                                title: "Create a dashboard panel",
                                                description: "We will create a dashboard panel so that it can be easily published in world musicians",
                                                icon: "icon icon-user",
                                                user: {
                                                    userName: "Carlos Perez",
                                                },
                                                code: "HBEN-1220",
                                                color: "green"
                                            },
                                        ],
                                        header: {
                                            title: "Schedule to release",
                                            number: 0,
                                        },
                                        body: {}
                                    },
                                    {
                                        tasks: [
                                            {
                                                id: 11,
                                                title: "Create a dashboard panel",
                                                description: "We will create a dashboard panel so that it can be easily published in world musicians",
                                                icon: "icon icon-user",
                                                user: {
                                                    userName: "Carlos Perez",
                                                },
                                                code: "HBEN-1230",
                                                color: "black",
                                            },
                                            {
                                                id: 12,
                                                title: "Create a dashboard panel",
                                                description: "We will create a dashboard panel so that it can be easily published in world musicians",
                                                icon: "icon icon-user",
                                                user: {
                                                    userName: "Carlos Perez",
                                                },
                                                code: "HBEN-1231",
                                                color: "red"
                                            },
                                            {
                                                id: 13,
                                                title: "Create a dashboard panel",
                                                description: "We will create a dashboard panel so that it can be easily published in world musicians",
                                                icon: "icon icon-user",
                                                user: {
                                                    userName: "Carlos Perez",
                                                },
                                                code: "HBEN-1232",
                                            },
                                        ],
                                        header: {
                                            title: "Done",
                                            number: 0,
                                        },
                                        body: {}
                                    }
                                ],
                                noContent: {
                                    show: false,
                                    number: 0,
                                    icon: "icon-user",
                                    title: "No hay panel de kanban",
                                    jumbotron: {
                                        subDescription: "It uses utility classes for typography and spacing to space content out within the larger container.",
                                        title: "Hello, world!",
                                        description: "This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.",
                                        children: (
                                            <Button
                                                label={"Learn more"}
                                            />
                                        )
                                    }
                                }
                            }
                        },
                    ],
                };


                render() {
                    return (
                        <AppKanban
                            onChangeKanban={(panel: ModuleKanbanPanelTasksInterfacePropsCenterPanel[], dataTask) => {
                                // @ts-ignore
                                this.state.kanban[0].panelCenter.panels = panel;
                                this.setState({
                                    kanban: this.state.kanban,
                                })
                            }}
                            user={{
                                name: "Rafael Gonzalez Muñoz",
                                image: "http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg",
                                subTitle: "@rGonzalez",
                            }}
                            messageInfo={{
                                show: false,
                                icon: "icon-error",
                                type: "light",
                                children: "The widget has been successfully added"
                            }}
                            tabs={{
                                button: {
                                    onClick: () => alert("hello, did you press the button")
                                },
                                list: [
                                    {
                                        id: 'cobalt',
                                        name: 'My Dashboard',
                                        disabled: false,
                                        noContent: {
                                            children: (
                                                <Button
                                                    label={"Crear nuevo panel kanban"}
                                                />
                                            ),
                                            title: "No hay un panel kanban creado",
                                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                                            subDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                        },
                                        kanban: this.state.kanban,
                                    },
                                    {
                                        id: 'dextrose',
                                        name: 'Dextrose',
                                        disabled: false,
                                        kanban: [],
                                        noContent: {
                                            children: (
                                                <Button
                                                    label={"Crear nuevo panel kanban"}
                                                />
                                            ),
                                            title: "No hay un panel kanban creado",
                                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                                            subDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                        },
                                    },
                                    {
                                        id: 'hydrogen',
                                        name: 'Hydrogen',
                                        disabled: true,
                                        kanban: [],
                                        noContent: {
                                            children: (
                                                <Button
                                                    label={"Crear nuevo panel kanban"}
                                                />
                                            ),
                                            title: "No hay un panel kanban creado",
                                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                                            subDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                        },
                                    },
                                    {
                                        id: 'monosodium_glutammate',
                                        name: 'Monosodium Glutamate',
                                        disabled: false,
                                        kanban: [],
                                        noContent: {
                                            children: (
                                                <Button
                                                    label={"Crear nuevo panel kanban"}
                                                />
                                            ),
                                            title: "No hay un panel kanban creado",
                                            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                                            subDescription: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                        },
                                    },
                                ]
                            }}
                        />
                    )
                }
            }

            return <App/>
        }
    );

