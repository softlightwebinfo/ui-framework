import * as React from 'react'
import {storiesOf} from "@storybook/react";
import {boolean, withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {ModuleProgressContent} from "../components/Modules";
import {Spacer} from "../components/Spacer";

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
    );
