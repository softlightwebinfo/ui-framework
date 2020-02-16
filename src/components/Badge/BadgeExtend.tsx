import React, {PureComponent} from 'react';
import classNames from 'classnames';
import {isColorDark, hexToRgb} from '../../services/color';
import {KeyboardAccessible} from '../Accessibility';

import {
    Icon,
} from '../Icon';

const colorToClassNameMap = {
    default: 'c-badge-extend--default',
    primary: 'c-badge-extend--primary',
    secondary: 'c-badge-extend--secondary',
    accent: 'c-badge-extend--accent',
    warning: 'c-badge-extend--warning',
    danger: 'c-badge-extend--danger',
    hollow: 'c-badge-extend--hollow',
    info: 'c-badge-extend--info',
};

export const COLORS = Object.keys(colorToClassNameMap);

const iconSideToClassNameMap = {
    left: '',
    right: 'c-badge-extend--iconRight',
};

export const ICON_SIDES = Object.keys(iconSideToClassNameMap);

export class BadgeExtend extends PureComponent<{
    children?: any,
    showLabel?: boolean;
    color?: any,
    iconType?: any,
    iconSide?: any,
    className?: any,
    onClick?: any,
    iconOnClick?: any,
    onClickAriaLabel?: any,
    iconOnClickAriaLabel?: any,
    closeButtonProps?: any,
    title?: any
}> {
    static defaultProps = {
        color: 'default',
        iconSide: 'left',
        showLabel: true,
    };
    static propTypes: any = {};

    render() {
        let {
            children,
            color,
            iconType,
            iconSide,
            className,
            onClick,
            iconOnClick,
            onClickAriaLabel,
            iconOnClickAriaLabel,
            closeButtonProps,
            showLabel,
            ...rest
        }: any = this.props;

        let optionalColorClass: any = null;
        let optionalCustomStyles: any = null;
        let textColor: any = null;

        if (COLORS.indexOf(color) > -1) {
            optionalColorClass = colorToClassNameMap[color];
        } else {

            // @ts-ignore
            if (isColorDark(...hexToRgb(color))) {
                textColor = '#FFFFFF';
            } else {
                textColor = '#000000';
            }

            optionalCustomStyles = {backgroundColor: color, color: textColor};
        }

        const classes = classNames(
            'c-badge-extend',
            iconSideToClassNameMap[iconSide],
            optionalColorClass,
            className,
            {"c-badge-extend--hide-label": !showLabel}
        );

        const closeClassNames = classNames(
            'c-badge-extend__icon',
            closeButtonProps && closeButtonProps.className
        );

        let optionalIcon = null;
        if (iconType) {
            if (iconOnClick) {
                // @ts-ignore
                optionalIcon = (
                    <KeyboardAccessible>
                        <Icon
                            onClick={iconOnClick}
                            type={iconType}
                            size="s"
                            aria-label={iconOnClickAriaLabel}
                            {...closeButtonProps}
                            className={closeClassNames}
                        />
                    </KeyboardAccessible>
                );

            } else {
                // @ts-ignore
                optionalIcon = (
                    <Icon type={iconType} size="s" className="c-badge-extend__icon"/>
                );
            }
        }

        if (onClick) {
            return (
                <button
                    className={classes}
                    style={optionalCustomStyles}
                    onClick={onClick}
                    aria-label={onClickAriaLabel}
                    {...rest}
                >
                    <span className="c-badge-extend__content">
                      {optionalIcon}
                        <span>
                        {children}
                      </span>
                    </span>
                </button>
            );
        } else {
            return (
                <span
                    className={classes}
                    style={optionalCustomStyles}
                    {...rest}
                >
        <span className="c-badge-extend__content">
          {optionalIcon}
            <span className="c-badge-extend__text">
            {children}
          </span>
        </span>
      </span>
            );
        }
    }
}


// @ts-ignore
function checkValidColor(props, propName, componentName) {
    const validHex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(props.color);
    if (props.color != null && !validHex && !COLORS.includes(props.color)) {
        throw new Error(
            `${componentName} needs to pass a valid color. This can either be a three ` +
            `or six character hex value or one of the following: ${COLORS}`
        );
    }
}
