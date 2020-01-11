import * as React from 'react'
import {storiesOf} from "@storybook/react";
import {text, withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {ContentSection} from "../components/ContentSection";
import {FeatureIntro} from "../components/FeatureIntro";

storiesOf("Layout|Sections", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <div style={{padding: 20}}>
                <ContentSection>
                    <FeatureIntro
                        title={text("title", "Checkbox")}
                        subTitle={text("subtitle", "Checkbox is an extension to standard checkbox element with skinning capabilities.")}
                    />
                </ContentSection>
            </div>
        )
    );
