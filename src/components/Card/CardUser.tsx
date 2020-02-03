import {PureComponent} from "react";
import * as React from "react";
import {Card} from "./Card";
import {CardUserInterface} from "../../interfaces/interfaces/CardUserInterface";
import {WidgetUser} from "../Widget/WidgetUser";
import {Button} from "../Button";
import {WidgetListHorizontal} from "../Widget";
import {Separator} from "../Separator";

export class CardUser extends PureComponent<CardUserInterface> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card
                style={this.props.style}
                className={this.props.className}
                fluid={this.props.fluid}
                bodyNoPadding
                footer={
                    <>
                        <Separator/>
                        <WidgetListHorizontal style={{padding: 20}} list={this.props.list}/>
                    </>
                }
            >
                <WidgetUser
                    style={{padding: 20, paddingBottom: 0}}
                    title={this.props.title}
                    subTitle={this.props.subTitle}
                    avatar={this.props.avatar}
                    card={this.props.card}
                    fluid={this.props.fluid}
                    footer={this.props.footer || (
                        <>
                            {this.props.onClickEdit && <Button onClick={this.props.onClickEdit} icon={"icon icon-edit"}/>}
                            {this.props.onClickTrash && (<Button onClick={this.props.onClickTrash} style={{marginLeft: 10}} icon={"icon icon-trash"}/>)}
                        </>
                    )}
                />
            </Card>
        );
    }
}
