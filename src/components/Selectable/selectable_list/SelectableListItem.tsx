import React, {Component} from 'react';
import classNames from 'classnames';
import {SoftIcon} from '../../Icon';

function resolveIconAndColor(checked) {
  if (!checked) {
    return {icon: 'empty'};
  }
  return checked === 'on'
    ? {icon: 'check', color: 'text'}
    : {icon: 'cross', color: 'text'};
}

export class SelectableListItem extends Component<{
  children?: any,
  className?: any,
  disabled?: any,
  checked?: any,
  isFocused?: any,
  showIcons?: any,
  prepend?: any,
  append?: any,
}> {
  static defaultProps = {
    showIcons: true,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      children,
      className,
      disabled,
      checked,
      isFocused,
      showIcons,
      prepend,
      append,
      ...rest
    } = this.props;

    const classes = classNames(
      'softSelectableListItem',
      {
        'softSelectableListItem-isFocused': isFocused,
      },
      className
    );

    let buttonIcon;
    if (showIcons) {
      const {icon, color} = resolveIconAndColor(checked);
      buttonIcon = (
        <SoftIcon
          className="softSelectableListItem__icon"
          color={color}
          type={icon}
        />
      );
    }

    let prependNode;
    if (prepend) {
      prependNode = (
        <span className="softSelectableListItem__prepend">{prepend}</span>
      );
    }

    let appendNode;
    if (append) {
      appendNode = (
        <span className="softSelectableListItem__append">{append}</span>
      );
    }

    return (
      <button
        role="option"
        type="button"
        aria-selected={isFocused}
        className={classes}
        disabled={disabled}
        aria-disabled={disabled}
        {...rest}>
        <span className="softSelectableListItem__content">
          {buttonIcon}
          {prependNode}
          <span className="softSelectableListItem__text">{children}</span>
          {appendNode}
        </span>
      </button>
    );
  }
}
