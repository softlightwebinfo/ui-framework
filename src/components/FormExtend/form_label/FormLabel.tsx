import React from 'react';
import classNames from 'classnames';

export const SoftFormLabel: ({type, isFocused, isInvalid, children, className, ...rest}: {
  type?: any; isFocused?: any; isInvalid?: any; children?: any; className?: any; [p: string]: any
}) => (any | any) = (
  {
    type = 'label',
    isFocused,
    isInvalid,
    children,
    className,
    ...rest
  }
) => {
  const classes = classNames('softFormLabel', className, {
    'softFormLabel-isFocused': isFocused,
    'softFormLabel-isInvalid': isInvalid,
  });

  if (type === 'legend') {
    return (
      <legend
        className={classes}
        {...rest}>
        {children}
      </legend>
    );
  } else {
    return (
      <label
        className={classes}
        {...rest}>
        {children}
      </label>
    );
  }
};
