import React from 'react';
import classNames from 'classnames';

export const RangeLabel: ({children, disabled, side}: { children?: any; disabled?: any; side?: any }) => any = ({children, disabled, side}) => {
    const classes = classNames('c-range-label', `c-range-label--${side}`, {
        'c-range-label--isDisabled': disabled
    });
    return (
        <label className={classes}>
            {children}
        </label>
    );
};
// @ts-ignore
RangeLabel.defaultProps = {
    side: 'max'
};
