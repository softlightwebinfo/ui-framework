import {Component} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface StarsInterfaceProps extends PropsInterface {
    stars: number;
    numberOfStars?: number;
    isHover?: boolean;
    onClick?: (rating: number) => void;
}

export class Stars extends Component<StarsInterfaceProps> {
    state = {
        currentRating: this.props.stars,
    };

    static defaultProps = {
        numberOfStars: 5,
        isHover: true,
    };

    private _rating: HTMLDivElement | null;

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.setRating();
    }

    setRating = () => {
        // @ts-ignore
        const stars = this._rating.getElementsByClassName('star');
        Array.from(stars).forEach(star => {
            // @ts-ignore
            star.style.color = this.state.currentRating >= star.dataset.value ? 'orange' : 'gray';
        });
    };
    hoverHandler = ev => {
        if (!this.props.isHover) return;
        const stars = ev.target.parentElement.getElementsByClassName('star');
        const hoverValue = ev.target.dataset.value;
        Array.from(stars).forEach(star => {
            // @ts-ignore
            star.style.color = hoverValue >= star.dataset.value ? 'orange' : 'gray';
        });
    };
    starClickHandler = ev => {
        let rating = ev.target.dataset.value;
        if (this.props.onClick) {
            this.setState({currentRating: rating}); // set state so the rating stays highlighted
            this.props.onClick(rating); // emit the event up to the parent
        }
    };

    render() {
        const classes = classNames("c-stars", this.props.className, {});
        return (
            <div
                className={classes}
                ref={e => this._rating = e}
                data-rating={this.state.currentRating}
                onMouseOut={this.setRating}
            >
                {
                    Object.keys([...Array(this.props.numberOfStars)]).map(n => {
                        return (
                            <span
                                className="star"
                                key={n + 1}
                                data-value={n + 1}
                                onMouseOver={this.hoverHandler}
                                onClick={this.starClickHandler}
                            >
                          &#9733;
                        </span>
                        );
                    })}
            </div>
        )
    }
}
