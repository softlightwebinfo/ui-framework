import React from 'react';
import PropTypes from 'prop-types';

import {SoftIcon} from '../Icon';
import {Tooltip} from './SoftTooltip';

export const IconTip: (
  {type, ariaLabel: ariaLabel, color, size, iconProps, ...rest}: {
    type?: any; ariaLabel?: any; color?: any; size?: any; iconProps?: any; [p: string]: any
  }
) => any = ({type, 'aria-label': ariaLabel, color, size, iconProps, ...rest}) => (
  <Tooltip {...rest}>
    <SoftIcon tabIndex="0" type={type} color={color} size={size} aria-label={ariaLabel} {...iconProps} />
  </Tooltip>
);

// @ts-ignore
IconTip.propTypes = {
  /**
   * The icon type.
   */
  type: PropTypes.string,

  /**
   * The icon color.
   */
  color: PropTypes.string,

  /**
   * The icon size.
   */
  size: PropTypes.string,

  /**
   * Explain what this icon means for screen readers.
   */
  'aria-label': PropTypes.string,

  /**
   * Pass certain props down to `SoftIcon`
   */
  iconProps: PropTypes.object,
};

// @ts-ignore
IconTip.defaultProps = {
  type: 'questionInCircle',
  'aria-label': 'Info',
};
