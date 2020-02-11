import React from 'react';
import classNames from 'classnames';

const sizeToClassNameMap = {
    s: 'c-tabs--small',
    m: null,
};

export const SIZES = Object.keys(sizeToClassNameMap);

export const Tabs: ({size, expand, children, className, ...rest}: {
    size?: any; expand?: any; children?: any; className?: any; [p: string]: any
}) => any = (
    {
        size,
        expand,
        children,
        className,
        ...rest
    }) => {
    const classes = classNames(
        'c-tabs',
        sizeToClassNameMap[size],
        {
            'c-tabs--expand': expand,
        },
        className
    );

    return (
        <div
            role="tablist"
            className={classes}
            {...rest}
        >
            {children}
        </div>
    );
};
