import React, {Component, HTMLAttributes, ReactNode} from 'react';
import classNames from 'classnames';
import {CommonProps} from '../common';

export type SoftFilterGroupProps = HTMLAttributes<HTMLDivElement> &
  CommonProps & {
  children?: ReactNode;
  /**
   * Expand the whole bar to fill its parent's width
   */
  fullWidth?: boolean;
};

export class FilterGroup extends Component<{ children?: any, className?: any, fullWidth?: boolean }> {
  static defaultProps = {fullWidth: false};

  render() {
    let {
      children,
      className,
      fullWidth,
      ...rest
    } = this.props;
    const classes = classNames(
      'softFilterGroup',
      {
        'softFilterGroup--fullWidth': fullWidth,
      },
      className
    );

    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  }
}
