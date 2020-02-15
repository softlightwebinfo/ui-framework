import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {
    SoftFormControlLayout,
} from '../form_control_layout';

import {
    SoftValidatableControl,
} from '../validatable_control';

export const SoftFieldText: (
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
    const classes = classNames('softFieldText', className, {
        'softFieldText--withIcon': icon,
        'softFieldText--fullWidth': fullWidth,
        'softFieldText--compressed': compressed,
        'softFieldText--default': defaults,
        'softFieldText--inGroup': prepend || append,
        'softFieldText-isLoading': isLoading,
    });

    return (
        <SoftFormControlLayout
            icon={icon}
            fullWidth={fullWidth}
            isLoading={isLoading}
            compressed={compressed}
            prepend={prepend}
            append={append}
        >
            <SoftValidatableControl
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
            </SoftValidatableControl>
        </SoftFormControlLayout>
    );
};

// @ts-ignore
SoftFieldText.propTypes = {
    name: PropTypes.string,
    id: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    icon: PropTypes.string,
    isInvalid: PropTypes.bool,
    inputRef: PropTypes.func,
    fullWidth: PropTypes.bool,
    isLoading: PropTypes.bool,
    /**
     * when `true` creates a shorter height input
     */
    compressed: PropTypes.bool,
    /**
     * Creates an input group with element(s) coming before input
     */
    prepend: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
    /**
     * Creates an input group with element(s) coming after input
     */
    append: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.arrayOf(PropTypes.node),
    ]),
};

// @ts-ignore
SoftFieldText.defaultProps = {
    value: undefined,
    fullWidth: false,
    isLoading: false,
    compressed: false,
};
