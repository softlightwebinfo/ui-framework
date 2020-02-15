import React, {
  Component, ReactNode,
} from 'react';

import PropTypes from 'prop-types';
import classNames from 'classnames';

import makeId from '../../Form/form_row/make_id';
import {SoftIcon} from '../../Icon';

export class Switch extends Component<{
  name?: string,
  id?: string,
  label?: ReactNode,
  checked?: boolean,
  onChange?: (e?: any) => any,
  disabled?: boolean,
  compressed?: boolean,
  className?: string
}> {
  static propTypes: {};
  state = {
    switchId: this.props.id || makeId(),
  };

  constructor(props) {
    super(props);
  }

  render() {
    const {
      label,
      id, // eslint-disable-line no-unused-vars
      name,
      checked,
      disabled,
      compressed,
      onChange,
      className,
      ...rest
    } = this.props;

    const {switchId}: Readonly<any> = this.state;

    const classes = classNames(
      'softSwitch',
      {
        'softSwitch--compressed': compressed,
      },
      className
    );

    return (
      <div className={classes}>
        <input
          className="softSwitch__input"
          name={name}
          id={switchId}
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={onChange}
          {...rest}
        />

        <span className="softSwitch__body">
          <span className="softSwitch__thumb"/>
          <span className="softSwitch__track">
            <SoftIcon
              type="cross"
              size="m"
              className="softSwitch__icon"
            />

            <SoftIcon
              type="check"
              size="m"
              className="softSwitch__icon softSwitch__icon--checked"
            />
          </span>
        </span>

        {label && (
          <label
            className="softSwitch__label"
            htmlFor={switchId}
          >
            {label}
          </label>
        )}
      </div>
    );
  }
}

Switch.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.node,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  compressed: PropTypes.bool
};
