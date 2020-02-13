import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {boolean, withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {Page} from "../components/Page";
import {Card} from "../components/Card";
import {ModulePageAuthLogin} from "../components/Modules";
import {Spacer} from "../components/Spacer";
import {ModulePageAuthRegister} from "../components/Modules/ModulePageAuthRegister";
import {CarouselText} from "../components/Carousel";

storiesOf("Page|Section", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => (
            <Page>
                <div style={{padding: 80, backgroundColor: "red", color: "white", width: "100%"}}>Hello</div>
            </Page>
        )
    )
    .add("Left",
        () => (
            <Page
                left={(
                    <Card>
                        Hello
                    </Card>
                )}
            >

            </Page>
        )
    )
    .add("Right",
        () => (
            <Page
                right={(
                    <Card>
                        Hello
                    </Card>
                )}
            >
            </Page>
        )
    )
    .add("All",
        () => (
            <Page
                left={(
                    <Card>
                        Hello
                    </Card>
                )}
                right={(
                    <Card>
                        Hello
                    </Card>
                )}
            >
                Hello
            </Page>
        )
    );
storiesOf("Page|Auth", module)
    .addDecorator(jsxDecorator)
    .addDecorator(withKnobs)
    .add("Login",
        () => (
            <ModulePageAuthLogin
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
                size={"m"}
                logo={"https://www.musicosdelmundo.com/static/images/logo_mobile.png"}
                right={(
                    <CarouselText
                        showIndicators={boolean("showIndicators", false)}
                        showArrows={boolean("showArrows", false)}
                        auto
                        isContainer
                        slides={[
                            {
                                content:
                                    "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
                                author: "Bane",
                                source: "facebook"
                            }, {
                                content:
                                    "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
                                author: "Ra's Al Ghul",
                                source: "Snapchat"
                            }, {
                                content:
                                    "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
                                author: "Joker",
                                source: "facebook"
                            }, {
                                content:
                                    "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
                                author: "Bruce Wayne",
                                source: "facebook"
                            }, {
                                content:
                                    "But it's not who you are underneath... it's what you do that defines you.",
                                author: "Rachel Dawes",
                                source: "twitter"
                            }, {
                                content:
                                    "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
                                author: "John Blake",
                                source: "Google+"
                            }, {
                                content:
                                    "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
                                author: "Alfred Pennyworth",
                                source: "twitter"
                            }
                        ]}
                    />
                )}
                authChildren={(
                    <>
                        <Spacer/>
                        <p>Don't have account yet? Sign up</p>
                        <p>I forgot password</p>
                    </>
                )}
            />
        )
    )
    .add("Register",
        () => (
            <ModulePageAuthRegister
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
                right={(
                    <CarouselText
                        showIndicators={boolean("showIndicators", false)}
                        showArrows={boolean("showArrows", false)}
                        auto
                        isContainer
                        slides={[
                            {
                                content:
                                    "Tomorrow, you will be released. If you are bored of brawling with thieves and want to achieve something there is a rare blue flower that grows on the eastern slopes. Pick one of these flowers. If you can carry it to the top of the mountain, you may find what you were looking for in the first place.",
                                author: "Bane",
                                source: "facebook"
                            }, {
                                content:
                                    "You have learn to bury your guilt with anger. I will teach you to confront it and to face the truth.",
                                author: "Ra's Al Ghul",
                                source: "Snapchat"
                            }, {
                                content:
                                    "Introduce a little anarchy, upset the established order and everything becomes chaos. I'm an agent of chaos. Oh, and you know the thing about chaos? It's fair.",
                                author: "Joker",
                                source: "facebook"
                            }, {
                                content:
                                    "I can't do that as Bruce Wayne... as a man. I'm flesh and blood. I can be ignored, destroyed. But as a symbol, I can be incorruptible, I can be everlasting.",
                                author: "Bruce Wayne",
                                source: "facebook"
                            }, {
                                content:
                                    "But it's not who you are underneath... it's what you do that defines you.",
                                author: "Rachel Dawes",
                                source: "twitter"
                            }, {
                                content:
                                    "When their enemies were at the gates the Romans would suspend democracy and appoint one man to protect the city. It wasn't considered an honor, it was a public service.",
                                author: "John Blake",
                                source: "Google+"
                            }, {
                                content:
                                    "Master Wayne, you've been gone a long time. You look very fashionable. Apart from the mud.",
                                author: "Alfred Pennyworth",
                                source: "twitter"
                            }
                        ]}
                    />
                )}
                logo={"https://www.musicosdelmundo.com/static/images/logo_mobile.png"}
                authChildren={(
                    <>
                        <Spacer/>
                        <p>Already have account? Sign in</p>
                    </>
                )}
            />
        )
    )
