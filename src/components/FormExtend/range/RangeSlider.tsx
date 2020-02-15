import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const RangeSlider: React.ComponentType<{ hasFocus?: any; onChange?: any; style?: any; value?: any; showRange?: any; id?: any; showTicks?: any; max?: any; className?: any; tabIndex?: any; name?: any; disabled?: any; step?: any; min?: any } & React.ClassAttributes<any>> = React.forwardRef((
  {
    className,
    disabled,
    id,
    max,
    min,
    name,
    step,
    onChange,
    tabIndex,
    value,
    style,
    showTicks,
    showRange,
    hasFocus,
    ...rest
  }, ref) => {
  const classes = classNames('softRangeSlider', {
    'softRangeSlider--hasTicks': showTicks,
    'softRangeSlider--hasFocus': hasFocus,
    'softRangeSlider--hasRange': showRange,
  }, className);
  return (
    <input
      ref={ref}
      type="range"
      id={id}
      name={name}
      className={classes}
      min={min}
      max={max}
      step={step}
      value={value}
      disabled={disabled}
      onChange={onChange}
      style={style}
      tabIndex={tabIndex}
      {...rest}
    />
  );
});

RangeSlider.propTypes = {
  id: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  name: PropTypes.string,
  step: PropTypes.number,
  onChange: PropTypes.func,
  tabIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string]))
  ]),
  hasFocus: PropTypes.bool,
  showRange: PropTypes.bool,
};
