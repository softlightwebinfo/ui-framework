import React, {Component, PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {SoftToolTip} from '../../Tooltip';

import {
  SoftIcon,
} from '../../Icon';

export class SoftBetaBadge extends PureComponent<{
  className?: any
  /**
   * One word label like "Beta" or "Lab"
   */
  label?: any
  /**
   * Supply an icon type if the badge should just be an icon
   */
  iconType?: any
  /**
   * Content for the tooltip
   */
  tooltipContent?: any
  /**
   * Custom position of the tooltip
   */
  tooltipPosition?: any
  /**
   * Optional title will be supplied as tooltip title or title attribute otherwise the label will be used
   */
  title?: any
}> {
  static defaultProps = {
    tooltipPosition: 'top',
  };
  static propTypes: {};

  render() {
    let {
      className,
      label,
      tooltipContent,
      tooltipPosition,
      title,
      iconType,
      ...rest
    }: any = this.props;

    const classes = classNames(
      'softBetaBadge',
      {
        'softBetaBadge--iconOnly': iconType,
      },
      className
    );

    let icon;
    if (iconType) {
      icon = (
        <SoftIcon
          className="softBetaBadge__icon"
          type={iconType}
          size="m"
          aria-hidden="true"
        />
      );
    }

    if (tooltipContent) {
      return (
        <SoftToolTip
          position={tooltipPosition}
          content={tooltipContent}
          title={title || label}
        >
        <span
          className={classes}
          {...rest}
        >
          {icon || label}
        </span>
        </SoftToolTip>
      );
      return null;
    } else {
      return (
        <span
          className={classes}
          title={title || label}
          {...rest}
        >
        {icon || label}
      </span>
      );
    }
  }
}

// @ts-ignore
SoftBetaBadge.propTypes = {
  className: PropTypes.string,

  /**
   * One word label like "Beta" or "Lab"
   */
  label: PropTypes.node.isRequired,

  /**
   * Supply an icon type if the badge should just be an icon
   */
  // iconType: PropTypes.oneOf(ICON_TYPES),

  /**
   * Content for the tooltip
   */
  tooltipContent: PropTypes.node,

  /**
   * Custom position of the tooltip
   */
  tooltipPosition: PropTypes.string,

  /**
   * Optional title will be supplied as tooltip title or title attribute otherwise the label will be used
   */
  title: PropTypes.string,
};


