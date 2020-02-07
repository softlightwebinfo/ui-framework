import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface ProgressRadialInterfaceProps extends PropsInterface {
    value: number;
    strokeWidth: number;
    size: number;
    color?: string;
}

export class ProgressRadial extends PureComponent<ProgressRadialInterfaceProps> {
    constructor(props) {
        super(props);
    }


    render() {
        const classes = classNames("c-progress-radial", this.props.className, {});
        // Size of the enclosing square
        const sqSize = this.props.size;
        // SVG centers the stroke width on the radius, subtract out so circle fits in square
        const radius = (this.props.size - this.props.strokeWidth) / 2;
        // Enclose cicle in a circumscribing square
        const viewBox = `0 0 ${sqSize} ${sqSize}`;
        // Arc length at 100% coverage is the circle circumference
        const dashArray = radius * Math.PI * 2;
        // Scale 100% coverage overlay with the actual percent
        const dashOffset = dashArray - dashArray * this.props.value / 100;
        return (
            <svg
                className={classes}
                width={this.props.size}
                height={this.props.size}
                viewBox={viewBox}>
                <circle
                    className="c-progress-radial__circle-background"
                    cx={this.props.size / 2}
                    cy={this.props.size / 2}
                    r={radius}
                    strokeWidth={`${this.props.strokeWidth}px`}/>
                <circle
                    className="c-progress-radial__circle-progress"
                    cx={this.props.size / 2}
                    cy={this.props.size / 2}
                    r={radius}
                    strokeWidth={`${this.props.strokeWidth}px`}
                    // Start progress marker at 12 O'Clock
                    transform={`rotate(-90 ${this.props.size / 2} ${this.props.size / 2})`}
                    style={{
                        strokeDasharray: dashArray,
                        strokeDashoffset: dashOffset,
                        stroke: this.props.color,
                    }}/>
                <text
                    className="c-progress-radial__circle-text"
                    x="50%"
                    y="50%"
                    dy=".3em"
                    textAnchor="middle"
                    style={{fill: this.props.color}}
                >
                    {`${this.props.value}%`}
                </text>
            </svg>
        )
    }
}
