import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {Card} from "../Card";
import {TableSimple, TableSimpleInterfaceColumn, TableSimpleInterfaceRow} from "../Table";
import {ProgressExtendsLabel, ProgressExtendsLabelInterfaceProps} from "../Progress";
import {TitleSubtitleInterface} from "../../interfaces/interfaces/TitleSubtitleInterface";


export interface ModuleProgressTableInterfaceProps extends PropsInterface, TitleSubtitleInterface {
    fluid?: boolean;
    card?: boolean;
    columns: TableSimpleInterfaceColumn[];
    rows: TableSimpleInterfaceRow[];
    styleContent?: any;
    progress: ProgressExtendsLabelInterfaceProps;
}

export class ModuleProgressTable extends PureComponent<ModuleProgressTableInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const template = (
            <>
                <ProgressExtendsLabel
                    value={this.props.progress.value}
                    oldValue={this.props.progress.oldValue}
                    progress={this.props.progress.progress}
                    title={this.props.progress.title}
                    subTitle={this.props.progress.subTitle}
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
