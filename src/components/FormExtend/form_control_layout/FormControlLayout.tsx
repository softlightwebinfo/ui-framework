import React, {
  cloneElement,
  Component,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {FormControlLayoutIcons} from './SoftFormControlLayoutIcons';

export const ICON_SIDES = ['left', 'right'];

export class FormControlLayout extends Component<{
  children?: any,
  icon?: any,
  clear?: any,
  fullWidth?: any,
  isLoading?: any,
  compressed?: any,
  className?: any,
  prepend?: any,
  append?: any,
}> {
  static propTypes: {};
  static defaultProps: {};

  render() {
    const {
      children,
      icon,
      clear,
      fullWidth,
      isLoading,
      compressed,
      className,
      prepend,
      append,
      ...rest
    } = this.props;

    const classes = classNames(
      'softFormControlLayout',
      {
        'softFormControlLayout--fullWidth': fullWidth,
        'softFormControlLayout--compressed': compressed,
        'softFormControlLayout--group': prepend || append,
      },
      className
    );

    const prependNodes = this.renderPrepends();
    const appendNodes = this.renderAppends();

    let clonedChildren;
    if ((prepend || append) && children) {
      clonedChildren = cloneElement(children, {
        className: `${children.props.className} softFormControlLayout__child--noStyle`,
      });
    }

    return (
      <div className={classes} {...rest}>
        {prependNodes}
        <div className="softFormControlLayout__childrenWrapper">
          {clonedChildren || children}

          <FormControlLayoutIcons
            icon={icon}
            clear={clear}
            isLoading={isLoading}
          />
        </div>
        {appendNodes}
      </div>
    );
  }

  renderPrepends() {
    const {prepend} = this.props;

    if (!prepend) {
      return;
    }

    let prependNodes;

    if (Array.isArray(prepend)) {
      prependNodes = prepend.map((item, index) => {
        return this.createSideNode(item, 'prepend', index);
      });
    } else {
      prependNodes = this.createSideNode(prepend, 'prepend');
    }

    return prependNodes;
  }

  renderAppends() {
    const {append} = this.props;

    if (!append) {
      return;
    }

    let appendNodes;

    if (Array.isArray(append)) {
      appendNodes = append.map((item, index) => {
        return this.createSideNode(item, 'append', index);
      });
    } else {
      appendNodes = this.createSideNode(append, 'append');
    }

    return appendNodes;
  }

  createSideNode(node: any, side: any, key?: any) {
    return cloneElement(node, {
      className: `softFormControlLayout__${side}`,
      key: key
    });
  }
}

FormControlLayout.propTypes = {
  children: PropTypes.node,
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.shape({
      type: PropTypes.string,
      side: PropTypes.oneOf(ICON_SIDES),
      onClick: PropTypes.func,
    }),
  ]),
  clear: PropTypes.shape({
    onClick: PropTypes.func,
  }),
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  compressed: PropTypes.bool,
  /**
   * Creates an input group with element(s) coming before children
   */
  prepend: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Creates an input group with element(s) coming after children
   */
  append: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};
FormControlLayout.defaultProps = {
  isLoading: false,
  compressed: false,
};
