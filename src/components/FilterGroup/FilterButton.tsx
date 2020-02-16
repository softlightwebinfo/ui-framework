import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {SoftI18n} from '../I18n';
import {SoftNotificationBadge} from '../Badge';
import {
  SOFT_BUTTON_EMPTY_COLORS as COLORS,
  SOFT_BUTTON_EMPTY_ICON_SIDES as ICON_SIDES,
  SoftButtonEmpty,
} from '../ButtonEmpty';

import {
  TYPES as ICON_TYPES,
} from '../Icon/SoftIcon';

export class FilterButton extends Component<{
  children?: any,
  className?: any,
  onClick?: () => any,
  /**
   * Use any one of our icons
   */
  iconType?: any,
  iconSide?: any,
  color?: any,
  /**
   * Bolds the button if true
   */
  hasActiveFilters?: boolean,
  /**
   * Pass the total number of filters available and it will
   * add a subdued notification badge showing the number
   */
  numFilters?: number,
  /**
   * Pass the number of selected filters and it will
   * add a bright notification badge showing the number
   */
  numActiveFilters?: number,
  /**
   * Applies a visual state to the button useful when using with a popover.
   */
  isSelected?: boolean,
  isDisabled?: boolean,
  /**
   * Defines html button input type
   */
  type?: string,
  /**
   * Should the button grow to fill it's container, best used for dropdown buttons
   */
  grow?: boolean
  /**
   * Remove border after button, good for opposite filters
   */
  withNext?: boolean,
  /**
   * _DEPRECATED: use `withNext`_
   * Remove border after button, good for opposite filters
   */
  noDivider?: boolean,
  textProps?: any
}> {
  static defaultProps = {
    type: 'button',
    iconSide: 'right',
    color: 'text',
    grow: true,
  }
  static propTypes: {};

  render() {
    let {
      children,
      className,
      iconType,
      iconSide,
      color,
      hasActiveFilters,
      numFilters,
      numActiveFilters,
      isDisabled,
      isSelected,
      type,
      grow,
      noDivider,
      withNext,
      textProps,
      ...rest
    } = this.props;
    // != instead of !== to allow for null and undefined
    const numFiltersDefined = numFilters != null;

    const classes = classNames(
      'softFilterButton',
      {
        'softFilterButton-isSelected': isSelected,
        'softFilterButton-hasActiveFilters': hasActiveFilters,
        'softFilterButton-hasNotification': numFiltersDefined,
        'softFilterButton--hasIcon': iconType,
        'softFilterButton--noGrow': !grow,
        'softFilterButton--withNext': noDivider || withNext,
      },
      className,
    );

    const buttonTextClassNames = classNames(
      // 'softFilterButton__textShift',
      {'softFilterButton__text-hasNotification': numFiltersDefined,},
      textProps && textProps.className,
    );

    let dataText;
    if (typeof children === 'string') {
      dataText = children;
    }

    const buttonContents = (
      <Fragment>
      <span className="softFilterButton__textShift" data-text={dataText} title={dataText}>
        {children}
      </span>

        {numFiltersDefined &&
        <SoftI18n
          token="softFilterButton.filterBadge"
          values={{count: numActiveFilters || numFilters, hasActiveFilters}}
          default={({count, hasActiveFilters}) => `${count} ${hasActiveFilters ? 'active' : 'available'} filters`}
        >
          {
            filterBadge => (
              <SoftNotificationBadge
                className="softFilterButton__notification"
                size="m"
                aria-label={filterBadge}
                color={isDisabled || !hasActiveFilters ? 'subdued' : 'accent'}
              >
                {numActiveFilters || numFilters}
              </SoftNotificationBadge>
            )
          }
        </SoftI18n>
        }
      </Fragment>
    );

    return (
      <SoftButtonEmpty
        className={classes}
        color={color}
        isDisabled={isDisabled}
        iconSide={iconSide}
        iconType={iconType}
        type={type}
        textProps={{...textProps, className: buttonTextClassNames}}
        {...rest}
      >
        {buttonContents}
      </SoftButtonEmpty>
    );
  }
}

FilterButton.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  onClick: PropTypes.func,
  /**
   * Use any one of our icons
   */
  iconType: PropTypes.oneOf(ICON_TYPES),
  iconSide: PropTypes.oneOf(ICON_SIDES),
  color: PropTypes.oneOf(COLORS),
  /**
   * Bolds the button if true
   */
  hasActiveFilters: PropTypes.bool,
  /**
   * Pass the total number of filters available and it will
   * add a subdued notification badge showing the number
   */
  numFilters: PropTypes.number,
  /**
   * Pass the number of selected filters and it will
   * add a bright notification badge showing the number
   */
  numActiveFilters: PropTypes.number,
  /**
   * Applies a visual state to the button useful when using with a popover.
   */
  isSelected: PropTypes.bool,
  isDisabled: PropTypes.bool,
  /**
   * Defines html button input type
   */
  type: PropTypes.string,
  /**
   * Should the button grow to fill it's container, best used for dropdown buttons
   */
  grow: PropTypes.bool,
  /**
   * Remove border after button, good for opposite filters
   */
  withNext: PropTypes.bool,
  /**
   * _DEPRECATED: use `withNext`_
   * Remove border after button, good for opposite filters
   */
  noDivider: PropTypes.bool,
};


