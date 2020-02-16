import React from 'react';
import classNames from 'classnames';

export const LEVEL_COLORS = ['primary', 'success', 'warning', 'danger'];

export const RangeWrapper = (
    {
        children,
        className,
        fullWidth
    }
) => {

    const classes = classNames(
        'c-range-wrapper',
        {
            'c-range-wrapper--fullWidth': fullWidth
        },
        className
    );

    return (
        <div className={classes}>
            {children}
        </div>
    );
};
