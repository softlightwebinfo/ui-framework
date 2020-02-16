import React from 'react';
import classNames from 'classnames';

export const RangeHighlight: ({hasFocus, showTicks, lowerValue, upperValue, max, min}: {
    hasFocus?: any; showTicks?: any; lowerValue?: any; upperValue?: any; max?: any; min?: any
}) => any = ({hasFocus, showTicks, lowerValue, upperValue, max, min}) => {
    // Calculate the width the range based on value
    // const rangeWidth = (value - min) / (max - min);
    const leftPosition = (lowerValue - min) / (max - min);
    const rangeWidth = (upperValue - lowerValue) / (max - min);
    const rangeWidthStyle = {
        marginLeft: `${leftPosition * 100}%`,
        width: `${rangeWidth * 100}%`
    };

    const classes = classNames('c-range-highlight', {
        'c-range-highlight--hasTicks': showTicks
    });

    const progressClasses = classNames('c-range-highlight__progress', {
        'c-range-highlight__progress--hasFocus': hasFocus
    });

    return (
        <div className={classes}>
            <div className={progressClasses} style={rangeWidthStyle}/>
        </div>
    );
};
