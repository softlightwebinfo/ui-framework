import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  SoftFormControlLayout,
} from '../form_control_layout';

import {
  SoftValidatableControl,
} from '../validatable_control';

export const FieldPassword: ({className, id, name, placeholder, value, isInvalid, fullWidth, isLoading, compressed, inputRef, ...rest}: {
  className?: any; id?: any; name?: any; placeholder?: any;
  value?: any; isInvalid?: any; fullWidth?: any; isLoading?: boolean;
  compressed?: any; inputRef?: any; [p: string]: any
}) => any = (
  {
    className,
    id,
    name,
    placeholder,
    value,
    isInvalid,
    fullWidth,
    isLoading,
    compressed,
    inputRef,
    ...rest
  }
) => {
  const classes = classNames(
    'softFieldPassword',
    {
      'softFieldPassword--fullWidth': fullWidth,
      'softFieldPassword--compressed': compressed,
      'softFieldPassword-isLoading': isLoading,
    },
    className
  );

  return (
    <SoftFormControlLayout
      icon="lock"
      fullWidth={fullWidth}
      isLoading={isLoading}
      compressed={compressed}
    >
      <SoftValidatableControl isInvalid={isInvalid}>
        <input
          type="password"
          id={id}
          name={name}
          placeholder={placeholder}
          className={classes}
          value={value}
          ref={inputRef}
          {...rest}
        />
      </SoftValidatableControl>
    </SoftFormControlLayout>
  );
};

// @ts-ignore
FieldPassword.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  isInvalid: PropTypes.bool,
  fullWidth: PropTypes.bool,
  inputRef: PropTypes.func,
  isLoading: PropTypes.bool,
  /**
   * when `true` creates a shorter height input
   */
  compressed: PropTypes.bool,
};

// @ts-ignore
FieldPassword.defaultProps = {
  value: undefined,
  fullWidth: false,
  isLoading: false,
  compressed: false,
};
