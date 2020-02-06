import {CSSProperties, PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {Table, TableInterfacePropsType} from "./Table";
import {TableHead} from "./TableHead";
import {TableCelHead} from "./TableCelHead";
import {TableFooter} from "./TableFooter";
import {TableBody} from "./TableBody";
import {TableRow} from "./TableRow";
import {TableCel} from "./TableCel";
import {Label} from "../Label";
import moment from 'moment';
import {Circle} from "../Circle";

export enum TableSimpleEnumType {
    DATE_NOW = "date_now",
    LABEL = "label",
    COMPONENT = "component",
    STRING = "string",
    DATE = "date",
    DATE_TIME = "date_time",
    NUMBER = "number",
    MONEY = "money",
    DECIMAL = "decimal",
    DEFAULT = "default",
    CIRCLE = 'circle'
}

export type TableSimpleInterfaceRowComponent = (row?: TableSimpleInterfaceRow, col?: TableSimpleInterfaceColumn, indexRow?: number, indexCol?: number) => void

export interface TableSimpleInterfaceRow {
    id: string | number;

    [p: string]: { label: string, style: CSSStyleSheet } | { color: string, style: CSSStyleSheet } | string | number | any | TableSimpleInterfaceRowComponent;
}

export interface TableSimpleInterfaceColumn {
    key: string;
    data: string;
    type: TableSimpleEnumType;
    format?: string;
    style?: CSSProperties;
}

export interface TableSimpleInterfaceProps extends PropsInterface {
    columns: TableSimpleInterfaceColumn[];
    rows: TableSimpleInterfaceRow[];
    noData?: any;
    type?: TableInterfacePropsType;
    noHeader?: boolean;
    noFooter?: boolean;
}


export class TableSimple extends PureComponent<TableSimpleInterfaceProps> {
    constructor(props) {
        super(props);
    }

    static formatCurrency() {
        return new Intl.NumberFormat('es', {
            style: 'currency',
            currency: 'EUR',
        })
    }

    static type(item: TableSimpleInterfaceRow, indexRow: number, col: TableSimpleInterfaceColumn, indexCol: number) {
        switch (col.type) {
            case TableSimpleEnumType.STRING: {
                return item[col.key];
            }
            case TableSimpleEnumType.COMPONENT: {
                return item[col.key](item, col, indexRow, indexCol);
            }
            case TableSimpleEnumType.MONEY: {
                return TableSimple.formatCurrency().format(item[col.key]);
            }
            case TableSimpleEnumType.DATE_TIME: {
                return moment(item[col.key]).format(col.format || "DD/MM/YYYY HH:mm:ss")
            }
            case TableSimpleEnumType.DATE: {
                return moment(item[col.key]).format(col.format || "DD/MM/YYYY")
            }
            case TableSimpleEnumType.DATE_NOW: {
                return moment(item[col.key]).fromNow(false);
            }
            case TableSimpleEnumType.CIRCLE: {
                return <Circle {...item[col.key]}/>
            }
            case TableSimpleEnumType.LABEL: {
                return (
                    <Label
                        style={item[col.key].style}
                    >
                        {item[col.key].label}
                    </Label>
                )
            }
            default: {
                return item[col.key];
            }
        }
    }

    generateCol(item: TableSimpleInterfaceRow, index) {
        return this.props.columns.map((col, indexCol) => (
            <TableCel key={col.key}>
                {TableSimple.type(item, index, col, indexCol)}
            </TableCel>
        ))
    }

    get table() {
        if (this.props.rows.length) {
            return this.props.rows.map((item, index) => (
                <TableRow key={item.id}>
                    {this.generateCol(item, index)}
                </TableRow>
            ))
        } else {
            return this.props.noData || null;
        }
    }

    render() {
        return (
            <Table type={this.props.type}>
                {!this.props.noHeader && (
                    <TableHead>
                        <TableRow>
                            {this.props.columns.map((item) => (
                                <TableCelHead style={item.style} key={item.key}>
                                    {item.data}
                                </TableCelHead>
                            ))}
                        </TableRow>
                    </TableHead>
                )}
                <TableBody>
                    {this.table}
                </TableBody>
                {!this.props.noFooter && (
                    <TableFooter>
                        <TableRow>
                            {this.props.columns.map((item) => (
                                <TableCelHead key={item.key}>
                                    {item.data}
                                </TableCelHead>
                            ))}
                        </TableRow>
                    </TableFooter>
                )}
            </Table>
        )
    }
}
