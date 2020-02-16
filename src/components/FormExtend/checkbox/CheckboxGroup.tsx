import React from 'react';
import {Checkbox} from './Checkbox';

export interface CheckboxGroup_optionsInterface {
    id: any;
    label: string;
}

export const CheckboxGroup: (
    {
        options, idToSelectedMap, onChange, className, disabled, compressed, ...rest
    }: {
        options?: CheckboxGroup_optionsInterface[]; idToSelectedMap?: any[]; onChange?: any; className?: any; disabled?: any; compressed?: any; [p: string]: any
    }) => any = (
    {
        options = [],
        idToSelectedMap,
        onChange,
        className,
        disabled,
        compressed,
        ...rest
    }
) => (
    <div className={className} {...rest}>
        {options.map((option, index) => {
            return (
                <Checkbox
                    className="c-checkbox-group__item"
                    key={index}
                    id={option.id}
                    // @ts-ignore
                    checked={idToSelectedMap[option.id]}
                    label={option.label}
                    disabled={disabled}
                    onChange={onChange.bind(null, option.id)}
                    compressed={compressed}
                />
            );
        })}
    </div>
);
// @ts-ignore
CheckboxGroup.defaultProps = {
    options: [],
    idToSelectedMap: {}
};
