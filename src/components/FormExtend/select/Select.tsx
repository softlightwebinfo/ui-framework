import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
  FormControlLayout,
} from '../form_control_layout';

import {
  SoftValidatableControl,
} from '../validatable_control';

export const SoftSelect: ({className, options, id, name, inputRef, isInvalid, fullWidth, isLoading, hasNoInitialSelection, defaultValue, compressed, value, prepend, append, ...rest}: {
  className?: any; options?: any; id?: any; name?: any; inputRef?: any; isInvalid?: any; fullWidth?: any; isLoading?: any; hasNoInitialSelection?: any; defaultValue?: any; compressed?: any; value?: any; prepend?: any; append?: any; [p: string]: any
}) => any = (
  {
    className,
    options,
    id,
    name,
    inputRef,
    isInvalid,
    fullWidth,
    isLoading,
    hasNoInitialSelection,
    defaultValue,
    compressed,
    value,
    prepend,
    append,
    ...rest
  }
) => {
  const classes = classNames(
    'softSelect',
    {
      'softSelect--fullWidth': fullWidth,
      'softSelect--compressed': compressed,
      'softSelect--inGroup': prepend || append,
      'softSelect-isLoading': isLoading,
    },
    className
  );

  let emptyOptionNode;
  if (hasNoInitialSelection) {
    emptyOptionNode = (
      <option value="" disabled hidden style={{display: 'none'}}>&nbsp;</option>
    );
  }

  // React HTML input can not have both value and defaultValue properties.
  // https://reactjs.org/docs/uncontrolled-components.html#default-values
  let selectDefaultValue;
  if (value == null) {
    selectDefaultValue = defaultValue || '';
  }

  const icon = {
    type: 'arrowDown',
    side: 'right',
  };

  return (
    <FormControlLayout
      icon={icon}
      fullWidth={fullWidth}
      isLoading={isLoading}
      compressed={compressed}
      prepend={prepend}
      append={append}
    >
      <SoftValidatableControl isInvalid={isInvalid}>
        <select
          id={id}
          name={name}
          className={classes}
          ref={inputRef}
          defaultValue={selectDefaultValue}
          value={value}
          {...rest}
        >
          {emptyOptionNode}
          {options.map((option, index) => {
            const {
              text,
              ...rest
            } = option;
            return <option {...rest} key={index}>{text}</option>;
          })}
        </select>
      </SoftValidatableControl>
    </FormControlLayout>
  );
};

// @ts-ignore
SoftSelect.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.node.isRequired
  })).isRequired,
  isInvalid: PropTypes.bool,
  fullWidth: PropTypes.bool,
  isLoading: PropTypes.bool,

  /**
   * Simulates no selection by creating an empty, selected, hidden first option
   */
  hasNoInitialSelection: PropTypes.bool,
  inputRef: PropTypes.func,
  /**
   * when `true` creates a shorter height input
   */
  compressed: PropTypes.bool,
  /**
   * Creates an input group with element(s) coming before select
   */
  prepend: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  /**
   * Creates an input group with element(s) coming after select
   */
  append: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
};

// @ts-ignore
SoftSelect.defaultProps = {
  options: [],
  fullWidth: false,
  isLoading: false,
  hasNoInitialSelection: false,
  compressed: false,
};
