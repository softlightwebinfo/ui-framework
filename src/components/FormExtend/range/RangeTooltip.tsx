import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const RangeTooltip: ({value, valueAppend, valuePrepend, max, min, name, showTicks}: {
  value?: any; valueAppend?: any; valuePrepend?: any; max?: any; min?: any; name?: any; showTicks?: any
}) => any = ({value, valueAppend, valuePrepend, max, min, name, showTicks}) => {
  // Calculate the left position based on value
  const decimal = (value - min) / (max - min);
  // Must be between 0-100%
  let valuePosition = decimal <= 1 ? decimal : 1;
  valuePosition = valuePosition >= 0 ? valuePosition : 0;

  let valuePositionSide;
  let valuePositionStyle;
  if (valuePosition > .5) {
    valuePositionSide = 'left';
    valuePositionStyle = {right: `${(1 - valuePosition) * 100}%`};
  } else {
    valuePositionSide = 'right';
    valuePositionStyle = {left: `${valuePosition * 100}%`};
  }

  // Change left/right position based on value (half way point)
  const valueClasses = classNames(
    'softRangeTooltip__value',
    `softRangeTooltip__value--${valuePositionSide}`,
    {
      'softRangeTooltip__value--hasTicks': showTicks
    }
  );

  return (
    <div className="softRangeTooltip">
      <output className={valueClasses} htmlFor={name} style={valuePositionStyle}>
        {valuePrepend}{value}{valueAppend}
      </output>
    </div>
  );
};

// @ts-ignore
RangeTooltip.propTypes = {
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  valueAppend: PropTypes.node,
  valuePrepend: PropTypes.node,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  name: PropTypes.string
};
