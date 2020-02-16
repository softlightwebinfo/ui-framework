import React from 'react';
import classNames from 'classnames';
import find from 'lodash/find';
export const RangeTicks: ({disabled, onChange, ticks, tickSequence, value, max, min, interval}: {
    disabled?: any; onChange?: any; ticks?: any; tickSequence?: any; value?: any; max?: any; min?: any; interval?: any
}) => any = (
    {
        disabled,
        onChange,
        ticks,
        tickSequence,
        value,
        max,
        min,
        interval,
    }
) => {
    // Calculate the width of each tick mark
    const percentageWidth = (interval / ((max - min) + interval)) * 100;

    // Align with item labels across the range by adding
    // left and right negative margins that is half of the tick marks
    const ticksStyle = !!ticks
        ? undefined
        : {margin: `0 ${percentageWidth / -2}%`, left: 0, right: 0};

    return (
        <div className="c-range-ticks" style={ticksStyle}>
            {tickSequence.map(tickValue => {
                const tickStyle = {};
                let customTick;
                if (ticks) {
                    customTick = find(ticks, o => o.value === tickValue);

                    if (customTick) {
                        // @ts-ignore
                        tickStyle.left = `${((customTick.value - min) / (max - min)) * 100}%`;
                    }
                } else {
                    // @ts-ignore
                    tickStyle.width = `${percentageWidth}%`;
                }

                const tickClasses = classNames('c-range-tick', {
                    'c-range-tick--selected': value === tickValue,
                    'c-range-tick--isCustom': customTick,
                });

                const label = customTick ? customTick.label : tickValue;

                return (
                    <button
                        type="button"
                        className={tickClasses}
                        key={tickValue}
                        value={tickValue}
                        disabled={disabled}
                        onClick={onChange}
                        style={tickStyle}
                        tabIndex={-1}
                        title={label}
                    >
                        {label}
                    </button>
                );
            })}
        </div>
    );
};
