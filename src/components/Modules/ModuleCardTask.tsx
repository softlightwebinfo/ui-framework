import React, {PureComponent} from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {CardBlock} from "../Card";
import {Title} from "../Title";
import {Text} from "../Text";
import {Avatar} from "../Avatar";
import {OnClickEventType} from "../../interfaces/types/OnClickEventType";
import {Draggable} from 'react-beautiful-dnd';

export interface ModuleCardTaskInterfaceProps extends PropsInterface {
    card?: boolean;
    fluid?: boolean;
    separate?: boolean;
    title: string;
    code: string;
    description: string;
    icon?: string;
    color?: string;
    user: {
        userName: string;
        userImage?: string;
    } | null;
    onClickCard?: OnClickEventType;
    onClickTitle?: OnClickEventType;
    draggable?: boolean;
    onDragStart?: any;
    id?: any;
    index?: any;
}

export class ModuleCardTask extends PureComponent<ModuleCardTaskInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const template = (
            <CardBlock
                onClickCard={this.props.onClickCard}
                className={"m-card-task"}
                separate={this.props.separate}
                card={this.props.card}
                fluid={this.props.fluid}
                color={this.props.color}
            >
                <Title size={"xs"}>
                    <h3 onClick={this.props.onClickTitle}>{this.props.icon && (<i style={{position: "absolute", left: 3}} className={this.props.icon}/>)} <b style={{color: this.props.color}}>{this.props.code} | </b> {this.props.title}</h3>
                </Title>
                <Text>
                    {this.props.description.length > 200 ? this.props.description.substr(0, 200) + '...' : this.props.description}
                </Text>
                {this.props.user && (
                    <Avatar
                        className={"m-card-task__avatar"}
                        default
                        name={this.props.user && this.props.user.userName}
                        size={50}
                        color={this.props.color}
                        fluid
                        image={this.props.user && this.props.user.userImage}
                    />
                )}
            </CardBlock>
        );
        if (this.props.draggable) {
            return (
                <Draggable draggableId={this.props.id.toString()} index={this.props.index}>
                    {(provided, _) => {
                        return (
                            <>
                                <div
                                    ref={provided.innerRef}
                                    {...provided.draggableProps}
                                    {...provided.dragHandleProps}
                                    style={{
                                        userSelect: "none",
                                        // backgroundColor: snapshot.isDragging ? "#263B4A" : "#456C86",
                                        // color: "white",
                                        ...provided.draggableProps.style,
                                    }}
                                >
                                    {template}
                                </div>
                            </>
                        )
                    }}
                </Draggable>
            )
        }
        return template;
    }
}
