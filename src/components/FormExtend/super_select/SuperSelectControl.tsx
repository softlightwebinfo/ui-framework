import React, {Fragment} from 'react';
import classNames from 'classnames';
import {ScreenReaderOnly} from '../../Accessibility';
import makeId from '../form_row/make_id';
import {
    FormControlLayout,
} from '../form_control_layout';
import {I18n} from '../../I18n';

export const SuperSelectControl: (
    {className, options, id, name, fullWidth, isLoading, isInvalid, defaultValue, compressed, value, ...rest}: {
        classNam?: any; options?: any; id?: any; name?: any; fullWidth?: any; isLoading?: boolean; isInvalid?: boolean; defaultValue?: any; compressed?: any; value?: any; [p: string]: any
    }) => any = (
    {
        className,
        options,
        id,
        name,
        fullWidth,
        isLoading,
        isInvalid,
        defaultValue,
        compressed,
        value,
        ...rest
    }
) => {
    const classes = classNames(
        'c-super-select-control',
        {
            'c-super-select-control--fullWidth': fullWidth,
            'c-super-select-control--compressed': compressed,
            'c-super-select-control-isLoading': isLoading,
            'c-super-select-control-isInvalid': isInvalid,
        },
        className
    );

    // React HTML input can not have both value and defaultValue properties.
    // https://reactjs.org/docs/uncontrolled-components.html#default-values
    let selectDefaultValue;
    if (value == null) {
        selectDefaultValue = defaultValue || '';
    }

    let selectedValue = '';
    if (value) {
        const selectedOption = options.find(option => option.value === value);
        selectedValue = selectedOption.inputDisplay;
    }

    const icon = {
        type: 'arrowDown',
        side: 'right',
    };

    const screenReaderId = makeId();

    return (
        <Fragment>
            <input
                type="hidden"
                id={id}
                name={name}
                defaultValue={selectDefaultValue}
                value={value}
            />

            <FormControlLayout
                icon={icon}
                fullWidth={fullWidth}
                isLoading={isLoading}
                compressed={compressed}
            >

                {/*
          This is read when the user tabs in. The comma is important,
          otherwise the screen reader often combines the text.
        */}
                <ScreenReaderOnly>
                  <span id={screenReaderId}>
                    <I18n
                        token="c-super-select-control.selectAnOption"
                        default="Select an option: {selectedValue}, is selected"
                        values={{selectedValue}}
                    />
                  </span>
                </ScreenReaderOnly>

                <button
                    role="option"
                    type="button"
                    className={classes}
                    aria-haspopup="true"
                    aria-labelledby={`${id} ${screenReaderId}`}
                    {...rest}
                >
                    {selectedValue}
                </button>

            </FormControlLayout>
        </Fragment>
    );
};
// @ts-ignore
SuperSelectControl.defaultProps = {
    options: [],
    fullWidth: false,
    isLoading: false,
    isInvalid: false,
    compressed: false,
};
