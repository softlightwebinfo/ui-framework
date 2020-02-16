import React from 'react';
import classNames from 'classnames';

import {
    Icon,
} from '../Icon';
import {
    Text,
} from '../Text';

const colorToClassNameMap = {
    primary: 'CallOut--primary',
    success: 'CallOut--success',
    warning: 'CallOut--warning',
    danger: 'CallOut--danger',
};

export const COLORS = Object.keys(colorToClassNameMap);

const sizeToClassNameMap = {
    s: 'CallOut--small',
    m: '',
};

export const SIZES = Object.keys(sizeToClassNameMap);

export const CallOut: (
    {title, color, size, iconType, children, className, ...rest}: {
        title?: any; color?: any; size?: any; iconType?: any; children: any; className?: any; [p: string]: any
    }
) => any = (
    {
        title,
        color,
        size,
        iconType,
        children,
        className,
        ...rest
    }
) => {
    const classes = classNames(
        'CallOut',
        colorToClassNameMap[color],
        sizeToClassNameMap[size],
        className,
    );

    let headerIcon;

    if (iconType) {
        headerIcon = (
            <Icon
                className="CallOutHeader__icon"
                type={iconType}
                size="m"
                aria-hidden="true"
            />
        );
    }

    let optionalChildren;
    if (children && size === 's') {
        optionalChildren = (
            <Text size="xs">
                {children}
            </Text>
        );
    } else if (children) {
        optionalChildren = (
            <Text size="s">
                {children}
            </Text>
        );
    }

    return (
        <div
            className={classes}
            {...rest}
        >
            <div className="CallOutHeader">
                {headerIcon}

                <span className="CallOutHeader__title">
                    {title}
                </span>
            </div>
            {optionalChildren}
        </div>
    );
};
// @ts-ignore
CallOut.defaultProps = {
    color: 'primary',
    size: 'm',
};
