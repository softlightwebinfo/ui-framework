import React from 'react';
import classNames from 'classnames';

export const Radio: ({className, id, name, checked, label, value, onChange, disabled, compressed, autoFocus, ...rest}: {
    className?: any; id?: any; name?: any; checked?: any; label?: any; value?: any; onChange?: any; disabled?: any; compressed?: any; autoFocus?: any; [p: string]: any
}) => any = (
    {
        className,
        id,
        name,
        checked,
        label,
        value,
        onChange,
        disabled,
        compressed,
        autoFocus,
        ...rest
    }
) => {
    const classes = classNames(
        'c-radio',
        {
            'c-radio--noLabel': !label,
            'c-radio--compressed': compressed,
        },
        className
    );

    let optionalLabel;

    if (label) {
        optionalLabel = (
            <label
                className="c-radio__label"
                htmlFor={id}
            >
                {label}
            </label>
        );
    }

    return (
        <div
            className={classes}
            {...rest}
        >
            <input
                className="c-radio__input"
                type="radio"
                id={id}
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                disabled={disabled}
                autoFocus={autoFocus}
            />

            <div className="c-radio__circle"/>

            {optionalLabel}
        </div>
    );
};

// @ts-ignore
Radio.defaultProps = {
    checked: false,
    disabled: false,
    compressed: false,
};
