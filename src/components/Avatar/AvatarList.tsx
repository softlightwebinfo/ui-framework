import React, {Component, ReactElement} from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {List} from "../List";
import {ListVariant} from "../../interfaces/enum/ListVariant";
import {ListItem} from "../ListItem";

export interface AvatarListInterfaceProps extends PropsInterface {

}

export class AvatarList extends Component<AvatarListInterfaceProps, {
    showAll: boolean;
}> {
    private max: any = 4;

    constructor(props) {
        super(props);
    }

    public state = {
        showAll: false,
    };

    get count() {
        return React.Children.count(this.props.children);
    }

    onClick = () => {
        this.setState(e => ({
            showAll: !e.showAll,
        }));
    };

    render() {
        const classes = classNames("c-avatar-list", this.props.className, {});
        return (
            <div className={classes}>
                <List variant={ListVariant.INLINE}>
                    {React.Children.toArray(this.props.children).slice(0, this.state.showAll ? this.count : this.max).map((item: ReactElement, index) => {
                        return (
                            <ListItem key={index}>
                                {React.cloneElement(item, {})}
                            </ListItem>
                        )
                    })}
                </List>
                <span onClick={this.onClick}>{this.state.showAll ? "hide" : this.count > 4 ? `${this.count - this.max}+` : null}</span>
            </div>
        )
    }
}
