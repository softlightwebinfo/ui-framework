import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {Card} from "../Card";
import {TitleSubtitleInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";
import {ProgressLabel, ProgressLabelInterfaceProps} from "../Progress";
import {ListSeparator, ListSeparatorInterfacePropsVariant} from "../List";
import {Separator} from "../Separator";

export interface ModuleProgressContentInterfaceProps extends PropsInterface, TitleSubtitleInterface {
    fluid?: boolean;
    list: ModuleProgressContentInterfacePropsList[];
    zebra?: boolean;
    variant?: ListSeparatorInterfacePropsVariant;
}

export interface ModuleProgressContentInterfacePropsList extends ProgressLabelInterfaceProps {
    separator?: boolean;
    styleContent?: any;
}

export class ModuleProgressContent extends PureComponent<ModuleProgressContentInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const template = (
            <ListSeparator
                separator={this.props.separator}
                variant={this.props.variant || "inline"}
                default
                zebra={this.props.zebra}
                list={this.props.list}
                data={(item: ModuleProgressContentInterfacePropsList) => (
                    <ProgressLabel title={item.title} subTitle={item.subTitle} label={item.label} value={item.value} style={{marginBottom: 5}}/>
                )}
            />
        );
        if (this.props.card) {
            return (
                <Card
                    styleContent={this.props.styleContent}
                    className={this.props.className}
                    title={this.props.title}
                    subTitle={this.props.subTitle}
                    style={this.props.style}
                    fluid={this.props.fluid}
                >
                    {this.props.children && (
                        <>
                            {this.props.children}
                            <Separator style={{marginLeft: -15, marginRight: -15}}/>
                        </>
                    )}
                    {template}
                </Card>
            )
        }
        return template;
    }
}
