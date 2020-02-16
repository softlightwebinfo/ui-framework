import React from 'react';
import classNames from 'classnames';

export const FormErrorText: ({children, className, ...rest}: { children?: any; className?: any; [p: string]: any }) => any = ({children, className, ...rest}) => {
    const classes = classNames('c-form-error-text', className);

    return (
        <div className={classes} aria-live="polite" {...rest}>
            {children}
        </div>
    );
};
