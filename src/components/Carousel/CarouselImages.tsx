import {PureComponent} from "react";
import * as React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import {Carousel, CarouselInterfaceProps} from "./Carousel";
import {CarouselSlideImage, CarouselSlideImageInterfacePropsSlide} from "./CarouselSlideImage";

export interface CarouselImagesInterfaceProps extends PropsInterface, CarouselInterfaceProps {
    slides: CarouselSlideImageInterfacePropsSlide[];
    height?: number;
}


export class CarouselImages extends PureComponent<CarouselImagesInterfaceProps> {
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
                className={[
                    this.props.className,
                    "c-carousel-images"
                ].join(" ")}
                auto={this.props.auto}
                autoTime={this.props.autoTime}
                isContainer={this.props.isContainer}
            >
                {(item) => {
                    return this.props.slides.map((slide, index) =>
                        <CarouselSlideImage
                            style={{
                                height: this.props.height,
                            }}
                            key={index}
                            index={index}
                            activeIndex={item.state.activeIndex}
                            title={slide.title}
                            image={slide.image}
                        />
                    )
                }}
            </Carousel>
        );
    }
}

