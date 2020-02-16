import React from 'react';
import classNames from 'classnames';

import {
    FormControlLayout,
} from '../form_control_layout';

import {
    ValidatableControl,
} from '../validatable_control';

export const SelectExtra: ({className, options, id, name, inputRef, isInvalid, fullWidth, isLoading, hasNoInitialSelection, defaultValue, compressed, value, prepend, append, ...rest}: {
    className?: any; options?: any; id?: any; name?: any; inputRef?: any; isInvalid?: any; fullWidth?: any; isLoading?: any; hasNoInitialSelection?: any; defaultValue?: any; compressed?: any; value?: any; prepend?: any; append?: any; [p: string]: any
}) => any = (
    {
        className,
        options,
        id,
        name,
        inputRef,
        isInvalid,
        fullWidth,
        isLoading,
        hasNoInitialSelection,
        defaultValue,
        compressed,
        value,
        prepend,
        append,
        ...rest
    }
) => {
    const classes = classNames(
        'c-select-extend',
        {
            'c-select-extend--fullWidth': fullWidth,
            'c-select-extend--compressed': compressed,
            'c-select-extend--inGroup': prepend || append,
            'c-select-extend-isLoading': isLoading,
        },
        className
    );

    let emptyOptionNode;
    if (hasNoInitialSelection) {
        emptyOptionNode = (
            <option value="" disabled hidden style={{display: 'none'}}>&nbsp;</option>
        );
    }

    // React HTML input can not have both value and defaultValue properties.
    // https://reactjs.org/docs/uncontrolled-components.html#default-values
    let selectDefaultValue;
    if (value == null) {
        selectDefaultValue = defaultValue || '';
    }

    const icon = {
        type: 'arrowDown',
        side: 'right',
    };

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
                <select
                    id={id}
                    name={name}
                    className={classes}
                    ref={inputRef}
                    defaultValue={selectDefaultValue}
                    value={value}
                    {...rest}
                >
                    {emptyOptionNode}
                    {options.map((option, index) => {
                        const {
                            text,
                            ...rest
                        } = option;
                        return <option {...rest} key={index}>{text}</option>;
                    })}
                </select>
            </ValidatableControl>
        </FormControlLayout>
    );
};
// @ts-ignore
SelectExtra.defaultProps = {
    options: [],
    fullWidth: false,
    isLoading: false,
    hasNoInitialSelection: false,
    compressed: false,
};
