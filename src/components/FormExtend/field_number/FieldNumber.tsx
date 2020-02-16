import React from 'react';
import classNames from 'classnames';

import {
    FormControlLayout,
} from '../form_control_layout';

import {
    ValidatableControl,
} from '../validatable_control';

export const FieldNumber: (
    {
        className, icon, id, placeholder, name, min, max, value, isInvalid, fullWidth, isLoading, compressed, prepend, append, inputRef, ...rest
    }: {
        className?: any; icon?: any; id?: any; placeholder?: any; name?: any; min?: any; max?: any; value?: any; isInvalid?: any; fullWidth?: any; isLoading?: any; compressed?: any; prepend?: any; append?: any; inputRef?: any; [p: string]: any
    }) => any = (
    {
        className,
        icon,
        id,
        placeholder,
        name,
        min,
        max,
        value,
        isInvalid,
        fullWidth,
        isLoading,
        compressed,
        prepend,
        append,
        inputRef,
        ...rest
    }
) => {
    const classes = classNames('c-field-number', className, {
        'c-field-number--withIcon': icon,
        'c-field-number--fullWidth': fullWidth,
        'c-field-number--compressed': compressed,
        'c-field-number--inGroup': prepend || append,
        'c-field-number-isLoading': isLoading,
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
            <ValidatableControl isInvalid={isInvalid}>
                <input
                    type="number"
                    id={id}
                    min={min}
                    max={max}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    className={classes}
                    ref={inputRef}
                    {...rest}
                />
            </ValidatableControl>
        </FormControlLayout>
    );
};

// @ts-ignore
function numberOrEmptyString(props, propName, componentName) {
    componentName = componentName || 'ANONYMOUS';

    if (props[propName]) {
        const value = props[propName];
        if (typeof value === 'string' && value !== '') {
            return new Error(`Invalid prop '${propName}' of type 'string' supplied to '${componentName}',` +
                ` expected empty string or type 'number', you supplied a string with the contents '${value}'.`);
        } else if (typeof value !== 'number') {
            return new Error(`Invalid prop '${propName}' of type '${typeof value}' supplied to '${componentName}',` +
                ` expected empty string or type 'number'.`);
        }
    }

    // assume all ok
    return null;
}

// @ts-ignore
FieldNumber.defaultProps = {
    value: undefined,
    fullWidth: false,
    isLoading: false,
    compressed: false,
};
