import * as React from 'react'
import {storiesOf} from "@storybook/react";
import {boolean, text, withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {Card} from "../components/Card";
import {Button} from "../components/Button";
import {CardUser} from "../components/Card/CardUser";
import {Row, RowCol} from "../components/Row";
import {action} from "@storybook/addon-actions";
import {Badge} from "../components/Badge";

storiesOf("Layout|Cards", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <Card fluid={boolean("fluid", false)} title={text("title", "Simple Card")} style={{width: '360px'}}>
                    <div>
                        {text("body", `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!`)}
                    </div>
                </Card>
            </div>
        )
    )
    .add("Advanced",
        () => (
            <div style={{padding: 20}}>
                <Card
                    fluid={boolean("fluid", false)}
                    title={text("title", "Advanced Card")} subTitle={text("subtitle", "Subtitle")} style={{width: '360px'}}
                    footer={(
                        <span>
                            <Button style={{marginRight: 5}} label="Save" iconPos={"left"} icon="icon icon-check"/>
                            <Button label="Cancel" icon="icon icon-cancel" iconPos={"left"} color={"secondary"}/>
                        </span>
                    )}
                    header={(
                        <img alt="Card" src='https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg'/>
                    )}
                >
                    <div>{text("body", `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!`)}</div>
                </Card>
            </div>
        )
    )
    .add("Profesional",
        () => (
            <div style={{padding: 20}}>
                <Row>
                    <RowCol>
                        <CardUser
                            list={[
                                {title: "105", subTitle: "Employee"},
                                {title: "3100 €", subTitle: "Earnings"},
                            ]}
                            avatar={text("avatar", "https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg")}
                            title={text("title", "John Smith")}
                            subTitle={text("subtitle", "Web Development")}
                            fluid={boolean("fluid", true)}
                            onClickEdit={action("onClickEdit")}
                            onClickTrash={action("onClickTrash")}
                        />
                    </RowCol>
                    <RowCol>
                        <CardUser
                            list={[
                                {title: "105", subTitle: "Employee"},
                                {title: "3100 €", subTitle: "Earnings"},
                            ]}
                            avatar={text("avatar", "https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg")}
                            title={text("title", "John Smith")}
                            subTitle={text("subtitle", "Web Development")}
                            fluid={boolean("fluid", true)}
                            onClickEdit={action("onClickEdit")}
                            onClickTrash={action("onClickTrash")}
                        />
                    </RowCol>
                    <RowCol>
                        <CardUser
                            list={[
                                {title: "105", subTitle: "Employee"},
                                {title: "3100 €", subTitle: "Earnings"},
                            ]}
                            avatar={text("avatar", "https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg")}
                            title={text("title", "John Smith")}
                            subTitle={text("subtitle", "Web Development")}
                            fluid={boolean("fluid", true)}
                            onClickEdit={action("onClickEdit")}
                            onClickTrash={action("onClickTrash")}
                        />
                    </RowCol>
                    <RowCol>
                        <CardUser
                            list={[
                                {title: "105", subTitle: "Employee"},
                                {title: "3100 €", subTitle: "Earnings"},
                            ]}
                            avatar={text("avatar", "https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg")}
                            title={text("title", "John Smith")}
                            subTitle={text("subtitle", "Web Development")}
                            fluid={boolean("fluid", true)}
                            onClickEdit={action("onClickEdit")}
                            onClickTrash={action("onClickTrash")}
                        />
                    </RowCol>
                </Row>
                <Row>
                    <RowCol>
                        <CardUser
                            list={[
                                {title: "105", subTitle: "Employee"},
                                {title: "3100 €", subTitle: "Earnings"},
                            ]}
                            avatar={text("avatar", "https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg")}
                            title={text("title", "John Smith")}
                            subTitle={text("subtitle", "Web Development")}
                            fluid={boolean("fluid", true)}
                        />
                    </RowCol>
                    <RowCol>
                        <CardUser
                            list={[
                                {title: "105", subTitle: "Employee"},
                                {title: "3100 €", subTitle: "Earnings"},
                            ]}
                            avatar={text("avatar", "https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg")}
                            title={text("title", "John Smith")}
                            subTitle={text("subtitle", "Web Development")}
                            fluid={boolean("fluid", true)}
                        />
                    </RowCol>
                    <RowCol>
                        <CardUser
                            list={[
                                {title: "105", subTitle: "Employee"},
                                {title: "3100 €", subTitle: "Earnings"},
                            ]}
                            avatar={text("avatar", "https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg")}
                            title={text("title", "John Smith")}
                            subTitle={text("subtitle", "Web Development")}
                            fluid={boolean("fluid", true)}
                        />
                    </RowCol>
                    <RowCol>
                        <CardUser
                            list={[
                                {title: "105", subTitle: "Employee"},
                                {title: "3100 €", subTitle: "Earnings"},
                            ]}
                            avatar={text("avatar", "https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg")}
                            title={text("title", "John Smith")}
                            subTitle={text("subtitle", "Web Development")}
                            fluid={boolean("fluid", true)}
                        />
                    </RowCol>
                </Row>
                <Row>
                    <RowCol>
                        <CardUser
                            list={[
                                {title: "105", subTitle: "Employee"},
                                {title: "3100 €", subTitle: "Earnings"},
                            ]}
                            avatar={text("avatar", "https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg")}
                            title={text("title", "John Smith")}
                            subTitle={text("subtitle", "Web Development")}
                            fluid={boolean("fluid", true)}
                            footer={(
                                <Badge>Test</Badge>
                            )}
                        />
                    </RowCol>
                    <RowCol>
                        <CardUser
                            list={[
                                {title: "105", subTitle: "Employee"},
                                {title: "3100 €", subTitle: "Earnings"},
                            ]}
                            avatar={text("avatar", "https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg")}
                            title={text("title", "John Smith")}
                            subTitle={text("subtitle", "Web Development")}
                            fluid={boolean("fluid", true)}
                            footer={(
                                <Badge>Test</Badge>
                            )}
                        />
                    </RowCol>
                    <RowCol>
                        <CardUser
                            list={[
                                {title: "105", subTitle: "Employee"},
                                {title: "3100 €", subTitle: "Earnings"},
                            ]}
                            avatar={text("avatar", "https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg")}
                            title={text("title", "John Smith")}
                            subTitle={text("subtitle", "Web Development")}
                            fluid={boolean("fluid", true)}
                            footer={(
                                <Badge>Test</Badge>
                            )}
                        />
                    </RowCol>
                    <RowCol>
                        <CardUser
                            list={[
                                {title: "105", subTitle: "Employee"},
                                {title: "3100 €", subTitle: "Earnings"},
                            ]}
                            avatar={text("avatar", "https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg")}
                            title={text("title", "John Smith")}
                            subTitle={text("subtitle", "Web Development")}
                            fluid={boolean("fluid", true)}
                            footer={(
                                <Badge>Test</Badge>
                            )}
                        />
                    </RowCol>
                </Row>
            </div>
        )
    );
