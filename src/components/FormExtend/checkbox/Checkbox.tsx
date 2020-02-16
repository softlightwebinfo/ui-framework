import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import {omit} from '../../../services/objects';

const typeToClassNameMap = {
    inList: 'c-checkbox--inList',
};

export const TYPES = Object.keys(typeToClassNameMap);

export class Checkbox extends Component<{
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
            'c-checkbox',
            typeToClassNameMap[type],
            {
                'c-checkbox--noLabel': !label,
                'c-checkbox--compressed': compressed
            },
            className
        );

        let optionalLabel;

        if (label) {
            optionalLabel = (
                <label
                    className="c-checkbox__label"
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
                    className="c-checkbox__input"
                    type="checkbox"
                    id={id}
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                    ref={this.setInputRef}
                    {...inputProps}
                />

                <div className="c-checkbox__square"/>

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

Checkbox.propTypes = {
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

Checkbox.defaultProps = {
    checked: false,
    disabled: false,
    indeterminate: false,
    compressed: false,
};
