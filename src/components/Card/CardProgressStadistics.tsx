import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {Card} from "./Card";
import {ListSeparator} from "../List";
import {ListComponent} from "../../interfaces/enum/ListComponent";
import {ProgressLabel, ProgressLabelInterfaceProps} from "../Progress";
import {TitleSubtitleInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";
import {WidgetSparkLine, WidgetSparkLineInterfaceProps} from "../Widget";

export interface CardProgressStadisticsInterfaceProps extends PropsInterface, TitleSubtitleInterface {
    fluid?: boolean;
    footer?: any;
    header?: any;
    list: WidgetSparkLineInterfaceProps[];
    progressBars: ProgressLabelInterfaceProps[];
    zebraList?: boolean;
    zebraSpark?: boolean;
}

export class CardProgressStadistics extends PureComponent<CardProgressStadisticsInterfaceProps> {
    render(): React.ReactNode {
        return (
            <Card
                title={this.props.title}
                subTitle={this.props.subTitle}
                className={this.props.className}
                style={this.props.style}
                footer={this.props.footer}
                header={this.props.header}
                fluid={this.props.fluid}
                styleContent={{marginLeft: -15, marginRight: -15}}
            >
                <ListSeparator
                    zebra={this.props.zebraSpark}
                    style={{marginBottom: 20}}
                    variant={"inline"}
                    component={ListComponent.UL}
                    list={this.props.list}
                    data={(item) => (
                        <WidgetSparkLine style={{paddingBottom: 24, paddingTop: 24}} {...item} title={item.title} subTitle={item.subTitle}/>
                    )}
                />
                <ListSeparator
                    zebra={this.props.zebraList}
                    component={ListComponent.UL}
                    list={this.props.progressBars}
                    data={(item: ProgressLabelInterfaceProps) => (
                        <ProgressLabel
                            {...item}
                            value={item.value}
                            label={item.label}
                        />
                    )}
                />
            </Card>
        );
    }
}
