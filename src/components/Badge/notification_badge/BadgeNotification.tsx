import React, {PureComponent} from 'react';
import classNames from 'classnames';
import {keysOf} from '../../common';

const colorToClassMap = {
    accent: null,
    subdued: 'c-notification-badge--subdued',
    warning: 'c-notification-badge--warning',
    success: 'c-notification-badge--success',
};
const sizeToClassNameMap = {
    s: null,
    m: 'c-notification-badge--medium',
};

export const SIZES = keysOf(sizeToClassNameMap);

type NotificationBadgeType = {
    children?: any;
    className?: any;
    size?: string;
    color?: string;
}

export class NotificationBadge extends PureComponent<NotificationBadgeType> {
    static defaultProps = {size: 's', color: 'accent'};

    render() {
        let {children, className, size = 's', color = 'accent', ...rest} = this.props;
        const classes = classNames(
            'c-notification-badge',
            sizeToClassNameMap[size],
            colorToClassMap[color],
            className
        );

        return (
            <span className={classes} {...rest}>
                {children}
            </span>
        );
    }
}
