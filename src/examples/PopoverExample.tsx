import {Component} from "react";
import {Popover} from "../components/Popover";
import {Button} from "../components/Button";
import React from "react";
import {ContextMenu} from "../components/ContextMenu";

export class PopoverExample extends Component<{}, { show: boolean; }> {
    constructor(props) {
        super(props);
    }

    public state = {
        show: false,
    };

    render() {
        return (
            <Popover
                isOpen={this.state.show}
                closePopover={() => this.setState(e => ({show: !e.show}))}
                button={<Button onClick={_ => this.setState(e => ({show: !e.show}))} label={"Button popover"}/>}
            >
                <ContextMenu
                    menu={[
                        {icon: "icon icon-user", label: "Profile", onClick: () => console.log("click")},
                        {icon: "icon icon-cog-4", label: "Settings", onClick: () => console.log("click")},
                        {icon: "icon icon-mail", label: "Inbox", badge: {label: 6}, onClick: () => console.log("click")},
                        {icon: "icon icon-chat", label: "Message", onClick: () => console.log("click")},
                        {separate: true},
                        {icon: "icon icon-help", label: "Need help?", onClick: () => console.log("click")},
                        {icon: "icon icon-logout", label: "Sign out", onClick: () => console.log("click")},
                    ]}
                />
            </Popover>
        );
    }
}
