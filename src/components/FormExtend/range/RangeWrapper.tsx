import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const LEVEL_COLORS = ['primary', 'success', 'warning', 'danger'];

export const RangeWrapper = ({
  children,
  className,
  fullWidth
}) => {

  const classes = classNames(
    'softRangeWrapper',
    {
      'softRangeWrapper--fullWidth': fullWidth
    },
    className
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
};

// @ts-ignore
RangeWrapper.propTypes = {
  fullWidth: PropTypes.bool
};
