import React from 'react';
import classNames from 'classnames';

export const PopoverFooter: ({children, className, ...rest}: {
  children?: any; className?: any; [p: string]: any
}) => any = (
  {
    children,
    className,
    ...rest
  }
) => {
  const classes = classNames('softPopoverFooter', className);
  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};
