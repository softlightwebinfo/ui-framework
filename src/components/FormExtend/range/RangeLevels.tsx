import React from 'react';
import classNames from 'classnames';

export const LEVEL_COLORS = ['primary', 'success', 'warning', 'danger'];

export const RangeLevels: ({levels, max, min, showTicks}: { levels?: any; max?: any; min?: any; showTicks?: any }) => any = ({levels, max, min, showTicks}) => {
    const validateLevelIsInRange = (level) => {
        if (level.min < min) {
            throw new Error(`The level min of ${level.min} is lower than the min value of ${min}.`);
        }
        if (level.max > max) {
            throw new Error(`The level max of ${level.max} is higher than the max value of ${max}.`);
        }
    };

    const classes = classNames('c-range-labels', {
        'c-range-labels--hasTicks': showTicks
    });

    return (
        <div className={classes}>
            {levels.map((level, index) => {
                validateLevelIsInRange(level);
                const range = level.max - level.min;
                const width = (range / (max - min)) * 100;

                return (
                    <span key={index} style={{width: `${width}%`}} className={`c-range-label c-range-label--${level.color}`}/>
                );
            })}
        </div>
    );
};
