import React from 'react';
import PropTypes from 'prop-types';

import {Radio} from './SoftRadio';

export const RadioGroup: ({options, idSelected, onChange, name, className, disabled, compressed, ...rest}: {
  options?: any; idSelected?: any; onChange?: any; name?: any; className?: any; disabled?: any; compressed?: any; [p: string]: any
}) => any = (
  {
    options,
    idSelected,
    onChange,
    name,
    className,
    disabled,
    compressed,
    ...rest
  }
) => (
  <div className={className} {...rest}>
    {options.map((option, index) => {
      const {
        disabled: isOptionDisabled,
        ...optionRest
      } = option;
      return (
        <Radio
          className="softRadioGroup__item"
          key={index}
          name={name}
          checked={option.id === idSelected}
          disabled={disabled || isOptionDisabled}
          onChange={onChange.bind(null, option.id, option.value)}
          compressed={compressed}
          {...optionRest}
        />
      );
    })}
  </div>
);

// @ts-ignore
RadioGroup.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.node,
      value: PropTypes.string,
      disabled: PropTypes.bool,
    }),
  ).isRequired,
  idSelected: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  /**
   * Tightens up the spacing between radio rows and sends down the
   * compressed prop to the radio itself
   */
  compressed: PropTypes.bool,
};

// @ts-ignore
RadioGroup.defaultProps = {
  options: [],
};
