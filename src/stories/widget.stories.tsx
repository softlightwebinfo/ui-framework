import * as React from 'react'
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {WidgetNumber} from "../components/Widget";
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
    );
