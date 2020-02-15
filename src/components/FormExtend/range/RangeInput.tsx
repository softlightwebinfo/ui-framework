import React from 'react';
import PropTypes from 'prop-types';

import {FieldNumber} from '../field_number';

export const RangeInput: ({min, max, step, value, disabled, compressed, onChange, name, side, digitTolerance, ...rest}: {
  min?: any; max?: any; step?: any; value?: any; disabled?: any; compressed?: any; onChange?: any; name?: any; side?: any; digitTolerance?: any; [p: string]: any
}) => any = (
  {
    min,
    max,
    step,
    value,
    disabled,
    compressed,
    onChange,
    name,
    side,
    digitTolerance,
    ...rest
  }
) => {

  // Chrome will properly size the input based on the max value, but FF & IE do not.
  // Calculate the width of the input based on highest number of characters.
  // Add 2 to accomodate for input stepper
  const widthStyle = {width: `${(digitTolerance / 1.25) + 2}em`};

  return (
    <FieldNumber
      name={name}
      className={`softRangeInput softRangeInput--${side}`}
      min={Number(min)}
      max={Number(max)}
      step={step}
      value={value === '' ? '' : Number(value)}
      disabled={disabled}
      compressed={compressed}
      onChange={onChange}
      style={widthStyle}
      {...rest}
    />
  );
};

// @ts-ignore
RangeInput.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  compressed: PropTypes.bool,
  onChange: PropTypes.func,
  name: PropTypes.string,
  digitTolerance: PropTypes.number.isRequired,
  side: PropTypes.oneOf(['min', 'max'])
};
// @ts-ignore
RangeInput.defaultProps = {
  side: 'max'
};
