import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {omit} from '../../../services/objects';

const typeToClassNameMap = {
    inList: 'softCheckbox--inList',
};

export const TYPES = Object.keys(typeToClassNameMap);

export class SoftCheckbox extends Component<{
    className?: any,
    id?: any,
    readOnly?: boolean;
    checked?: any,
    label?: any,
    onChange?: any,
    type?: any,
    disabled?: any,
    compressed?: any,
    indeterminate?: any;
    inputRef?: any;
    title?: any
}> {
    private inputRef: any;
    static propTypes: {};
    static defaultProps: {};

    componentDidMount() {
        this.invalidateIndeterminate();
    }

    componentDidUpdate() {
        this.invalidateIndeterminate();
    }

    render() {
        const {
            className,
            id,
            checked,
            label,
            onChange,
            type,
            disabled,
            compressed,
            readOnly,
            ...rest
        } = this.props;

        // @ts-ignore
        const inputProps = omit(rest, 'indeterminate');

        const classes = classNames(
            'softCheckbox',
            typeToClassNameMap[type],
            {
                'softCheckbox--noLabel': !label,
                'softCheckbox--compressed': compressed
            },
            className
        );

        let optionalLabel;

        if (label) {
            optionalLabel = (
                <label
                    className="softCheckbox__label"
                    htmlFor={id}
                >
                    {label}
                </label>
            );
        }

        return (
            <div
                className={classes}
            >
                <input
                    readOnly={readOnly}
                    className="softCheckbox__input"
                    type="checkbox"
                    id={id}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    ref={this.setInputRef}
                    {...inputProps}
                />

                <div className="softCheckbox__square"/>

                {optionalLabel}
            </div>
        );
    }

    setInputRef = (input) => {
        this.inputRef = input;

        if (this.props.inputRef) {
            this.props.inputRef(input);
        }

        this.invalidateIndeterminate();
    }

    invalidateIndeterminate() {
        if (this.inputRef) {
            this.inputRef.indeterminate = this.props.indeterminate;
        }
    }
}

SoftCheckbox.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string.isRequired,
    checked: PropTypes.bool,
    label: PropTypes.node,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.oneOf(TYPES),
    disabled: PropTypes.bool,
    indeterminate: PropTypes.bool,
    /**
     * when `true` creates a shorter height checkbox row
     */
    compressed: PropTypes.bool,
};

SoftCheckbox.defaultProps = {
    checked: false,
    disabled: false,
    indeterminate: false,
    compressed: false,
};
