import React from 'react';
import PropTypes from 'prop-types';
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

  const classes = classNames('softRangeHighlight', {
    'softRangeHighlight--hasTicks': showTicks
  });

  const progressClasses = classNames('softRangeHighlight__progress', {
    'softRangeHighlight__progress--hasFocus': hasFocus
  });

  return (
    <div className={classes}>
      <div className={progressClasses} style={rangeWidthStyle}/>
    </div>
  );
};

// @ts-ignore
RangeHighlight.propTypes = {
  hasFocus: PropTypes.bool,
  showTicks: PropTypes.bool,
  lowerValue: PropTypes.number.isRequired,
  upperValue: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired
};
