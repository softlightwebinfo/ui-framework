import React from 'react';
import classNames from 'classnames';

import {
    FormControlLayout,
} from '../form_control_layout';

import {
    ValidatableControl,
} from '../validatable_control';

export const FieldPassword: ({className, id, name, placeholder, value, isInvalid, fullWidth, isLoading, compressed, inputRef, ...rest}: {
    className?: any; id?: any; name?: any; placeholder?: any;
    value?: any; isInvalid?: any; fullWidth?: any; isLoading?: boolean;
    compressed?: any; inputRef?: any; [p: string]: any
}) => any = (
    {
        className,
        id,
        name,
        placeholder,
        value,
        isInvalid,
        fullWidth,
        isLoading,
        compressed,
        inputRef,
        ...rest
    }
) => {
    const classes = classNames(
        'c-field-password',
        {
            'c-field-password--fullWidth': fullWidth,
            'c-field-password--compressed': compressed,
            'c-field-password-isLoading': isLoading,
        },
        className
    );

    return (
        <FormControlLayout
            icon="lock"
            fullWidth={fullWidth}
            isLoading={isLoading}
            compressed={compressed}
        >
            <ValidatableControl isInvalid={isInvalid}>
                <input
                    type="password"
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
FieldPassword.defaultProps = {
    value: undefined,
    fullWidth: false,
    isLoading: false,
    compressed: false,
};
