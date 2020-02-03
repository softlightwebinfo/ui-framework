import * as React from 'react'
import {storiesOf} from "@storybook/react";
import {boolean, withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {WidgetNumber, WidgetNumberCenter, WidgetPercentage} from "../components/Widget";
import {Row, RowCol} from "../components/Row";
import {WidgetUser} from "../components/Widget/WidgetUser";
import {Button} from "../components/Button";
import {WidgetListHorizontal} from "../components/Widget/WidgetListHorizontal";

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
    )
    .add("User",
        () => (
            <div style={{padding: 20}}>
                <Row>
                    <RowCol>
                        <WidgetUser
                            title={"John Smith"}
                            subTitle={"Web Development"}
                            avatar={"https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg"}
                            card={boolean("card", true)}
                            fluid={boolean("fluid", true)}
                            footer={(
                                <>
                                    <Button icon={"icon icon-edit"}/>
                                    <Button style={{marginLeft: 10}} icon={"icon icon-trash"}/>
                                </>
                            )}
                        />
                    </RowCol>
                    <RowCol>
                        <WidgetUser
                            title={"John Smith"}
                            subTitle={"Web Development"}
                            avatar={"https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg"}
                            card={boolean("card", true)}
                            fluid={boolean("fluid", true)}
                            footer={(
                                <>
                                    <Button icon={"icon icon-edit"}/>
                                    <Button style={{marginLeft: 10}} icon={"icon icon-trash"}/>
                                </>
                            )}
                        />
                    </RowCol>
                    <RowCol>
                        <WidgetUser
                            title={"John Smith"}
                            subTitle={"Web Development"}
                            avatar={"https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg"}
                            card={boolean("card", true)}
                            fluid={boolean("fluid", true)}
                            footer={(
                                <>
                                    <Button icon={"icon icon-edit"}/>
                                    <Button style={{marginLeft: 10}} icon={"icon icon-trash"}/>
                                </>
                            )}
                        />
                    </RowCol>
                    <RowCol>
                        <WidgetUser
                            title={"John Smith"}
                            subTitle={"Web Development"}
                            avatar={"https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg"}
                            card={boolean("card", true)}
                            fluid={boolean("fluid", true)}
                            footer={(
                                <>
                                    <Button icon={"icon icon-edit"}/>
                                    <Button style={{marginLeft: 10}} icon={"icon icon-trash"}/>
                                </>
                            )}
                        />
                    </RowCol>
                </Row>
                <Row>
                    <RowCol>
                        <WidgetUser
                            title={"John Smith"}
                            subTitle={"Web Development"}
                            avatar={"https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg"}
                            card={!boolean("card", true)}
                            fluid={!boolean("fluid", true)}
                            footer={(
                                <>
                                    <Button icon={"icon icon-edit"}/>
                                    <Button style={{marginLeft: 10}} icon={"icon icon-trash"}/>
                                </>
                            )}
                        />
                    </RowCol>
                    <RowCol>
                        <WidgetUser
                            title={"John Smith"}
                            subTitle={"Web Development"}
                            avatar={"https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg"}
                            card={!boolean("card", true)}
                            fluid={!boolean("fluid", true)}
                            footer={(
                                <>
                                    <Button icon={"icon icon-edit"}/>
                                    <Button style={{marginLeft: 10}} icon={"icon icon-trash"}/>
                                </>
                            )}
                        />
                    </RowCol>
                    <RowCol>
                        <WidgetUser
                            title={"John Smith"}
                            subTitle={"Web Development"}
                            avatar={"https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg"}
                            card={!boolean("card", true)}
                            fluid={!boolean("fluid", true)}
                            footer={(
                                <>
                                    <Button icon={"icon icon-edit"}/>
                                    <Button style={{marginLeft: 10}} icon={"icon icon-trash"}/>
                                </>
                            )}
                        />
                    </RowCol>
                    <RowCol>
                        <WidgetUser
                            title={"John Smith"}
                            subTitle={"Web Development"}
                            avatar={"https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg"}
                            card={!boolean("card", true)}
                            fluid={!boolean("fluid", true)}
                            footer={(
                                <>
                                    <Button icon={"icon icon-edit"}/>
                                    <Button style={{marginLeft: 10}} icon={"icon icon-trash"}/>
                                </>
                            )}
                        />
                    </RowCol>
                </Row>
            </div>
        )
    )
    .add("List horizontal",
        () => (
            <div style={{padding: 20}}>
                <Row>
                    <RowCol>
                        <WidgetListHorizontal
                            card={boolean("card", true)}
                            fluid={boolean("fluid", true)}
                            list={[
                                {title: "105", subTitle: "Employee"},
                                {title: "3100 €", subTitle: "Earnings"},
                            ]}
                        />
                    </RowCol>
                    <RowCol>
                        <WidgetListHorizontal
                            card={boolean("card", true)}
                            fluid={boolean("fluid", true)}
                            list={[
                                {title: "105", subTitle: "Employee"},
                                {title: "3100 €", subTitle: "Earnings"},
                            ]}
                        />
                    </RowCol>
                </Row>
            </div>
        )
    );
