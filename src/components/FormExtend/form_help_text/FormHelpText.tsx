import React from 'react';

import classNames from 'classnames';

export const FormHelpText: ({children, className, ...rest}: { children?: any; className?: any; [p: string]: any }) => any = ({children, className, ...rest}) => {
    const classes = classNames('c-form-help-text', className);

    return (
        <div className={classes} {...rest}>
            {children}
        </div>
    );
};
