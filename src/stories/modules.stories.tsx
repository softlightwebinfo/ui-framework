import * as React from 'react'
import {storiesOf} from "@storybook/react";
import {boolean, number, text, withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {ModuleAuthLogin, ModuleCardTable, ModuleProgressContent, ModuleProgressTable, ModuleProjectCard} from "../components/Modules";
import {Spacer} from "../components/Spacer";
import {TableSimpleEnumType} from "../components/Table";
import {Row, RowCol} from "../components/Row";
import {ModuleRatingTable} from "../components/Modules";
import {Avatar, AvatarList} from "../components/Avatar";
import {ModuleAuthRegister} from "../components/Modules";
import {HeaderSpacesMenu} from "../components/Menu/HeaderSpacesMenu";

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
    )
    .add("Card Table",
        () => (
            <div style={{padding: 20}}>
                <Row>
                    <RowCol column={4}>
                        <ModuleCardTable
                            card
                            fluid
                            title={"TRANSACTION HISTORY"}
                            list={[
                                {title: "Payment from #1598", subTitle: "Feb 21, 2019, 3:30pm", leftBottom: "Done", icon: "check", leftTop: "300€"},
                                {title: "Payment from #1598", subTitle: "Feb 21, 2019, 3:30pm", leftBottom: "Done", icon: "check", leftTop: "300€", leftBottomColor: "danger"},
                                {title: "Payment from #1598", subTitle: "Feb 21, 2019, 3:30pm", leftBottom: "Done", icon: "check", leftTop: "300€"},
                                {title: "Payment from #1598", subTitle: "Feb 21, 2019, 3:30pm", leftBottom: "Done", icon: "check", leftTop: "300€"},
                                {title: "Payment from #1598", subTitle: "Feb 21, 2019, 3:30pm", leftBottom: "Done", icon: "check", leftTop: "300€"},
                            ]}
                        />
                    </RowCol>
                </Row>
            </div>
        )
    );
storiesOf("Modules|Projects", module)
    .addDecorator(jsxDecorator)
    .addDecorator(withKnobs)
    .add("Cards",
        () => (
            <div style={{padding: 20}}>
                <Row>
                    <RowCol column={3}>
                        <ModuleProjectCard
                            title={"New Admin Design"}
                            tags={[
                                {label: "REDUX", style: {backgroundColor: "red"}},
                            ]}
                            description={"Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!"}
                            progress={{
                                value: 75,
                                label: "Progress"
                            }}
                            list={[
                                {left: "Created:", right: "09 Jun 2019 11:32AM"},
                                {left: "Creator:", right: "Nathan Guerrero"},
                                {left: "Question:", right: "23"},
                                {left: "Comments:", right: "32"},
                                {left: "Bug:", right: "5"},
                                {
                                    left: "Team:", right: (
                                        <AvatarList>
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                        </AvatarList>
                                    )
                                },
                            ]}
                            show={true}
                        />
                    </RowCol>
                    <RowCol column={3}>
                        <ModuleProjectCard
                            title={"New Admin Design"}
                            tags={[
                                {label: "REDUX", style: {backgroundColor: "red"}},
                            ]}
                            description={"Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!"}
                            progress={{
                                value: 75,
                                label: "Progress"
                            }}
                            list={[
                                {left: "Created:", right: "09 Jun 2019 11:32AM"},
                                {left: "Creator:", right: "Nathan Guerrero"},
                                {left: "Question:", right: "23"},
                                {left: "Comments:", right: "32"},
                                {left: "Bug:", right: "5"},
                                {
                                    left: "Team:", right: (
                                        <AvatarList>
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                        </AvatarList>
                                    )
                                },
                            ]}
                            show={true}
                        />
                    </RowCol>
                    <RowCol column={3}>
                        <ModuleProjectCard
                            title={"New Admin Design"}
                            tags={[
                                {label: "REDUX", style: {backgroundColor: "red"}},
                            ]}
                            description={"Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!"}
                            progress={{
                                value: 75,
                                label: "Progress"
                            }}
                            list={[
                                {left: "Created:", right: "09 Jun 2019 11:32AM"},
                                {left: "Creator:", right: "Nathan Guerrero"},
                                {left: "Question:", right: "23"},
                                {left: "Comments:", right: "32"},
                                {left: "Bug:", right: "5"},
                                {
                                    left: "Team:", right: (
                                        <AvatarList>
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                        </AvatarList>
                                    )
                                },
                            ]}
                            show={true}
                        />
                    </RowCol>
                    <RowCol column={3}>
                        <ModuleProjectCard
                            title={"New Admin Design"}
                            tags={[
                                {label: "REDUX", style: {backgroundColor: "red"}},
                            ]}
                            description={"Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!"}
                            progress={{
                                value: 75,
                                label: "Progress"
                            }}
                            list={[
                                {left: "Created:", right: "09 Jun 2019 11:32AM"},
                                {left: "Creator:", right: "Nathan Guerrero"},
                                {left: "Question:", right: "23"},
                                {left: "Comments:", right: "32"},
                                {left: "Bug:", right: "5"},
                                {
                                    left: "Team:", right: (
                                        <AvatarList>
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                        </AvatarList>
                                    )
                                },
                            ]}
                            show={true}
                        />
                    </RowCol>
                    <RowCol column={3}>
                        <ModuleProjectCard
                            title={"New Admin Design"}
                            tags={[
                                {label: "REDUX", style: {backgroundColor: "red"}},
                            ]}
                            description={"Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!"}
                            progress={{
                                value: 75,
                                label: "Progress"
                            }}
                            list={[
                                {left: "Created:", right: "09 Jun 2019 11:32AM"},
                                {left: "Creator:", right: "Nathan Guerrero"},
                                {left: "Question:", right: "23"},
                                {left: "Comments:", right: "32"},
                                {left: "Bug:", right: "5"},
                                {
                                    left: "Team:", right: (
                                        <AvatarList>
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                        </AvatarList>
                                    )
                                },
                            ]}
                            show={true}
                        />
                    </RowCol>
                    <RowCol column={3}>
                        <ModuleProjectCard
                            title={"New Admin Design"}
                            tags={[
                                {label: "REDUX", style: {backgroundColor: "red"}},
                            ]}
                            description={"Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!"}
                            progress={{
                                value: 75,
                                label: "Progress"
                            }}
                            list={[
                                {left: "Created:", right: "09 Jun 2019 11:32AM"},
                                {left: "Creator:", right: "Nathan Guerrero"},
                                {left: "Question:", right: "23"},
                                {left: "Comments:", right: "32"},
                                {left: "Bug:", right: "5"},
                                {
                                    left: "Team:", right: (
                                        <AvatarList>
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                        </AvatarList>
                                    )
                                },
                            ]}
                            show={true}
                        />
                    </RowCol>
                    <RowCol column={3}>
                        <ModuleProjectCard
                            title={"New Admin Design"}
                            tags={[
                                {label: "REDUX", style: {backgroundColor: "red"}},
                            ]}
                            description={"Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!"}
                            progress={{
                                value: 75,
                                label: "Progress"
                            }}
                            list={[
                                {left: "Created:", right: "09 Jun 2019 11:32AM"},
                                {left: "Creator:", right: "Nathan Guerrero"},
                                {left: "Question:", right: "23"},
                                {left: "Comments:", right: "32"},
                                {left: "Bug:", right: "5"},
                                {
                                    left: "Team:", right: (
                                        <AvatarList>
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                        </AvatarList>
                                    )
                                },
                            ]}
                            show={true}
                        />
                    </RowCol>
                    <RowCol column={3}>
                        <ModuleProjectCard
                            title={"New Admin Design"}
                            tags={[
                                {label: "REDUX", style: {backgroundColor: "red"}},
                            ]}
                            description={"Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!"}
                            progress={{
                                value: 75,
                                label: "Progress"
                            }}
                            list={[
                                {left: "Created:", right: "09 Jun 2019 11:32AM"},
                                {left: "Creator:", right: "Nathan Guerrero"},
                                {left: "Question:", right: "23"},
                                {left: "Comments:", right: "32"},
                                {left: "Bug:", right: "5"},
                                {
                                    left: "Team:", right: (
                                        <AvatarList>
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                        </AvatarList>
                                    )
                                },
                            ]}
                            show={true}
                        />
                    </RowCol>
                    <RowCol column={3}>
                        <ModuleProjectCard
                            title={"New Admin Design"}
                            tags={[
                                {label: "REDUX", style: {backgroundColor: "red"}},
                            ]}
                            description={"Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!"}
                            progress={{
                                value: 75,
                                label: "Progress"
                            }}
                            list={[
                                {left: "Created:", right: "09 Jun 2019 11:32AM"},
                                {left: "Creator:", right: "Nathan Guerrero"},
                                {left: "Question:", right: "23"},
                                {left: "Comments:", right: "32"},
                                {left: "Bug:", right: "5"},
                                {
                                    left: "Team:", right: (
                                        <AvatarList>
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                        </AvatarList>
                                    )
                                },
                            ]}
                            show={true}
                        />
                    </RowCol>
                    <RowCol column={3}>
                        <ModuleProjectCard
                            title={"New Admin Design"}
                            tags={[
                                {label: "REDUX", style: {backgroundColor: "red"}},
                            ]}
                            description={"Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!"}
                            progress={{
                                value: 75,
                                label: "Progress"
                            }}
                            list={[
                                {left: "Created:", right: "09 Jun 2019 11:32AM"},
                                {left: "Creator:", right: "Nathan Guerrero"},
                                {left: "Question:", right: "23"},
                                {left: "Comments:", right: "32"},
                                {left: "Bug:", right: "5"},
                                {
                                    left: "Team:", right: (
                                        <AvatarList>
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                        </AvatarList>
                                    )
                                },
                            ]}
                            show={true}
                        />
                    </RowCol>
                    <RowCol column={3}>
                        <ModuleProjectCard
                            title={"New Admin Design"}
                            tags={[
                                {label: "REDUX", style: {backgroundColor: "red"}},
                            ]}
                            description={"Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!"}
                            progress={{
                                value: 75,
                                label: "Progress"
                            }}
                            list={[
                                {left: "Created:", right: "09 Jun 2019 11:32AM"},
                                {left: "Creator:", right: "Nathan Guerrero"},
                                {left: "Question:", right: "23"},
                                {left: "Comments:", right: "32"},
                                {left: "Bug:", right: "5"},
                                {
                                    left: "Team:", right: (
                                        <AvatarList>
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                        </AvatarList>
                                    )
                                },
                            ]}
                            show={true}
                        />
                    </RowCol>
                    <RowCol column={3}>
                        <ModuleProjectCard
                            title={"New Admin Design"}
                            tags={[
                                {label: "REDUX", style: {backgroundColor: "red"}},
                            ]}
                            description={"Aperiam deleniti fugit incidunt, iste, itaque minima neque pariatur perferendis temporibus!"}
                            progress={{
                                value: 75,
                                label: "Progress"
                            }}
                            list={[
                                {left: "Created:", right: "09 Jun 2019 11:32AM"},
                                {left: "Creator:", right: "Nathan Guerrero"},
                                {left: "Question:", right: "23"},
                                {left: "Comments:", right: "32"},
                                {left: "Bug:", right: "5"},
                                {
                                    left: "Team:", right: (
                                        <AvatarList>
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                            <Avatar
                                                name={text("name", "Rafael gonzalez muñoz")}
                                                fluid={boolean("fluid", false)}
                                                size={number("size", 30)}
                                                image={"http://www.liberterre.fr/metahistoire/espagnol/neytirisaldana.jpg"}
                                            />
                                        </AvatarList>
                                    )
                                },
                            ]}
                            show={true}
                        />
                    </RowCol>
                </Row>
            </div>
        )
    );
storiesOf("Modules|Auth", module)
    .addDecorator(jsxDecorator)
    .addDecorator(withKnobs)
    .add("Login",
        () => (
            <div style={{padding: 20, width: 400}}>
                <ModuleAuthLogin
                    logo={"https://www.musicosdelmundo.com/static/images/logo_mobile.png"}
                    title={"LOGIN TO YOUR ACCOUNT"}
                    form={{
                        email: {value: "", placeholder: "Email", onChange: console.log},
                        password: {value: "", placeholder: "Password", onChange: console.log},
                        button: {
                            label: "Sign in",
                            color: "primary",
                            block: true,
                        }
                    }}
                />
            </div>
        )
    )
    .add("Register",
        () => (
            <div style={{padding: 20, width: 400}}>
                <ModuleAuthRegister
                    title={"REGISTER TO YOUR ACCOUNT"}
                    form={{
                        email: {value: "", placeholder: "Email", onChange: console.log},
                        password: {value: "", placeholder: "Password", onChange: console.log},
                        name: {value: "", placeholder: "Name", onChange: console.log},
                        button: {
                            label: "Sign in",
                            color: "primary",
                            block: true,
                        }
                    }}
                    size={"m"}
                    logo={"https://www.musicosdelmundo.com/static/images/logo_mobile.png"}
                />
            </div>
        )
    );
storiesOf("Modules|Header", module)
    .addDecorator(jsxDecorator)
    .addDecorator(withKnobs)
    .add("HeaderSpacesMenu",
        () => (
            <div style={{padding: 20, width: 400}}>
                <HeaderSpacesMenu
                    spaces={[
                        {
                            label: 'Sales team',
                            prepend: <Avatar fluid type="space" name="Sales Team" size={35}/>,
                            checked: 'on',
                        },
                        {
                            label: 'Engineering',
                            prepend: <Avatar fluid type="space" name="Engineering" size={35}/>,
                        },
                        {
                            label: 'Security',
                            prepend: <Avatar fluid type="space" name="Security" size={35}/>,
                        },
                        {
                            label: 'Default',
                            prepend: <Avatar fluid type="space" name="Default" size={35}/>,
                        },
                    ]}
                    additionalSpaces={[
                        {
                            label: 'Sales team 2',
                            prepend: <Avatar fluid type="space" name="Sales Team 2" size={35}/>,
                        },
                        {
                            label: 'Engineering 2',
                            prepend: <Avatar fluid type="space" name="Engineering 2" size={35}/>,
                        },
                        {
                            label: 'Security 2',
                            prepend: <Avatar fluid type="space" name="Security 2" size={35}/>,
                        },
                        {
                            label: 'Default 2',
                            prepend: <Avatar fluid type="space" name="Default 2" size={35}/>,
                        },
                    ]}
                />
            </div>
        )
    );
