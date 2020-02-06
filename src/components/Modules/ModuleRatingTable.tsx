import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {Card} from "../Card";
import {TableSimple, TableSimpleInterfaceColumn, TableSimpleInterfaceRow} from "../Table";
import {TitleSubtitleInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";
import {WidgetOverallRating} from "../Widget";


export interface ModuleRatingTableInterfaceProps extends PropsInterface, TitleSubtitleInterface {
    fluid?: boolean;
    card?: boolean;
    columns: TableSimpleInterfaceColumn[];
    rows: TableSimpleInterfaceRow[];
    styleContent?: any;
    stars: number;
    description: string;
}

export class ModuleRatingTable extends PureComponent<ModuleRatingTableInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const template = (
            <>
                <WidgetOverallRating
                    style={{padding: 15}}
                    stars={this.props.stars}
                    description={this.props.description}
                />
                <TableSimple
                    noHeader
                    noFooter
                    columns={this.props.columns}
                    rows={this.props.rows}
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
