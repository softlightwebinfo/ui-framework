import React from 'react';
import classNames from 'classnames';

import {
    FormControlLayout,
} from '../form_control_layout';

import {
    ValidatableControl,
} from '../validatable_control';

export const FieldText: (
    {id, name, placeholder, value, type, className, icon, isInvalid, inputRef, fullWidth, isLoading, compressed, prepend, append, defaults, ...rest}: {
        id?: any; type?: string, name?: any; placeholder?: any; value?: any; className?: any; icon?: any; isInvalid?: any; inputRef?: any; fullWidth?: any; defaults?: boolean, isLoading?: any; compressed?: any; prepend?: any; append?: any; [p: string]: any
    }) => any = (
    {
        id,
        name,
        placeholder,
        value,
        className,
        icon,
        isInvalid,
        inputRef,
        fullWidth,
        isLoading,
        compressed,
        prepend,
        append,
        defaults,
        type,
        ...rest
    }
) => {
    const classes = classNames('c-field-text', className, {
        'c-field-text--withIcon': icon,
        'c-field-text--fullWidth': fullWidth,
        'c-field-text--compressed': compressed,
        'c-field-text--default': defaults,
        'c-field-text--inGroup': prepend || append,
        'c-field-text-isLoading': isLoading,
    });

    return (
        <FormControlLayout
            icon={icon}
            fullWidth={fullWidth}
            isLoading={isLoading}
            compressed={compressed}
            prepend={prepend}
            append={append}
        >
            <ValidatableControl
                isInvalid={isInvalid}
            >
                <input
                    type={type || "text"}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    className={classes}
                    value={value}
                    ref={inputRef}
                    {...rest}
                />
            </ValidatableControl>
        </FormControlLayout>
    );
};
// @ts-ignore
FieldText.defaultProps = {
    value: undefined,
    fullWidth: false,
    isLoading: false,
    compressed: false,
};
