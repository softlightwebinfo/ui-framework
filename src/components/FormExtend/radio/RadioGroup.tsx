import React from 'react';
import {Radio} from './Radio';

export const RadioGroup: ({options, idSelected, onChange, name, className, disabled, compressed, ...rest}: {
    options?: any; idSelected?: any; onChange?: any; name?: any; className?: any; disabled?: any; compressed?: any; [p: string]: any
}) => any = (
    {
        options,
        idSelected,
        onChange,
        name,
        className,
        disabled,
        compressed,
        ...rest
    }
) => (
    <div className={className} {...rest}>
        {options.map((option, index) => {
            const {
                disabled: isOptionDisabled,
                ...optionRest
            } = option;
            return (
                <Radio
                    className="c-radio__item"
                    key={index}
                    name={name}
                    checked={option.id === idSelected}
                    disabled={disabled || isOptionDisabled}
                    onChange={onChange.bind(null, option.id, option.value)}
                    compressed={compressed}
                    {...optionRest}
                />
            );
        })}
    </div>
);

// @ts-ignore
RadioGroup.defaultProps = {
    options: [],
};
