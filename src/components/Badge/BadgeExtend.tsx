import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {isColorDark, hexToRgb} from '../../services/color';
import {SoftKeyboardAccessible} from '../Accessibility';

import {
    SoftIcon,
} from '../Icon';

import {
    TYPES as ICON_TYPES,
} from '../Icon/SoftIcon';

const colorToClassNameMap = {
    default: 'softBadge--default',
    primary: 'softBadge--primary',
    secondary: 'softBadge--secondary',
    accent: 'softBadge--accent',
    warning: 'softBadge--warning',
    danger: 'softBadge--danger',
    hollow: 'softBadge--hollow',
    info: 'softBadge--info',
};

export const COLORS = Object.keys(colorToClassNameMap);

const iconSideToClassNameMap = {
    left: '',
    right: 'softBadge--iconRight',
};

export const ICON_SIDES = Object.keys(iconSideToClassNameMap);

export class SoftBadge extends PureComponent<{
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
    static propTypes: any = {

    };

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
            'softBadge',
            iconSideToClassNameMap[iconSide],
            optionalColorClass,
            className,
            {"softBadge--hide-label": !showLabel}
        );

        const closeClassNames = classNames(
            'softBadge__icon',
            closeButtonProps && closeButtonProps.className
        );

        let optionalIcon = null;
        if (iconType) {
            if (iconOnClick) {
                optionalIcon = (
                    <SoftKeyboardAccessible>
                        <SoftIcon
                            onClick={iconOnClick}
                            type={iconType}
                            size="s"
                            aria-label={iconOnClickAriaLabel}
                            {...closeButtonProps}
                            className={closeClassNames}
                        />
                    </SoftKeyboardAccessible>
                );

            } else {
                optionalIcon = (
                    <SoftIcon type={iconType} size="s" className="softBadge__icon"/>
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
        <span className="softBadge__content">
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
        <span className="softBadge__content">
          {optionalIcon}
            <span className="softBadge__text">
            {children}
          </span>
        </span>
      </span>
            );
        }
    }
}


function checkValidColor(props, propName, componentName) {
    const validHex = /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(props.color);
    if (props.color != null && !validHex && !COLORS.includes(props.color)) {
        throw new Error(
            `${componentName} needs to pass a valid color. This can either be a three ` +
            `or six character hex value or one of the following: ${COLORS}`
        );
    }
}

SoftBadge.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,

    /**
     * Accepts any string from our icon library
     */
    iconType: PropTypes.oneOf(ICON_TYPES),

    /**
     * The side of the badge the icon should sit
     */
    iconSide: PropTypes.string,
    /**
     * Will apply an onclick to icon within the badge
     */
    iconOnClick: PropTypes.func,

    /**
     * Aria label applied to the iconOnClick button
     */
    iconOnClickAriaLabel: PropTypes.string,

    /**
     * Will apply an onclick to the badge itself
     */
    onClick: PropTypes.func,

    /**
     * Aria label applied to the onClick button
     */
    onClickAriaLabel: PropTypes.string,

    /**
     * Accepts either our palette colors (primary, secondary ..etc) or a hex value `#FFFFFF`, `#000`.
     */
    color: checkValidColor,

    /**
     * Props passed to the close button.
     */
    closeButtonProps: PropTypes.object,
};


