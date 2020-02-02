import * as React from 'react'
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {WidgetNumber, WidgetNumberCenter, WidgetPercentage} from "../components/Widget";
import {Row, RowCol} from "../components/Row";

storiesOf("Layout|Widgets", module)
    .addDecorator(jsxDecorator)
    .addDecorator(withKnobs)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <Row>
                    <RowCol><WidgetNumber fluid card title={"Web Developer"} subtitle={"Since last month"} money={"€"} numberLast={10} number={10}/></RowCol>
                    <RowCol><WidgetNumber fluid card title={"Web Developer"} subtitle={"Since last month"} money={"€"} numberLast={20} number={10}/></RowCol>
                    <RowCol><WidgetNumber fluid card title={"Web Developer"} subtitle={"Since last month"} money={"€"} numberLast={30} number={60}/></RowCol>
                    <RowCol><WidgetNumber fluid card title={"Web Developer"} subtitle={"Since last month"} money={"€"} numberLast={40} number={45}/></RowCol>
                </Row>
            </div>
        )
    )
    .add("Center",
        () => (
            <div style={{padding: 20}}>
                <Row>
                    <RowCol><WidgetNumberCenter fluid card title={"Web Developer"} subtitle={"Since last month"} numberLast={10} number={10}/></RowCol>
                    <RowCol><WidgetNumberCenter fluid card title={"Web Developer"} subtitle={"Since last month"} numberLast={20} number={10}/></RowCol>
                    <RowCol><WidgetNumberCenter fluid card title={"Web Developer"} subtitle={"Since last month"} numberLast={30} number={60}/></RowCol>
                    <RowCol><WidgetNumberCenter fluid card title={"Web Developer"} subtitle={"Since last month"} numberLast={40} number={45}/></RowCol>
                </Row>
            </div>
        )
    )
    .add("Percentage",
        () => (
            <div style={{padding: 20}}>
                <Row>
                    <RowCol><WidgetPercentage fluid card title={"Computer"} price={1212} money={"€"} percentage={23}/></RowCol>
                    <RowCol><WidgetPercentage fluid card title={"Laptop"} price={423} money={"€"} percentage={52}/></RowCol>
                    <RowCol><WidgetPercentage fluid card title={"Accessories"} price={2324} money={"€"} percentage={27}/></RowCol>
                    <RowCol><WidgetPercentage fluid card title={"Others"} price={4542} money={"€"} percentage={12}/></RowCol>
                </Row>
            </div>
        )
    );
