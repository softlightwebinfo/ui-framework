import React, {Component, Fragment} from 'react';
import classNames from 'classnames';
import {I18n} from '../I18n';
import {NotificationBadge} from '../Badge';
import {Button} from "../Button";

export class FilterButton extends Component<{
    children?: any,
    className?: any,
    onClick?: () => any,
    /**
     * Use any one of our icons
     */
    iconType?: any,
    iconSide?: any,
    color?: any,
    /**
     * Bolds the button if true
     */
    hasActiveFilters?: boolean,
    /**
     * Pass the total number of filters available and it will
     * add a subdued notification badge showing the number
     */
    numFilters?: number,
    /**
     * Pass the number of selected filters and it will
     * add a bright notification badge showing the number
     */
    numActiveFilters?: number,
    /**
     * Applies a visual state to the button useful when using with a popover.
     */
    isSelected?: boolean,
    isDisabled?: boolean,
    /**
     * Defines html button input type
     */
    type?: string,
    /**
     * Should the button grow to fill it's container, best used for dropdown buttons
     */
    grow?: boolean
    /**
     * Remove border after button, good for opposite filters
     */
    withNext?: boolean,
    /**
     * _DEPRECATED: use `withNext`_
     * Remove border after button, good for opposite filters
     */
    noDivider?: boolean,
    textProps?: any
}> {
    static defaultProps = {
        type: 'button',
        iconSide: 'right',
        color: 'text',
        grow: true,
    }
    static propTypes: {};

    render() {
        let {
            children,
            className,
            iconType,
            iconSide,
            color,
            hasActiveFilters,
            numFilters,
            numActiveFilters,
            isDisabled,
            isSelected,
            type,
            grow,
            noDivider,
            withNext,
            textProps,
            ...rest
        } = this.props;
        // != instead of !== to allow for null and undefined
        const numFiltersDefined = numFilters != null;

        const classes = classNames(
            'c-filter-button',
            {
                'c-filter-button-isSelected': isSelected,
                'c-filter-button-hasActiveFilters': hasActiveFilters,
                'c-filter-button-hasNotification': numFiltersDefined,
                'c-filter-button--hasIcon': iconType,
                'c-filter-button--noGrow': !grow,
                'c-filter-button--withNext': noDivider || withNext,
            },
            className,
        );

        const buttonTextClassNames = classNames(
            // 'c-filter-button__textShift',
            {'c-filter-button__text-hasNotification': numFiltersDefined,},
            textProps && textProps.className,
        );

        let dataText;
        if (typeof children === 'string') {
            dataText = children;
        }

        const buttonContents = (
            <Fragment>
              <span className="c-filter-button__textShift" data-text={dataText} title={dataText}>
                {children}
              </span>

                {numFiltersDefined &&
                <I18n
                  token="c-filter-button.filterBadge"
                  values={{count: numActiveFilters || numFilters, hasActiveFilters}}
                  default={({count, hasActiveFilters}) => `${count} ${hasActiveFilters ? 'active' : 'available'} filters`}
                >
                    {
                        filterBadge => (
                            <NotificationBadge
                                className="c-filter-button__notification"
                                size="m"
                                aria-label={filterBadge}
                                color={isDisabled || !hasActiveFilters ? 'subdued' : 'accent'}
                            >
                                {numActiveFilters || numFilters}
                            </NotificationBadge>
                        )
                    }
                </I18n>
                }
            </Fragment>
        );

        return (
            <Button
                className={classes}
                color={color}
                isDisabled={isDisabled}
                iconSide={iconSide}
                iconType={iconType}
                type={type}
                textProps={{...textProps, className: buttonTextClassNames}}
                {...rest}
                label={buttonContents}
            />
        );
    }
}
