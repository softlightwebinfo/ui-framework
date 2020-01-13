import {cloneElement} from 'react';
import classNames from 'classnames';

export const ScreenReaderOnly = ({children}): any => {
  const classes = classNames('ScreenReaderOnly', children.props.className);

  const props = {
    ...children.props,
    className: classes,
  };

  return cloneElement(children, props);
};
