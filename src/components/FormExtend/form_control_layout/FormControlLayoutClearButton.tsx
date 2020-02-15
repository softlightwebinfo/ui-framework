import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {SoftIcon} from '../../Icon';
import {SoftI18n} from '../../I18n';

export const FormControlLayoutClearButton: ({className, onClick, ...rest}: { className?: any; onClick?: any; [p: string]: any }) => any = (
  {
    className,
    onClick,
    ...rest
  }
) => {
  const classes = classNames('softFormControlLayoutClearButton', className);

  return (
    <SoftI18n token="softFormControlLayoutClearButton.label" default="Clear input">
      {label => (
        <button
          type="button"
          className={classes}
          onClick={onClick}
          aria-label={label}
          {...rest}
        >
          <SoftIcon
            className="softFormControlLayoutClearButton__icon"
            type="cross"
          />
        </button>
      )}
    </SoftI18n>
  );
};

// @ts-ignore
FormControlLayoutClearButton.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
