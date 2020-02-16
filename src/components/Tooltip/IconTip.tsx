import React from 'react';

import {Icon} from '../Icon';
import {ToolTip} from './Tooltip';

export const IconTip: (
    {type, ariaLabel: ariaLabel, color, size, iconProps, ...rest}: {
        type?: any; ariaLabel?: any; color?: any; size?: any; iconProps?: any; [p: string]: any
    }
) => any = ({type, 'aria-label': ariaLabel, color, size, iconProps, ...rest}) => (
    <ToolTip {...rest}>
        <Icon tabIndex="0" type={type} color={color} size={size} aria-label={ariaLabel} {...iconProps} />
    </ToolTip>
);
// @ts-ignore
IconTip.defaultProps = {
    type: 'questionInCircle',
    'aria-label': 'Info',
};
