import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {SoftCallOut} from '../CallOut';
import {SoftI18n} from '../I18n';

export class SoftForm extends Component<{
    isInvalid?: boolean;
    error?: any;
    className?: string;
    style?: object;
    id?: any;
    [p: string]: any;
}> {
    render() {
        let {
            children,
            className,
            isInvalid,
            error,
            ...rest
        } = this.props;
        const classes = classNames('softForm', className);

        let optionalErrors;

        if (error) {
            const errorTexts = Array.isArray(error) ? error : [error];
            optionalErrors = (
                <ul>
                    {errorTexts.map(error => (
                        <li className="softForm__error" key={error}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }

        let optionalErrorAlert;

        if (isInvalid) {
            optionalErrorAlert = (
                <SoftI18n token="softForm.addressFormErrors" default="Please address the errors in your form.">
                    {addressFormErrors => (
                        <SoftCallOut
                            className="softForm__errors"
                            title={addressFormErrors}
                            color="danger"
                        >
                            {optionalErrors}
                        </SoftCallOut>
                    )}
                </SoftI18n>
            );
        }

        return (
            <div
                className={classes}
                {...rest}
            >
                {optionalErrorAlert}
                {children}
            </div>
        );
    }
}

// @ts-ignore
SoftForm.propTypes = {
    isInvalid: PropTypes.bool,
    error: PropTypes.oneOfType([PropTypes.node, PropTypes.arrayOf(PropTypes.node)]),
};
