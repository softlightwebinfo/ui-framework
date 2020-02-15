import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const RangeLabel: ({children, disabled, side}: { children?: any; disabled?: any; side?: any }) => any = ({children, disabled, side}) => {
  const classes = classNames('softRangeLabel', `softRangeLabel--${side}`, {
    'softRangeLabel--isDisabled': disabled
  });
  return (
    <label className={classes}>
      {children}
    </label>
  );
};

// @ts-ignore
RangeLabel.propTypes = {
  side: PropTypes.oneOf(['min', 'max'])
};
// @ts-ignore
RangeLabel.defaultProps = {
  side: 'max'
};
