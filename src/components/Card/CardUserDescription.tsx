import {PureComponent} from "react";
import * as React from "react";
import {Card} from "./Card";
import {CardUserDescriptionInterface} from "../../interfaces/interfaces/CardUserDescriptionInterface";
import {WidgetUserAvatar} from "../Widget";
import {SocialIcons} from "../Social";
import {Text} from "../Text";

export class CardUserDescription extends PureComponent<CardUserDescriptionInterface> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card
                bodyNoPadding={!this.props.card}
                style={this.props.style}
                className={this.props.className}
                fluid={this.props.fluid}
                footer={this.props.footer}
            >
                <WidgetUserAvatar
                    fluid={this.props.fluid}
                    avatar={this.props.avatar}
                    title={this.props.title}
                    subTitle={this.props.subTitle}
                    style={{marginBottom: 24}}
                >
                    <SocialIcons socials={this.props.socials}/>
                </WidgetUserAvatar>
                <Text size={"sm"}>
                    {this.props.description}
                </Text>
            </Card>
        );
    }
}
