import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {Table, TableBody, TableCel, TableCelHead, TableFooter, TableHead, TableRow, TableSimple, TableSimpleEnumType} from "../components/Table";
import moment from 'moment';
import {Card} from "../components/Card";

storiesOf("Layout|Table", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCelHead>#</TableCelHead>
                            <TableCelHead>CLIENT NAME</TableCelHead>
                            <TableCelHead>TEAM</TableCelHead>
                            <TableCelHead>PROJECT</TableCelHead>
                            <TableCelHead>PROJECT COST</TableCelHead>
                            <TableCelHead>PAYMENT</TableCelHead>
                            <TableCelHead>STATUS</TableCelHead>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCel>#AD1245</TableCel>
                            <TableCel>Sean Black</TableCel>
                            <TableCel>Sean Black, Sean Black, Sean Black, Sean Black, Sean Black</TableCel>
                            <TableCel>Angular admin</TableCel>
                            <TableCel>14500€</TableCel>
                            <TableCel>DONE</TableCel>
                            <TableCel>Delivered</TableCel>
                        </TableRow>
                        <TableRow>
                            <TableCel>#AD1245</TableCel>
                            <TableCel>Sean Black</TableCel>
                            <TableCel>Sean Black, Sean Black, Sean Black, Sean Black, Sean Black</TableCel>
                            <TableCel>Angular admin</TableCel>
                            <TableCel>14500€</TableCel>
                            <TableCel>DONE</TableCel>
                            <TableCel>Delivered</TableCel>
                        </TableRow>
                        <TableRow>
                            <TableCel>#AD1245</TableCel>
                            <TableCel>Sean Black</TableCel>
                            <TableCel>Sean Black, Sean Black, Sean Black, Sean Black, Sean Black</TableCel>
                            <TableCel>Angular admin</TableCel>
                            <TableCel>14500€</TableCel>
                            <TableCel>DONE</TableCel>
                            <TableCel>Delivered</TableCel>
                        </TableRow>
                        <TableRow>
                            <TableCel>#AD1245</TableCel>
                            <TableCel>Sean Black</TableCel>
                            <TableCel>Sean Black, Sean Black, Sean Black, Sean Black, Sean Black</TableCel>
                            <TableCel>Angular admin</TableCel>
                            <TableCel>14500€</TableCel>
                            <TableCel>DONE</TableCel>
                            <TableCel>Delivered</TableCel>
                        </TableRow>
                        <TableRow>
                            <TableCel>#AD1245</TableCel>
                            <TableCel>Sean Black</TableCel>
                            <TableCel>Sean Black, Sean Black, Sean Black, Sean Black, Sean Black</TableCel>
                            <TableCel>Angular admin</TableCel>
                            <TableCel>14500€</TableCel>
                            <TableCel>DONE</TableCel>
                            <TableCel>Delivered</TableCel>
                        </TableRow>
                        <TableRow>
                            <TableCel>#AD1245</TableCel>
                            <TableCel>Sean Black</TableCel>
                            <TableCel>Sean Black, Sean Black, Sean Black, Sean Black, Sean Black</TableCel>
                            <TableCel>Angular admin</TableCel>
                            <TableCel>14500€</TableCel>
                            <TableCel>DONE</TableCel>
                            <TableCel>Delivered</TableCel>
                        </TableRow>
                        <TableRow>
                            <TableCel>#AD1245</TableCel>
                            <TableCel>Sean Black</TableCel>
                            <TableCel>Sean Black, Sean Black, Sean Black, Sean Black, Sean Black</TableCel>
                            <TableCel>Angular admin</TableCel>
                            <TableCel>14500€</TableCel>
                            <TableCel>DONE</TableCel>
                            <TableCel>Delivered</TableCel>
                        </TableRow>
                        <TableRow>
                            <TableCel>#AD1245</TableCel>
                            <TableCel>Sean Black</TableCel>
                            <TableCel>Sean Black, Sean Black, Sean Black, Sean Black, Sean Black</TableCel>
                            <TableCel>Angular admin</TableCel>
                            <TableCel>14500€</TableCel>
                            <TableCel>DONE</TableCel>
                            <TableCel>Delivered</TableCel>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCelHead>#</TableCelHead>
                            <TableCelHead>CLIENT NAME</TableCelHead>
                            <TableCelHead>TEAM</TableCelHead>
                            <TableCelHead>PROJECT</TableCelHead>
                            <TableCelHead>PROJECT COST</TableCelHead>
                            <TableCelHead>PAYMENT</TableCelHead>
                            <TableCelHead>STATUS</TableCelHead>
                        </TableRow>
                    </TableFooter>
                </Table>
            </div>
        )
    )
    .add("Simple",
        () => (
            <div style={{padding: 20}}>
                <TableSimple
                    columns={[
                        {key: "id", data: "#", type: TableSimpleEnumType.STRING},
                        {key: "client", data: "CLIENT NAME", type: TableSimpleEnumType.STRING},
                        {key: "team", data: "TEAM", type: TableSimpleEnumType.COMPONENT},
                        {key: "project", data: "PROJECT", type: TableSimpleEnumType.STRING},
                        {key: "project_cost", data: "PROJECT COST", type: TableSimpleEnumType.MONEY},
                        {key: "payment", data: "PAYMENT", type: TableSimpleEnumType.STRING},
                        {key: "date", data: "DATE", type: TableSimpleEnumType.DATE},
                        {key: "date_now", data: "DATE", type: TableSimpleEnumType.DATE_NOW},
                        {key: "status", data: "STATUS", type: TableSimpleEnumType.LABEL},
                    ]}
                    rows={[...new Array(20)].map((_, index) => ({
                        id: index,
                        client: `Sean Black ${index}`,
                        team: (_, col) => <div>{col.key}</div>,
                        project: "Angular Admin",
                        project_cost: "14500",
                        payment: "DONE",
                        date: "2020-01-03 10:20:30",
                        date_now: "2020-01-03 10:20:30",
                        status: {
                            label: "DELIVERED",
                            style: {
                                backgroundColor: "red",
                                borderColor: "red",
                            }
                        }
                    }))}
                />
            </div>
        )
    )
    .add("List",
        () => (
            <div style={{padding: 20}}>
                <Card>
                    <TableSimple
                        type={"list"}
                        columns={[
                            {key: "day", data: "DAY", type: TableSimpleEnumType.STRING},
                            {key: "date", data: "DATE", type: TableSimpleEnumType.DATE},
                            {key: "holiday", data: "HOLIDAY", type: TableSimpleEnumType.STRING},
                        ]}
                        rows={[...new Array(20)].map((_, index) => ({
                            id: index,
                            day: "Monday",
                            date: moment(),
                            holiday: "rafa gonzalez muñoz"
                        }))}
                    />
                </Card>
            </div>
        )
    );
