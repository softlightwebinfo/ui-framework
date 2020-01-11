import * as React from 'react'
import {storiesOf} from "@storybook/react";
import {boolean, text, withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {Card} from "../components/Card";
import {Button} from "../components/Button";

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
                        <img alt="Card" src='https://image.shutterstock.com/image-vector/lock-icon-user-card-key-600w-1135103882.jpg'/>
                    )}
                >
                    <div>{text("body", `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis esse, cupiditate neque quas!`)}</div>
                </Card>
            </div>
        )
    );
