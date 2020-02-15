import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {SoftIcon} from '../../Icon';

export const FormControlLayoutCustomIcon: ({className, onClick, type, iconRef, ...rest}: {
  className?: any; onClick?: any; type?: any; iconRef?: any; [p: string]: any
}) => (any | any) = (
  {
    className,
    onClick,
    type,
    iconRef,
    ...rest
  }) => {
  const classes = classNames(
    'softFormControlLayoutCustomIcon',
    className,
    {
      'softFormControlLayoutCustomIcon--clickable': onClick,
    },
  );

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={classes}
        ref={iconRef}
        {...rest}
      >
        <SoftIcon
          className="softFormControlLayoutCustomIcon__icon"
          aria-hidden="true"
          type={type}
        />
      </button>
    );
  }

  return (
    <span
      className={classes}
      ref={iconRef}
      {...rest}
    >
      <SoftIcon
        className="softFormControlLayoutCustomIcon__icon"
        aria-hidden="true"
        type={type}
      />
    </span>
  );
};

// @ts-ignore
FormControlLayoutCustomIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  type: PropTypes.string,
  iconRef: PropTypes.func,
};
