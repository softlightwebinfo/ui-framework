import * as React from 'react'
import {storiesOf} from "@storybook/react";
import {withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {Row, RowCol} from "../components/Row";
import {SocialIcons} from "../components/Social";

storiesOf("Layout|Socials", module)
    .addDecorator(jsxDecorator)
    .addDecorator(withKnobs)
    .add("Default",
        () => (
            <div style={{padding: 20, backgroundColor: "white"}}>
                <Row>
                    <RowCol>
                        <SocialIcons
                            socials={[
                                {icon: "facebook"},
                                {icon: "twitter"},
                                {icon: "phone"},
                                {icon: "skype"},
                            ]}
                        />
                    </RowCol>
                </Row>
            </div>
        )
    );
