import React from 'react';
import classNames from 'classnames';
import {Icon} from '../../Icon';
import {I18n} from '../../I18n';

export const FormControlLayoutClearButton: ({className, onClick, ...rest}: { className?: any; onClick?: any; [p: string]: any }) => any = (
    {
        className,
        onClick,
        ...rest
    }
) => {
    const classes = classNames('c-form-control-layout-clear-button', className);

    return (
        <I18n token="c-form-control-layout-clear-button.label" default="Clear input">
            {label => (
                <button
                    type="button"
                    className={classes}
                    onClick={onClick}
                    aria-label={label}
                    {...rest}
                >
                    <Icon
                        className="c-form-control-layout-clear-button__icon"
                        type="cross"
                    />
                </button>
            )}
        </I18n>
    );
};
