import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Social, SocialInterfaceProps} from "./Social";

export interface SocialIconsInterfaceProps extends PropsInterface {
    socials: SocialInterfaceProps[];
}

export class SocialIcons extends PureComponent<SocialIconsInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-social-icons", this.props.className, {});
        return (
            <ul style={this.props.style} className={classes}>
                {this.props.socials.map((item, index) => (
                    <li key={index}>
                        <Social
                            className={item.className}
                            style={item.style}
                            icon={item.icon}
                        />
                    </li>
                ))}
            </ul>
        )
    }
}
