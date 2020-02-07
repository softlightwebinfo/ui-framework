import * as React from 'react'
import {storiesOf} from "@storybook/react";
import {boolean, withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {WidgetCardTable, WidgetNumber, WidgetNumberCenter, WidgetOverallRating, WidgetPercentage, WidgetProgressCircle, WidgetSparkLine, WidgetUserAvatar} from "../components/Widget";
import {Row, RowCol} from "../components/Row";
import {WidgetUser} from "../components/Widget/WidgetUser";
import {Button} from "../components/Button";
import {WidgetListHorizontal} from "../components/Widget";
import {SocialIcons} from "../components/Social";
import {Spacer} from "../components/Spacer";

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
    )
    .add("Spark line",
        () => (
            <div style={{padding: 20}}>
                <Row>
                    <RowCol><WidgetSparkLine title={"Total Employee"} subTitle={"614"}/></RowCol>
                    <RowCol><WidgetSparkLine title={"New Employee"} subTitle={"124"}/></RowCol>
                    <RowCol><WidgetSparkLine title={"Male"} subTitle={"504"}/></RowCol>
                    <RowCol><WidgetSparkLine title={"Female"} subTitle={"110"}/></RowCol>
                </Row>
                <Row>
                    <RowCol><WidgetSparkLine card={boolean("card", true)} fluid={boolean("fluid", true)} title={"Total Employee"} subTitle={"614"}/></RowCol>
                    <RowCol><WidgetSparkLine card={boolean("card", true)} fluid={boolean("fluid", true)} title={"New Employee"} subTitle={"124"}/></RowCol>
                    <RowCol><WidgetSparkLine card={boolean("card", true)} fluid={boolean("fluid", true)} title={"Male"} subTitle={"504"}/></RowCol>
                    <RowCol><WidgetSparkLine card={boolean("card", true)} fluid={boolean("fluid", true)} title={"Female"} subTitle={"110"}/></RowCol>
                </Row>
                <Row>
                    <RowCol><WidgetSparkLine card={false} fluid={true} title={"Total Employee"} subTitle={"614"}/></RowCol>
                    <RowCol><WidgetSparkLine card={false} fluid={true} title={"New Employee"} subTitle={"124"}/></RowCol>
                    <RowCol><WidgetSparkLine card={false} fluid={true} title={"Male"} subTitle={"504"}/></RowCol>
                    <RowCol><WidgetSparkLine card={false} fluid={true} title={"Female"} subTitle={"110"}/></RowCol>
                </Row>
                <Row>
                    <RowCol><WidgetSparkLine card={true} fluid={false} title={"Total Employee"} subTitle={"614"}/></RowCol>
                    <RowCol><WidgetSparkLine card={true} fluid={false} title={"New Employee"} subTitle={"124"}/></RowCol>
                    <RowCol><WidgetSparkLine card={true} fluid={false} title={"Male"} subTitle={"504"}/></RowCol>
                    <RowCol><WidgetSparkLine card={true} fluid={false} title={"Female"} subTitle={"110"}/></RowCol>
                </Row>
            </div>
        )
    )
    .add("User Avatar",
        () => (
            <div style={{padding: 20}}>
                <Row>
                    <RowCol>
                        <WidgetUserAvatar
                            card={boolean("card", true)}
                            fluid={boolean("fluid", true)}
                            title={"Sara Hopkins"}
                            subTitle={"Web developer"}
                            avatar={"https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg"}
                        >
                            <SocialIcons
                                socials={[
                                    {icon: "facebook"},
                                    {icon: "twitter"},
                                    {icon: "phone"},
                                    {icon: "skype"},
                                ]}
                            />
                        </WidgetUserAvatar>
                    </RowCol>
                    <RowCol>
                        <WidgetUserAvatar
                            card={boolean("card", true)}
                            fluid={boolean("fluid", true)}
                            title={"Sara Hopkins"}
                            subTitle={"Web developer"}
                            avatar={"https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg"}
                        >
                            <SocialIcons
                                socials={[
                                    {icon: "facebook"},
                                    {icon: "twitter"},
                                    {icon: "phone"},
                                    {icon: "skype"},
                                ]}
                            />
                        </WidgetUserAvatar>
                    </RowCol>
                    <RowCol>
                        <WidgetUserAvatar
                            card={boolean("card", true)}
                            fluid={boolean("fluid", true)}
                            title={"Sara Hopkins"}
                            subTitle={"Web developer"}
                            avatar={"https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg"}
                        >
                            <SocialIcons
                                socials={[
                                    {icon: "facebook"},
                                    {icon: "twitter"},
                                    {icon: "phone"},
                                    {icon: "skype"},
                                ]}
                            />
                        </WidgetUserAvatar>
                    </RowCol>
                    <RowCol>
                        <WidgetUserAvatar
                            card={boolean("card", true)}
                            fluid={boolean("fluid", true)}
                            title={"Sara Hopkins"}
                            subTitle={"Web developer"}
                            avatar={"https://cdn3.f-cdn.com/contestentries/1483263/26039261/5c988ddb8ee9a_thumb900.jpg"}
                        >
                            <SocialIcons
                                socials={[
                                    {icon: "facebook"},
                                    {icon: "twitter"},
                                    {icon: "phone"},
                                    {icon: "skype"},
                                ]}
                            />
                        </WidgetUserAvatar>
                    </RowCol>
                </Row>
            </div>
        )
    )
    .add("Overall Rating",
        () => (
            <div style={{padding: 20}}>
                <Row>
                    <RowCol>
                        <WidgetOverallRating stars={5} description={"Overall the quality or your support team’s efforts Rating."}/>
                    </RowCol>
                    <RowCol>
                        <WidgetOverallRating stars={5} description={"Overall the quality or your support team’s efforts Rating."}/>
                    </RowCol>
                </Row>
                <Row>
                    <RowCol>
                        <WidgetOverallRating card stars={5} description={"Overall the quality or your support team’s efforts Rating."}/>
                    </RowCol>
                    <RowCol>
                        <WidgetOverallRating card stars={5} description={"Overall the quality or your support team’s efforts Rating."}/>
                    </RowCol>
                </Row>
                <Row>
                    <RowCol>
                        <WidgetOverallRating fluid card stars={5} description={"Overall the quality or your support team’s efforts Rating."}/>
                    </RowCol>
                    <RowCol>
                        <WidgetOverallRating fluid card stars={5} description={"Overall the quality or your support team’s efforts Rating."}/>
                    </RowCol>
                </Row>
            </div>
        )
    )
    .add("Card Table",
        () => (
            <div style={{padding: 20}}>
                <Row>
                    <RowCol>
                        <WidgetCardTable
                            icon={"check"}
                            title={"Payment from #1567"}
                            subTitle={"Feb 21, 2019, 3:30pm"}
                            leftTop={"300€"}
                            leftBottom={"Done"}
                            leftBottomColor={"danger"}
                        />
                    </RowCol>
                    <RowCol>
                        <WidgetCardTable
                            icon={"check"}
                            title={"Payment from #1567"}
                            subTitle={"Feb 21, 2019, 3:30pm"}
                            leftTop={"300€"}
                            leftBottom={"Done"}
                            leftBottomColor={"danger"}
                        />
                    </RowCol>
                </Row>
                <Spacer/>
                <Row>
                    <RowCol>
                        <WidgetCardTable
                            card={boolean("card", true)}
                            fluid={boolean("fluid", true)}
                            icon={"check"}
                            title={"Payment from #1567"}
                            subTitle={"Feb 21, 2019, 3:30pm"}
                            leftTop={"300€"}
                            leftBottom={"Done"}
                            leftBottomColor={"danger"}
                        />
                    </RowCol>
                    <RowCol>
                        <WidgetCardTable
                            card={boolean("card", true)}
                            fluid={boolean("fluid", true)}
                            icon={"check"}
                            title={"Payment from #1567"}
                            subTitle={"Feb 21, 2019, 3:30pm"}
                            leftTop={"300€"}
                            leftBottom={"Done"}
                            leftBottomColor={"danger"}
                        />
                    </RowCol>
                </Row>
            </div>
        )
    )
    .add("Progress",
        () => (
            <div style={{padding: 20}}>
                <Row>
                    <RowCol>
                        <WidgetProgressCircle
                            title={"Payment from #1567"}
                            progress={20}
                            card
                            fluid
                        />
                    </RowCol>
                    <RowCol>
                        <WidgetProgressCircle
                            title={"Payment from #1567"}
                            progress={20}
                            card
                            fluid
                        />
                    </RowCol>
                    <RowCol>
                        <WidgetProgressCircle
                            title={"Payment from #1567"}
                            progress={20}
                            card
                            fluid
                        />
                    </RowCol>
                    <RowCol>
                        <WidgetProgressCircle
                            title={"Payment from #1567"}
                            progress={20}
                            card
                            fluid
                        />
                    </RowCol>
                </Row>
                <Spacer/>
            </div>
        )
    )
