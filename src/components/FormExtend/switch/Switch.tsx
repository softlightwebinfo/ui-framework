import React, {
    Component, ReactNode,
} from 'react';
import classNames from 'classnames';

import makeId from '../../FormExtend/form_row/make_id';
import {Icon} from '../../Icon';

export class Switch extends Component<{
    name?: string,
    id?: string,
    label?: ReactNode,
    checked?: boolean,
    onChange?: (e?: any) => any,
    disabled?: boolean,
    compressed?: boolean,
    className?: string
}> {
    static propTypes: {};
    state = {
        switchId: this.props.id || makeId(),
    };

    constructor(props) {
        super(props);
    }

    render() {
        const {
            label,
            id, // eslint-disable-line no-unused-vars
            name,
            checked,
            disabled,
            compressed,
            onChange,
            className,
            ...rest
        } = this.props;

        const {switchId}: Readonly<any> = this.state;

        const classes = classNames(
            'c-switch',
            {
                'c-switch--compressed': compressed,
            },
            className
        );

        return (
            <div className={classes}>
                <input
                    className="c-switch__input"
                    name={name}
                    id={switchId}
                    type="checkbox"
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                    {...rest}
                />

                <span className="c-switch__body">
                  <span className="c-switch__thumb"/>
                  <span className="c-switch__track">
                    <Icon
                        type="cross"
                        size="m"
                        className="c-switch__icon"
                    />

                    <Icon
                        type="check"
                        size="m"
                        className="c-switch__icon c-switch__icon--checked"
                    />
                  </span>
                </span>

                {label && (
                    <label
                        className="c-switch__label"
                        htmlFor={switchId}
                    >
                        {label}
                    </label>
                )}
            </div>
        );
    }
}
