import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {Card} from "../Card";
import {TitleSubtitleInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";
import {ListSeparator} from "../List";
import {WidgetCardTable, WidgetCardTableInterfaceProps} from "../Widget";


export interface ModuleCardTableInterfaceProps extends PropsInterface, TitleSubtitleInterface {
    fluid?: boolean;
    card?: boolean;
    list: WidgetCardTableInterfaceProps[];
}

export class ModuleCardTable extends PureComponent<ModuleCardTableInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const template = (
            <>
                <ListSeparator
                    list={this.props.list}
                    data={(item: WidgetCardTableInterfaceProps, index) => (
                        <WidgetCardTable
                            key={index}
                            {...item}
                            icon={item.icon}
                            leftTop={item.leftTop}
                            leftBottom={item.leftBottom}
                            title={item.title}
                            subTitle={item.subTitle}
                        />
                    )}
                />
            </>
        );
        if (this.props.card) {
            return (
                <Card
                    styleContent={{
                        ...this.props.styleContent || {},
                        marginLeft: -15,
                        marginRight: -15,
                    }}
                    className={this.props.className}
                    title={this.props.title}
                    subTitle={this.props.subTitle}
                    style={this.props.style}
                    fluid={this.props.fluid}
                >
                    {template}
                </Card>
            )
        }
        return template;
    }
}
