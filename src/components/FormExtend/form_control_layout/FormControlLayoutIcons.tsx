import React, {Fragment, Component} from 'react';
import PropTypes from 'prop-types';

import {SoftLoadingSpinner} from '../../Loading';
import {FormControlLayoutClearButton} from './SoftFormControlLayoutClearButton';
import {FormControlLayoutCustomIcon} from './SoftFormControlLayoutCustomIcon';

export const ICON_SIDES = ['left', 'right'];

export class FormControlLayoutIcons extends Component<{
  icon?: any,
  isLoading?: boolean,
  clear?: any
}> {
  static propTypes: {};

  render() {
    const {icon} = this.props;

    const iconSide = icon && icon.side ? icon.side : 'left';
    const customIcon = this.renderCustomIcon();
    const loadingSpinner = this.renderLoadingSpinner();
    const clearButton = this.renderClearButton();

    let leftIcons;

    if (customIcon && iconSide === 'left') {
      leftIcons = (
        <div className="softFormControlLayoutIcons">
          {customIcon}
        </div>
      );
    }

    let rightIcons;

    // If the icon is on the right, it should be placed after the clear button in the DOM.
    if (clearButton || loadingSpinner || (customIcon && iconSide === 'right')) {
      rightIcons = (
        <div className="softFormControlLayoutIcons softFormControlLayoutIcons--right">
          {clearButton}
          {loadingSpinner}
          {iconSide === 'right' ? customIcon : undefined}
        </div>
      );
    }

    return (
      <Fragment>
        {leftIcons}
        {rightIcons}
      </Fragment>
    );
  }

  renderCustomIcon() {
    const {icon} = this.props;

    if (!icon) {
      return null;
    }

    // Normalize the icon to an object if it's a string.
    const iconProps = typeof icon === 'string' ? {
      type: icon,
    } : icon;

    const {
      ref: iconRef,
      side, // eslint-disable-line no-unused-vars
      ...iconRest
    } = iconProps;

    return (
      <FormControlLayoutCustomIcon
        iconRef={iconRef}
        {...iconRest}
      />
    );
  }

  renderLoadingSpinner() {
    const {isLoading} = this.props;

    if (!isLoading) {
      return null;
    }

    return (
      <SoftLoadingSpinner size="m"/>
    );
  }

  renderClearButton() {
    const {clear} = this.props;

    if (!clear) {
      return null;
    }

    return (
      <FormControlLayoutClearButton {...clear} />
    );
  }
}

FormControlLayoutIcons.propTypes = {
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
  isLoading: PropTypes.bool,
};
