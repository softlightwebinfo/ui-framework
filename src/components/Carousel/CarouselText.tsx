import {PureComponent} from "react";
import * as React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {Carousel, CarouselInterfaceProps} from "./Carousel";
import {CarouselSlide} from "./CarouselSlide";

export interface CarouselTextInterfaceProps extends PropsInterface, CarouselInterfaceProps {

}


export class CarouselText extends PureComponent<CarouselTextInterfaceProps> {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <Carousel
                slides={this.props.slides}
                showArrows={this.props.showArrows}
                showIndicators={this.props.showIndicators}
                style={this.props.style}
                className={this.props.className}
                auto={this.props.auto}
                autoTime={this.props.autoTime}
                isContainer={this.props.isContainer}
            >
                {(item) => {
                    return this.props.slides.map((slide, index) =>
                        <CarouselSlide
                            key={index}
                            index={index}
                            activeIndex={item.state.activeIndex}
                            content={slide.content}
                            author={slide.author}
                            source={slide.source}
                        />
                    )
                }}
            </Carousel>
        );
    }
}

