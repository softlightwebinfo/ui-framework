import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {Row, RowCol} from "../components/Row";

storiesOf("Layout|Grid", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <Row>
                    <RowCol column={6} lg={2}><div style={{backgroundColor: "white", padding: 10}} >Col</div></RowCol>
                    <RowCol column={2} lg={4}><div style={{backgroundColor: "white", padding: 10}} >Col</div></RowCol>
                    <RowCol column={4} lg={6}><div style={{backgroundColor: "white", padding: 10}} >Col</div></RowCol>
                    <RowCol lg={4}><div style={{backgroundColor: "white", padding: 10}} >Col</div></RowCol>
                    <RowCol><div style={{backgroundColor: "white", padding: 10}} >Col</div></RowCol>
                </Row>
                <Row style={{marginTop: 20}}>
                    <RowCol><div style={{backgroundColor: "white", padding: 10}} >Col</div></RowCol>
                    <RowCol><div style={{backgroundColor: "white", padding: 10}} >Col</div></RowCol>
                    <RowCol><div style={{backgroundColor: "white", padding: 10}} >Col</div></RowCol>
                    <RowCol><div style={{backgroundColor: "white", padding: 10}} >Col</div></RowCol>
                    <RowCol><div style={{backgroundColor: "white", padding: 10}} >Col</div></RowCol>
                </Row>
            </div>
        )
    );
