import React, {
  cloneElement,
  Component,
} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {SoftIcon} from '../Icon';
import {SoftToolTip} from '../Tooltip';

import {getSecureRelForTarget} from '../../services';

const layoutAlignToClassNames = {
  center: null,
  top: 'softContextMenu__itemLayout--top',
  bottom: 'softContextMenu__itemLayout--bottom',
};

export const LAYOUT_ALIGN = Object.keys(layoutAlignToClassNames);

export class SoftContextMenuItem extends Component<{
  children?: any,
  className?: any,
  hasPanel?: any,
  icon?: any,
  buttonRef?: any,
  disabled?: any,
  layoutAlign?: any,
  toolTipTitle?: any,
  toolTipContent?: any,
  toolTipPosition?: any,
  href?: any,
  target?: any,
  rel?: any,
  onClick?: any
}> {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    /**
     * Icon used for the item
     */
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    onClick: PropTypes.func,
    /**
     * Whether the item leads to a new set of items
     */
    hasPanel: PropTypes.bool,
    buttonRef: PropTypes.func,
    disabled: PropTypes.bool,
    /**
     * Required if using a tooltip. Add an optional tooltip on hover
     */
    toolTipContent: PropTypes.node,
    /**
     * Optional title for the tooltip
     */
    toolTipTitle: PropTypes.node,
    /**
     * Dictates the position of the tooltip.
     */
    toolTipPosition: PropTypes.string,
    href: PropTypes.string,
    target: PropTypes.string,
    rel: PropTypes.string,
    /**
     * How to align icon with content of button
     */
    layoutAlign: PropTypes.oneOf(LAYOUT_ALIGN),
  };
  static defaultProps: {};

  render() {

    const {
      children,
      className,
      hasPanel,
      icon,
      buttonRef,
      disabled,
      layoutAlign,
      toolTipTitle,
      toolTipContent,
      toolTipPosition,
      href,
      target,
      rel,
      ...rest
    } = this.props;

    let iconInstance;

    if (icon) {
      switch (typeof icon) {
        case 'string':
          iconInstance = (
            <SoftIcon
              type={icon}
              size="m"
              className="softContextMenu__icon"
            />
          );
          break;

        default:
          // Assume it's already an instance of an icon.
          iconInstance = cloneElement(icon, {
            className: 'softContextMenu__icon'
          });
      }
    }

    let arrow;

    if (hasPanel) {
      arrow = (
        <SoftIcon
          type="arrowRight"
          size="m"
          className="softContextMenu__arrow"
        />
      );
    }

    const classes = classNames('softContextMenuItem', className, {
      'softContextMenuItem-isDisabled': disabled,
    });

    const layoutClasses = classNames('softContextMenu__itemLayout', layoutAlignToClassNames[layoutAlign]);

    const buttonInner = (
      <span className={layoutClasses}>
        {iconInstance}
        <span className="softContextMenuItem__text">
          {children}
        </span>
        {arrow}
      </span>
    );

    let button;
    // <a> elements don't respect the `disabled` attribute. So if we're disabled, we'll just pretend
    // this is a button and piggyback off its disabled styles.
    if (href && !disabled) {
      const secureRel = getSecureRelForTarget({href, target, rel});

      button = (
        <a
          className={classes}
          href={href}
          target={target}
          rel={secureRel}
          ref={buttonRef}
          {...rest}
        >
          {buttonInner}
        </a>
      );
    } else {
      button = (
        <button
          disabled={disabled}
          className={classes}
          type="button"
          ref={buttonRef}
          {...rest}
        >
          {buttonInner}
        </button>
      );
    }

    if (toolTipContent) {
      return (
        <SoftToolTip
          title={toolTipTitle ? toolTipTitle : null}
          content={toolTipContent}
          anchorClassName="soft-displayBlock"
          position={toolTipPosition}
        >
          {button}
        </SoftToolTip>
      );
    } else {
      return (
        button
      );
    }

  }
}

SoftContextMenuItem.defaultProps = {
  toolTipPosition: 'right',
  layoutAlign: 'center',
};
