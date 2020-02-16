import React, {Component} from 'react';
import classNames from 'classnames';
import {CallOut} from '../CallOut';
import {I18n} from '../I18n';

export class FormExtend extends Component<{
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
        const classes = classNames('c-form-extend', className);

        let optionalErrors;

        if (error) {
            const errorTexts = Array.isArray(error) ? error : [error];
            optionalErrors = (
                <ul>
                    {errorTexts.map(error => (
                        <li className="c-form-extend__error" key={error}>
                            {error}
                        </li>
                    ))}
                </ul>
            );
        }

        let optionalErrorAlert;

        if (isInvalid) {
            optionalErrorAlert = (
                <I18n token="FormExtend.addressFormErrors" default="Please address the errors in your form.">
                    {addressFormErrors => (
                        <CallOut
                            className="c-form-extend__errors"
                            title={addressFormErrors}
                            color="danger"
                        >
                            {optionalErrors}
                        </CallOut>
                    )}
                </I18n>
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
