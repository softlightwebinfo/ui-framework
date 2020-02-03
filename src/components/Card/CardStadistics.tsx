import {PureComponent} from "react";
import * as React from "react";
import {Card} from "./Card";
import {CardStadisticsInterface} from "../../interfaces/interfaces/CardStadisticsInterface";
import {ProgressLabel} from "../Progress";
import {WidgetListHorizontal, WidgetSparkLine} from "../Widget";

export class CardStadistics extends PureComponent<CardStadisticsInterface> {
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
                <WidgetListHorizontal
                    center
                    list={this.props.list}
                    data={(item, index) => (
                        <WidgetSparkLine
                            key={index}
                            title={item.title}
                            subTitle={item.subTitle}
                        />
                    )}
                />
                {this.props.progressBars.map((bar, index) => (
                    <ProgressLabel
                        {...bar}
                        style={{
                            ...bar.style,
                            marginBottom: 8,
                        }}
                        key={index}
                        value={bar.value}
                        label={bar.label}
                    />
                ))}
            </Card>
        );
    }
}
