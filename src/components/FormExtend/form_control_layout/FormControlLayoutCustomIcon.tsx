import React from 'react';
import classNames from 'classnames';
import {Icon} from '../../Icon';

export const FormControlLayoutCustomIcon: ({className, onClick, type, iconRef, ...rest}: {
    className?: any; onClick?: any; type?: any; iconRef?: any; [p: string]: any
}) => (any | any) = (
    {
        className,
        onClick,
        type,
        iconRef,
        ...rest
    }) => {
    const classes = classNames(
        'c-form-control-layout-custom-icon',
        className,
        {
            'c-form-control-layout-custom-icon--clickable': onClick,
        },
    );

    if (onClick) {
        return (
            <button
                type="button"
                onClick={onClick}
                className={classes}
                ref={iconRef}
                {...rest}
            >
                <Icon
                    className="c-form-control-layout-custom-icon__icon"
                    aria-hidden="true"
                    type={type}
                />
            </button>
        );
    }

    return (
        <span
            className={classes}
            ref={iconRef}
            {...rest}
        >
      <Icon
          className="c-form-control-layout-custom-icon__icon"
          aria-hidden="true"
          type={type}
      />
    </span>
    );
};
