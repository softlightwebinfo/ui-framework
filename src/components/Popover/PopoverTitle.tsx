import React, {Component} from 'react';
import classNames from 'classnames';

export class PopoverTitle extends Component<{ children: any, className?: any }> {
  render() {
    let {
      children,
      className,
      ...rest
    } = this.props;
    const classes = classNames('c-popoverTitle', className);

    return (
      <div className={classes} {...rest}>
        {children}
      </div>
    );
  }
}
