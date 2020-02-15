import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

export const Radio: ({className, id, name, checked, label, value, onChange, disabled, compressed, autoFocus, ...rest}: {
  className?: any; id?: any; name?: any; checked?: any; label?: any; value?: any; onChange?: any; disabled?: any; compressed?: any; autoFocus?: any; [p: string]: any
}) => any = (
  {
    className,
    id,
    name,
    checked,
    label,
    value,
    onChange,
    disabled,
    compressed,
    autoFocus,
    ...rest
  }
) => {
  const classes = classNames(
    'softRadio',
    {
      'softRadio--noLabel': !label,
      'softRadio--compressed': compressed,
    },
    className
  );

  let optionalLabel;

  if (label) {
    optionalLabel = (
      <label
        className="softRadio__label"
        htmlFor={id}
      >
        {label}
      </label>
    );
  }

  return (
    <div
      className={classes}
      {...rest}
    >
      <input
        className="softRadio__input"
        type="radio"
        id={id}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        autoFocus={autoFocus}
      />

      <div className="softRadio__circle"/>

      {optionalLabel}
    </div>
  );
};

// @ts-ignore
Radio.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  label: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  /**
   * when `true` creates a shorter height radio row
   */
  compressed: PropTypes.bool,
  autoFocus: PropTypes.bool,
};

// @ts-ignore
Radio.defaultProps = {
  checked: false,
  disabled: false,
  compressed: false,
};
