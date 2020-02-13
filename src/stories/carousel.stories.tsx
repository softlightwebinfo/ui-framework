import * as React from 'react';
import {storiesOf} from "@storybook/react";
import {boolean, withKnobs} from "@storybook/addon-knobs";
import {jsxDecorator} from "storybook-addon-jsx";
import "../../build/index.css";
import {CarouselImages} from "../components/Carousel/CarouselImages";
import {CarouselText} from "../components/Carousel/CarouselText";

storiesOf("Layout|Carousel", module)
    .addDecorator(withKnobs)
    .addDecorator(jsxDecorator)
    .add("Default",
        () => {
            const carouselSlidesData = [
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
            ];
            return (
                <div style={{padding: 20}}>
                    <CarouselText
                        isContainer
                        slides={carouselSlidesData}
                    />
                </div>
            )
        }
    )
    .add("Auto",
        () => {
            const carouselSlidesData = [
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
            ];
            return (
                <div style={{padding: 20}}>
                    <CarouselText
                        auto
                        isContainer
                        slides={carouselSlidesData}
                    />
                </div>
            )
        }
    )
    .add("Hide arrows",
        () => {
            const carouselSlidesData = [
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
            ];
            return (
                <div style={{padding: 20}}>
                    <CarouselText
                        showIndicators={boolean("showIndicators", false)}
                        showArrows={boolean("showArrows", false)}
                        auto
                        isContainer
                        slides={carouselSlidesData}
                    />
                </div>
            )
        }
    )
    .add("images",
        () => {
            return (
                <div style={{padding: 20}}>
                    <CarouselImages
                        isContainer
                        slides={[
                            {title: "Title", image: "https://050128.com/data/out/155/5337727-image-nature.jpg"},
                            {title: "Title 2", image: "https://hindibate.com/wp/Good-morning-nature-park-image-303.png"},
                        ]}
                    />
                </div>
            )
        }
    );
