import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {SoftScreenReaderOnly} from '../../Accessibility';
import makeId from '../form_row/make_id';
import {
  FormControlLayout,
} from '../form_control_layout';
import {SoftI18n} from '../../I18n';

export const SuperSelectControl: (
  {className, options, id, name, fullWidth, isLoading, isInvalid, defaultValue, compressed, value, ...rest}: {
    classNam?: any; options?: any; id?: any; name?: any; fullWidth?: any; isLoading?: boolean; isInvalid?: boolean; defaultValue?: any; compressed?: any; value?: any; [p: string]: any
  }) => any = (
  {
    className,
    options,
    id,
    name,
    fullWidth,
    isLoading,
    isInvalid,
    defaultValue,
    compressed,
    value,
    ...rest
  }
) => {
  const classes = classNames(
    'softSuperSelectControl',
    {
      'softSuperSelectControl--fullWidth': fullWidth,
      'softSuperSelectControl--compressed': compressed,
      'softSuperSelectControl-isLoading': isLoading,
      'softSuperSelectControl-isInvalid': isInvalid,
    },
    className
  );

  // React HTML input can not have both value and defaultValue properties.
  // https://reactjs.org/docs/uncontrolled-components.html#default-values
  let selectDefaultValue;
  if (value == null) {
    selectDefaultValue = defaultValue || '';
  }

  let selectedValue = '';
  if (value) {
    const selectedOption = options.find(option => option.value === value);
    selectedValue = selectedOption.inputDisplay;
  }

  const icon = {
    type: 'arrowDown',
    side: 'right',
  };

  const screenReaderId = makeId();

  return (
    <Fragment>
      <input
        type="hidden"
        id={id}
        name={name}
        defaultValue={selectDefaultValue}
        value={value}
      />

      <FormControlLayout
        icon={icon}
        fullWidth={fullWidth}
        isLoading={isLoading}
        compressed={compressed}
      >

        {/*
          This is read when the user tabs in. The comma is important,
          otherwise the screen reader often combines the text.
        */}
        <SoftScreenReaderOnly>
          <span id={screenReaderId}>
            <SoftI18n
              token="softSuperSelectControl.selectAnOption"
              default="Select an option: {selectedValue}, is selected"
              values={{selectedValue}}
            />
          </span>
        </SoftScreenReaderOnly>

        <button
          role="option"
          type="button"
          className={classes}
          aria-haspopup="true"
          aria-labelledby={`${id} ${screenReaderId}`}
          {...rest}
        >
          {selectedValue}
        </button>

      </FormControlLayout>
    </Fragment>
  );
};

// @ts-ignore
SuperSelectControl.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.node.isRequired,
    inputDisplay: PropTypes.node.isRequired
  })).isRequired,
  isInvalid: PropTypes.bool,
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,
  /**
   * when `true` creates a shorter height input
   */
  compressed: PropTypes.bool,
};

// @ts-ignore
SuperSelectControl.defaultProps = {
  options: [],
  fullWidth: false,
  isLoading: false,
  isInvalid: false,
  compressed: false,
};
