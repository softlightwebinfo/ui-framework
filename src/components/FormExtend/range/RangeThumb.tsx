import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const RangeThumb: ({min, max, value, disabled, showInput, showTicks, ...rest}: {
  min?: any; max?: any; value?: any; disabled?: any; showInput?: any; showTicks?: any; [p: string]: any
}) => any = ({min, max, value, disabled, showInput, showTicks, ...rest}) => {
  const classes = classNames(
    'softRangeThumb',
    {
      'softRangeThumb--hasTicks': showTicks
    },
  );
  return (
    <div
      className={classes}
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={Number(value)}
      aria-disabled={!!disabled}
      tabIndex={(showInput || !!disabled) ? -1 : 0}
      {...rest}
    />
  );
};

// @ts-ignore
RangeThumb.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  showInput: PropTypes.bool,
  showTicks: PropTypes.bool,
};
