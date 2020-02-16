import React, {PureComponent} from 'react';
import classNames from 'classnames';
import {keysOf} from '../../common';

const colorToClassMap = {
  accent: null,
  subdued: 'softNotificationBadge--subdued',
  warning: 'softNotificationBadge--warning',
  success: 'softNotificationBadge--success',
};

export const COLORS = keysOf(colorToClassMap);

const sizeToClassNameMap = {
  s: null,
  m: 'softNotificationBadge--medium',
};

export const SIZES = keysOf(sizeToClassNameMap);

type SoftNotificationBadgeType = {
  children?: any;
  className?: any;
  size?: string;
  color?: string;
}

export class SoftNotificationBadge extends PureComponent<SoftNotificationBadgeType> {
  static defaultProps = {size: 's', color: 'accent'};

  render() {
    let {children, className, size = 's', color = 'accent', ...rest} = this.props;
    const classes = classNames(
      'softNotificationBadge',
      sizeToClassNameMap[size],
      colorToClassMap[color],
      className
    );

    return (
      <span className={classes} {...rest}>
        {children}
      </span>
    );
  }
}
