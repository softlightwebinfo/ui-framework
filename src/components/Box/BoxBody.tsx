import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {Droppable} from 'react-beautiful-dnd';

export interface BoxBodyInterfaceProps extends PropsInterface {
    panel?: boolean;
    panelVertical?: boolean;
    minHeight?: number;
    show?: boolean;
    droppable?: string;
    onDragOver?: any;
    onDrop?: any;
}

export class BoxBody extends PureComponent<BoxBodyInterfaceProps> {
    static defaultProps = {
        show: true,
    };

    constructor(props) {
        super(props);
    }


    render() {
        if (!this.props.show) return null;
        const classes = classNames("c-box-body", this.props.className, {
            "c-box-body--panel": this.props.panel,
            "c-box-body--panel-vertical": this.props.panelVertical,
        });
        const template = (
            <section
                onDragOver={this.props.onDragOver}
                onDrop={this.props.onDrop}
                style={{
                    minHeight: this.props.minHeight,
                    ...this.props.style,
                }} className={classes}>
                {this.props.children}
            </section>
        );
        if (this.props.droppable) {
            return (
                <Droppable
                    droppableId={this.props.droppable}
                >
                    {(provided, snapshot) => {
                        return (
                            <>
                                {React.cloneElement(template, {
                                    ...provided.droppableProps,
                                    ref: provided.innerRef,
                                    style: {
                                        background: snapshot.isDraggingOver ? "#e2e4ef" : "",
                                    }
                                })}
                                {provided.placeholder}
                            </>
                        )
                    }}
                </Droppable>
            )
        }
        return template;
    }
}
