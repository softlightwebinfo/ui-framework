import React, {Component} from 'react';
import classNames from 'classnames';

import {isWithinRange} from '../../../services/number';

import {RangeHighlight} from './RangeHighlight';
import {RangeInput} from './RangeInput';
import {RangeLabel} from './RangeLabel';
import {RangeSlider} from './RangeSlider';
import {RangeTooltip} from './RangeTooltip';
import {RangeTrack} from './RangeTrack';
import {RangeWrapper} from './RangeWrapper';

export class Range extends Component<{
    min?: any;
    max?: any;
    value?: any;
    onChange?: any;
    className?: any,
    compressed?: any,
    disabled?: any,
    fullWidth?: any,
    id?: any,
    name?: any,
    step?: any,
    showLabels?: any,
    showInput?: any,
    showTicks?: any,
    tickInterval?: any,
    ticks?: any, // eslint-disable-line no-unused-vars
    levels?: any,
    showRange?: any,
    showValue?: any,
    valueAppend?: any, // eslint-disable-line no-unused-vars
    valuePrepend?: any, // eslint-disable-line no-unused-vars
    style?: any,
    tabIndex?: any,
}> {
    handleOnChange = (e) => {
        const isValid = isWithinRange(this.props.min, this.props.max, e.target.value);
        this.props.onChange(e, isValid);
    };
    static propTypes: {};
    static defaultProps: {};

    get isValid() {
        return isWithinRange(this.props.min, this.props.max, this.props.value);
    }

    render() {

        const {
            className,
            compressed,
            disabled,
            fullWidth,
            id,
            max,
            min,
            name,
            step,
            showLabels,
            showInput,
            showTicks,
            tickInterval,
            ticks, // eslint-disable-line no-unused-vars
            levels,
            showRange,
            showValue,
            valueAppend, // eslint-disable-line no-unused-vars
            valuePrepend, // eslint-disable-line no-unused-vars
            onChange, // eslint-disable-line no-unused-vars
            value,
            style,
            tabIndex,
            ...rest
        } = this.props;

        const classes = classNames('softRange', className);
        const digitTolerance = Math.max(String(min).length, String(max).length);

        return (
            <RangeWrapper
                className={classes}
                fullWidth={fullWidth}
            >
                {showLabels && <RangeLabel side="min" disabled={disabled}>{min}</RangeLabel>}
                <RangeTrack
                    disabled={disabled}
                    max={max}
                    min={min}
                    step={step}
                    showTicks={showTicks}
                    tickInterval={tickInterval}
                    ticks={ticks}
                    levels={levels}
                    onChange={this.handleOnChange}
                    value={value}
                >
                    <RangeSlider
                        id={id}
                        name={name}
                        min={min}
                        max={max}
                        step={step}
                        value={value}
                        disabled={disabled}
                        onChange={this.handleOnChange}
                        style={style}
                        showTicks={showTicks}
                        showRange={showRange}
                        tabIndex={showInput ? '-1' : (tabIndex || null)}
                        {...rest}
                    />

                    {(showValue && !!String(value).length) && (
                        <RangeTooltip
                            value={value}
                            max={max}
                            min={min}
                            name={name}
                            showTicks={showTicks}
                            valuePrepend={valuePrepend}
                            valueAppend={valueAppend}
                        />
                    )}

                    {(showRange && this.isValid) && (
                        <RangeHighlight
                            showTicks={showTicks}
                            min={Number(min)}
                            max={Number(max)}
                            lowerValue={Number(min)}
                            upperValue={Number(value)}
                        />
                    )}
                </RangeTrack>
                {showLabels && <RangeLabel side="max" disabled={disabled}>{max}</RangeLabel>}
                {showInput && (
                    <RangeInput
                        min={min}
                        max={max}
                        digitTolerance={digitTolerance}
                        step={step}
                        value={value}
                        disabled={disabled}
                        compressed={compressed}
                        onChange={this.handleOnChange}
                        name={name}
                        {...rest}
                    />
                )}
            </RangeWrapper>
        );
    }
}

Range.defaultProps = {
    min: 0,
    max: 100,
    step: 1,
    fullWidth: false,
    compressed: false,
    showLabels: false,
    showInput: false,
    showRange: false,
    showTicks: false,
    showValue: false,
    levels: [],
};
