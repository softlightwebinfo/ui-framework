import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {SoftBadge} from '../../badge';
import {SoftI18n} from '../../i18n';

export class ComboBoxPill extends Component<{
  option?: any,
  children?: string,
  className?: string,
  color?: string,
  onClose?: (param?: any) => any,
  asPlainText?: boolean,
  onClick?: (param?: any) => any,
  onClickAriaLabel?: string,
}> {
  static propTypes = {
    option: PropTypes.object.isRequired,
    children: PropTypes.string,
    className: PropTypes.string,
    color: PropTypes.string,
    onClose: PropTypes.func,
    asPlainText: PropTypes.bool,
    onClick: PropTypes.func,
    onClickAriaLabel: PropTypes.string,
  };

  static defaultProps = {
    color: 'hollow',
  };

  onCloseButtonClick = () => {
    const {onClose, option} = this.props;
    onClose(option);
  };

  render() {
    const {
      children,
      className,
      option, // eslint-disable-line no-unused-vars
      onClose, // eslint-disable-line no-unused-vars
      color,
      onClick,
      onClickAriaLabel,
      asPlainText,
      ...rest
    } = this.props;
    const classes = classNames(
      'softComboBoxPill',
      {
        'softComboBoxPill--plainText': asPlainText,
      },
      className
    );

    if (onClose) {
      return (
        <SoftI18n
          token="softComboBoxPill.removeSelection"
          default="Remove {children} from selection in this group"
          values={{children}}
        >
          {removeSelection => (
            <SoftBadge
              className={classes}
              title={children}
              iconOnClick={this.onCloseButtonClick}
              iconOnClickAriaLabel={removeSelection}
              iconType="cross"
              iconSide="right"
              color={color}
              closeButtonProps={{
                tabIndex: '-1',
              }}
              onClick={onClick}
              onClickAriaLabel={onClickAriaLabel}
              {...rest}
            >
              {children}
            </SoftBadge>
          )}
        </SoftI18n>
      );
    }

    if (asPlainText) {
      return (
        <span className={classes} {...rest}>
          {children}
        </span>
      );
    }

    return (
      <SoftBadge
        className={classes}
        title={children}
        color={color}
        {...rest}
        onClick={onClick}
        onClickAriaLabel={onClickAriaLabel}
      >
        {children}
      </SoftBadge>
    );
  }
}
