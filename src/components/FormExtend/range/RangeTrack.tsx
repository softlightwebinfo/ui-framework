import React, {Component} from 'react';
import classNames from 'classnames';

import range from 'lodash/range';

import {isEvenlyDivisibleBy} from '../../../services';
import {RangeLevels, LEVEL_COLORS} from './RangeLevels';
import {RangeTicks} from './RangeTicks';

export {LEVEL_COLORS};

export class RangeTrack extends Component<{
    min?: any;
    step?: any;
    children?: any,
    disabled?: any,
    max?: any,
    showTicks?: any,
    tickInterval?: any,
    ticks?: any,
    levels?: any,
    onChange?: any,
    value?: any
}> {
    validateValueIsInStep = (value) => {
        if (value < this.props.min) {
            throw new Error(`The value of ${value} is lower than the min value of ${this.props.min}.`);
        }
        if (value > this.props.max) {
            throw new Error(`The value of ${value} is higher than the max value of ${this.props.max}.`);
        }
        // Error out if the value doesn't line up with the sequence of steps
        if (!isEvenlyDivisibleBy(value - this.props.min, this.props.step !== undefined ? this.props.step : 1)) {
            throw new Error(`The value of ${value} is not included in the possible sequence provided by the step of ${this.props.step}.`);
        }
        // Return the value if nothing fails
        return value;
    }


    calculateSequence = (min, max, interval) => {
        // Loop from min to max, creating adding values at each interval
        // (adds a very small number to the max since `range` is not inclusive of the max value)
        const toBeInclusive = .000000001;
        return range(min, max + toBeInclusive, interval);
    }

    calculateTicks = (min, max, step, tickInterval, customTicks) => {
        let ticks;

        if (customTicks) {
            // If custom values were passed, use those for the sequence
            // But make sure they align with the possible sequence
            ticks = customTicks.map(tick => {
                return this.validateValueIsInStep(tick.value);
            });
        } else {
            // If a custom interval was passed, use those for the sequence
            // But make sure they align with the possible sequence
            const interval = tickInterval || step;
            const tickSequence = this.calculateSequence(min, max, interval);

            ticks = tickSequence.map(tick => {
                return this.validateValueIsInStep(tick);
            });
        }

        // Error out if there are too many ticks to render
        if (ticks.length > 20) {
            throw new Error(`The number of ticks to render is too high (${ticks.length}), reduce the interval.`);
        }

        return ticks;
    }
    static propTypes: {};

    render() {
        const {
            children,
            disabled,
            max,
            min,
            step,
            showTicks,
            tickInterval,
            ticks,
            levels,
            onChange,
            value
        } = this.props;

        // TODO: Move these to only re-calculate if no-value props have changed
        this.validateValueIsInStep(max);

        let tickSequence;
        const inputWrapperStyle = {};
        if (showTicks) {
            tickSequence = this.calculateTicks(min, max, step, tickInterval, ticks);

            // Calculate if any extra margin should be added to the inputWrapper
            // because of longer tick labels on the ends
            const lengthOfMinLabel = String(tickSequence[0]).length;
            const lenghtOfMaxLabel = String(tickSequence[tickSequence.length - 1]).length;
            const isLastTickTheMax = tickSequence[tickSequence.length - 1] === max;
            if (lengthOfMinLabel > 2) {
                // @ts-ignore
                inputWrapperStyle.marginLeft = `${(lengthOfMinLabel / 5)}em`;
            }
            if (isLastTickTheMax && lenghtOfMaxLabel > 2) {
                // @ts-ignore
                inputWrapperStyle.marginRight = `${(lenghtOfMaxLabel / 5)}em`;
            }
        }

        const trackClasses = classNames('c-range-track', {
            'c-range-track--disabled': disabled
        });

        return (
            <div className={trackClasses} style={inputWrapperStyle}>
                {children}
                {levels && !!levels.length && (
                    <RangeLevels
                        levels={levels}
                        max={max}
                        min={min}
                        showTicks={showTicks}
                    />
                )}
                {tickSequence && (
                    <RangeTicks
                        disabled={disabled}
                        onChange={onChange}
                        ticks={ticks}
                        tickSequence={tickSequence}
                        value={value}
                        min={min}
                        max={max}
                        interval={tickInterval || step}
                    />
                )}
            </div>
        );
    }
}
