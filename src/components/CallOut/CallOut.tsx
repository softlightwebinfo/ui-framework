import React from 'react';
import PropTypes from 'prop-types';

import classNames from 'classnames';

import {
  SoftIcon,
} from '../Icon';
import {TYPES as ICON_TYPES} from '../Icon/SoftIcon'
import {
  SoftText,
} from '../Text';

const colorToClassNameMap = {
  primary: 'softCallOut--primary',
  success: 'softCallOut--success',
  warning: 'softCallOut--warning',
  danger: 'softCallOut--danger',
};

export const COLORS = Object.keys(colorToClassNameMap);

const sizeToClassNameMap = {
  s: 'softCallOut--small',
  m: '',
};

export const SIZES = Object.keys(sizeToClassNameMap);

export const SoftCallOut: (
  {title, color, size, iconType, children, className, ...rest}: {
    title?: any; color?: any; size?: any; iconType?: any; children: any; className?: any; [p: string]: any
  }
) => any = (
  {
    title,
    color,
    size,
    iconType,
    children,
    className,
    ...rest
  }
) => {
  const classes = classNames(
    'softCallOut',
    colorToClassNameMap[color],
    sizeToClassNameMap[size],
    className,
  );

  let headerIcon;

  if (iconType) {
    headerIcon = (
      <SoftIcon
        className="softCallOutHeader__icon"
        type={iconType}
        size="m"
        aria-hidden="true"
      />
    );
  }

  let optionalChildren;
  if (children && size === 's') {
    optionalChildren = (
      <SoftText size="xs">
        {children}
      </SoftText>
    );
  } else if (children) {
    optionalChildren = (
      <SoftText size="s">
        {children}
      </SoftText>
    );
  }

  return (
    <div
      className={classes}
      {...rest}
    >
      <div className="softCallOutHeader">
        {headerIcon}

        <span className="softCallOutHeader__title">
          {title}
        </span>
      </div>

      {optionalChildren}
    </div>
  );
};

// @ts-ignore
SoftCallOut.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.node,
  iconType: PropTypes.oneOf(ICON_TYPES),
  color: PropTypes.oneOf(COLORS),
  size: PropTypes.oneOf(SIZES),
};

// @ts-ignore
SoftCallOut.defaultProps = {
  color: 'primary',
  size: 'm',
};
