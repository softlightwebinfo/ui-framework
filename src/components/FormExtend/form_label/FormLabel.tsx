import React from 'react';
import classNames from 'classnames';

export const FormLabel: ({type, isFocused, isInvalid, children, className, ...rest}: {
    type?: any; isFocused?: any; isInvalid?: any; children?: any; className?: any; [p: string]: any
}) => (any | any) = (
    {
        type = 'label',
        isFocused,
        isInvalid,
        children,
        className,
        ...rest
    }
) => {
    const classes = classNames('c-form-label', className, {
        'c-form-label-isFocused': isFocused,
        'c-form-label-isInvalid': isInvalid,
    });

    if (type === 'legend') {
        return (
            <legend
                className={classes}
                {...rest}>
                {children}
            </legend>
        );
    } else {
        return (
            <label
                className={classes}
                {...rest}>
                {children}
            </label>
        );
    }
};
