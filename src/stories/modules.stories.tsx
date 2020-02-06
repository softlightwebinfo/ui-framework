import * as React from 'react'
import {storiesOf} from "@storybook/react";
import {boolean, withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {ModuleProgressContent, ModuleProgressTable} from "../components/Modules";
import {Spacer} from "../components/Spacer";
import {TableSimpleEnumType} from "../components/Table";
import {Row, RowCol} from "../components/Row";
import {ModuleRatingTable} from "../components/Modules/ModuleRatingTable";

storiesOf("Modules|Cards", module)
    .addDecorator(jsxDecorator)
    .addDecorator(withKnobs)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <ModuleProgressContent
                    list={[...Array(4)].map((_, index) => ({
                        id: index,
                        value: 34,
                        label: "Yesterday",
                        subTitle: "NEW TICKETS",
                        title: `${index + 1}`,
                    }))}
                    fluid={boolean("fluid", true)}
                    title={"CURRENT TICKET STATUS"}
                />
                <Spacer/>
                <ModuleProgressContent
                    list={[...Array(4)].map((_, index) => ({
                        id: index,
                        value: 34,
                        label: "Yesterday",
                        subTitle: "NEW TICKETS",
                        title: `${index + 1}`,
                    }))}
                    fluid={boolean("fluid", true)}
                    card={boolean("card", true)}
                />
                <Spacer/>
                <ModuleProgressContent
                    list={[...Array(4)].map((_, index) => ({
                        id: index,
                        value: 34,
                        label: "Yesterday",
                        subTitle: "NEW TICKETS",
                        title: `${index + 1}`,
                    }))}
                    fluid={boolean("fluid", true)}
                    card={boolean("card", true)}
                    title={"CURRENT TICKET STATUS"}
                />
                <Spacer/>
                <ModuleProgressContent
                    list={[...Array(4)].map((_, index) => ({
                        id: index,
                        value: 34,
                        label: "Yesterday",
                        subTitle: "NEW TICKETS",
                        title: `${index + 1}`,
                    }))}
                    fluid={boolean("fluid", true)}
                    card={boolean("card", true)}
                    title={"CURRENT TICKET STATUS"}
                >
                    <ModuleProgressContent
                        list={[...Array(4)].map((_, index) => ({
                            id: index,
                            value: 34,
                            label: "Yesterday",
                            subTitle: "NEW TICKETS",
                            title: `${index + 1}`,
                        }))}
                    />
                </ModuleProgressContent>
            </div>
        )
    )
    .add("Table progress",
        () => (
            <div style={{padding: 20}}>
                <Row>
                    <RowCol column={4}>
                        <ModuleProgressTable
                            columns={[
                                {type: TableSimpleEnumType.CIRCLE, style: {width: 10}, key: "circle", data: ""},
                                {type: TableSimpleEnumType.STRING, style: {width: '100%'}, key: "text", data: ""},
                                {type: TableSimpleEnumType.STRING, key: "data", data: ""},
                                {type: TableSimpleEnumType.STRING, key: "value", data: ""},
                            ]}
                            rows={[
                                {id: 1, circle: {color: "#345212"}, text: "Excellent", data: "3007", value: "50%"},
                                {id: 2, circle: {color: "#522228"}, text: "Excellent", data: "3007", value: "50%"},
                                {id: 3, circle: {color: "#0cccff"}, text: "Excellent", data: "3007", value: "50%"},
                                {id: 4, circle: {color: "#ff1300"}, text: "Excellent", data: "3007", value: "50%"},
                                {id: 5, circle: {color: "#e55829"}, text: "Excellent", data: "3007", value: "50%"},
                            ]}
                            card={boolean("card", true)}
                            fluid={boolean("fluid", true)}
                            title={"CUSTOMER SATISFACTION"}
                            progress={{
                                value: 9.8,
                                oldValue: 8,
                                title: "PERFORMANCE SCOPE",
                                progress: [
                                    {value: 29, color: "red"},
                                    {value: 10, color: "blue"},
                                    {value: 42, color: "yellow"},
                                ]
                            }}
                        />
                    </RowCol>
                    <RowCol column={4}>
                        <ModuleProgressTable
                            columns={[
                                {type: TableSimpleEnumType.CIRCLE, style: {width: 10}, key: "circle", data: ""},
                                {type: TableSimpleEnumType.STRING, style: {width: '100%'}, key: "text", data: ""},
                                {type: TableSimpleEnumType.STRING, key: "data", data: ""},
                                {type: TableSimpleEnumType.STRING, key: "value", data: ""},
                            ]}
                            rows={[
                                {id: 1, circle: {color: "#345212"}, text: "Excellent", data: "3007", value: "50%"},
                                {id: 2, circle: {color: "#522228"}, text: "Excellent", data: "3007", value: "50%"},
                                {id: 3, circle: {color: "#0cccff"}, text: "Excellent", data: "3007", value: "50%"},
                                {id: 4, circle: {color: "#ff1300"}, text: "Excellent", data: "3007", value: "50%"},
                                {id: 5, circle: {color: "#e55829"}, text: "Excellent", data: "3007", value: "50%"},
                            ]}
                            card={boolean("card", true)}
                            fluid={boolean("fluid", true)}
                            title={"CUSTOMER SATISFACTION"}
                            progress={{
                                value: 9.8,
                                oldValue: 8,
                                title: "PERFORMANCE SCOPE",
                                progress: [
                                    {value: 29, color: "red"},
                                    {value: 10, color: "blue"},
                                    {value: 42, color: "yellow"},
                                ]
                            }}
                        />
                    </RowCol>
                    <RowCol column={4}>
                        <ModuleProgressTable
                            columns={[
                                {type: TableSimpleEnumType.CIRCLE, style: {width: 10}, key: "circle", data: ""},
                                {type: TableSimpleEnumType.STRING, style: {width: '100%'}, key: "text", data: ""},
                                {type: TableSimpleEnumType.STRING, key: "data", data: ""},
                                {type: TableSimpleEnumType.STRING, key: "value", data: ""},
                            ]}
                            rows={[
                                {id: 1, circle: {color: "#345212"}, text: "Excellent", data: "3007", value: "50%"},
                                {id: 2, circle: {color: "#522228"}, text: "Excellent", data: "3007", value: "50%"},
                                {id: 3, circle: {color: "#0cccff"}, text: "Excellent", data: "3007", value: "50%"},
                                {id: 4, circle: {color: "#ff1300"}, text: "Excellent", data: "3007", value: "50%"},
                                {id: 5, circle: {color: "#e55829"}, text: "Excellent", data: "3007", value: "50%"},
                            ]}
                            card={boolean("card", true)}
                            fluid={boolean("fluid", true)}
                            title={"CUSTOMER SATISFACTION"}
                            progress={{
                                value: 9.8,
                                oldValue: 8,
                                title: "PERFORMANCE SCOPE",
                                progress: [
                                    {value: 29, color: "red"},
                                    {value: 10, color: "blue"},
                                    {value: 42, color: "yellow"},
                                ]
                            }}
                        />
                    </RowCol>
                </Row>
            </div>
        )
    )
    .add("Table Rating",
        () => (
            <div style={{padding: 20}}>
                <Row>
                    <RowCol column={4}>
                        <ModuleRatingTable
                            columns={[
                                {type: TableSimpleEnumType.DECIMAL, style: {width: 10}, key: "stars", data: ""},
                                {type: TableSimpleEnumType.STARS, style: {width: '100%'}, key: "stars", data: ""},
                                {type: TableSimpleEnumType.STRING, key: "data", data: ""},
                                {type: TableSimpleEnumType.STRING, key: "value", data: ""},
                            ]}
                            rows={[
                                {id: 1, stars: 4.3, text: "Excellent", data: "3007", value: "50%"},
                                {id: 2, stars: 4, text: "Excellent", data: "3007", value: "50%"},
                                {id: 3, stars: 5, text: "Excellent", data: "3007", value: "50%"},
                                {id: 4, stars: 2.9, text: "Excellent", data: "3007", value: "50%"},
                                {id: 5, stars: 4, text: "Excellent", data: "3007", value: "50%"},
                            ]}
                            card={boolean("card", true)}
                            fluid={boolean("fluid", true)}
                            title={"OVERALL RATING"}
                            stars={4.2}
                            description={"Overall the quality or your support team’s efforts Rating."}
                        />
                    </RowCol>
                </Row>
            </div>
        )
    );
