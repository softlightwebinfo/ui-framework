import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';
import {CarouselLeftArrow} from "./CarouselLeftArrow";
import {CarouselRightArrow} from "./CarouselRightArrow";
import {CarouselIndicator} from "./CarouselIndicator";

export interface CarouselInterfaceProps extends PropsInterface {
    isContainer?: boolean;
    auto?: boolean;
    autoTime?: number;
    showIndicators?: boolean;
    showArrows?: boolean;
    slides: any[];
}

interface Props extends CarouselInterfaceProps {
    children: (item: Carousel) => any;
}

export class Carousel extends PureComponent<Props> {
    private timeout: any;
    static defaultProps = {
        showIndicators: true,
        showArrows: true,
    };

    constructor(props) {
        super(props);

    }

    public state = {
        activeIndex: 0,
    };

    goToSlide = (index) => {
        this.setState({
            activeIndex: index
        });
    };

    goToPrevSlide = (e) => {
        e.preventDefault();

        let index = this.state.activeIndex;
        let {slides} = this.props;
        let slidesLength = slides.length;

        if (index < 1) {
            index = slidesLength;
        }

        --index;

        this.setState({
            activeIndex: index
        });
    };

    goToNextSlide = (e: any = null) => {
        if (e) {
            e.preventDefault();
        }

        let index = this.state.activeIndex;
        let {slides} = this.props;
        let slidesLength = slides.length - 1;

        if (index === slidesLength) {
            index = -1;
        }

        ++index;

        this.setState({
            activeIndex: index
        });
    };

    auto = () => {
        this.goToNextSlide();
    };

    componentDidMount(): void {
        this.start()
    }

    start = () => {
        if (this.props.auto) {
            this.timeout = setInterval(this.auto, this.props.autoTime || 5000);
        }
    };

    mouse = () => {
        clearInterval(this.timeout);
    };

    mouseLeave = () => {
        this.start();
    };

    componentWillUnmount(): void {
        clearInterval(this.timeout);
    }

    render() {
        const classes = classNames("c-carousel", this.props.className, {
            'c-carousel--container': this.props.isContainer,
        });
        return (
            <div className={classes} onMouseLeave={this.mouseLeave} onMouseEnter={this.mouse}>
                {this.props.showArrows && (<CarouselLeftArrow onClick={e => this.goToPrevSlide(e)}/>)}

                <ul className="c-carousel__slides">
                    {this.props.children && this.props.children(this)}
                </ul>

                {this.props.showArrows && (<CarouselRightArrow onClick={e => this.goToNextSlide(e)}/>)}

                {this.props.showIndicators && (
                    <ul className="c-carousel-indicators">
                        {this.props.slides.map((_, index) =>
                            <CarouselIndicator
                                key={index}
                                index={index}
                                activeIndex={this.state.activeIndex}
                                isActive={this.state.activeIndex == index}
                                onClick={() => this.goToSlide(index)}
                            />
                        )}
                    </ul>
                )}
            </div>
        );
    }
}
