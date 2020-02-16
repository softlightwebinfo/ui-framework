import React from 'react';
import classNames from 'classnames';

export const RangeSlider: React.ComponentType<{ hasFocus?: any; onChange?: any; style?: any; value?: any; showRange?: any; id?: any; showTicks?: any; max?: any; className?: any; tabIndex?: any; name?: any; disabled?: any; step?: any; min?: any } & React.ClassAttributes<any>> = React.forwardRef((
    {
        className,
        disabled,
        id,
        max,
        min,
        name,
        step,
        onChange,
        tabIndex,
        value,
        style,
        showTicks,
        showRange,
        hasFocus,
        ...rest
    }, ref) => {
    const classes = classNames('c-range-slider', {
        'c-range-slider--hasTicks': showTicks,
        'c-range-slider--hasFocus': hasFocus,
        'c-range-slider--hasRange': showRange,
    }, className);
    return (
        <input
            ref={ref}
            type="range"
            id={id}
            name={name}
            className={classes}
            min={min}
            max={max}
            step={step}
            value={value}
            disabled={disabled}
            onChange={onChange}
            style={style}
            tabIndex={tabIndex}
            {...rest}
        />
    );
});
