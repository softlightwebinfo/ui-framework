import React from 'react';
import PropTypes from 'prop-types';

import {SoftCheckbox} from './SoftCheckbox';

export interface SoftCheckboxGroup_optionsInterface {
    id: any;
    label: string;
}

export const SoftCheckboxGroup: (
    {
        options, idToSelectedMap, onChange, className, disabled, compressed, ...rest
    }: {
        options?: SoftCheckboxGroup_optionsInterface[]; idToSelectedMap?: any[]; onChange?: any; className?: any; disabled?: any; compressed?: any; [p: string]: any
    }) => any = (
    {
        options,
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
                <SoftCheckbox
                    className="softCheckboxGroup__item"
                    key={index}
                    id={option.id}
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
SoftCheckboxGroup.propTypes = {
    options: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.node,
        }),
    ).isRequired,
    idToSelectedMap: PropTypes.objectOf(PropTypes.bool).isRequired,
    onChange: PropTypes.func.isRequired,
    /**
     * Tightens up the spacing between checkbox rows and sends down the
     * compressed prop to the checkbox itself
     */
    compressed: PropTypes.bool,
};

// @ts-ignore
SoftCheckboxGroup.defaultProps = {
    options: [],
    idToSelectedMap: {}
};
