import React, {Component} from 'react';
import classNames from 'classnames';

import {BadgeExtend} from '../../Badge';
import {I18n} from '../../I18n';

export class ComboBoxPill extends Component<{
    option?: any,
    children?: string,
    className?: string,
    color?: string,
    onClose?: (param?: any) => any,
    asPlainText?: boolean,
    onClick?: (param?: any) => any,
    onClickAriaLabel?: string,
}> {
    static defaultProps = {
        color: 'hollow',
    };

    onCloseButtonClick = () => {
        const {onClose, option} = this.props;
        // @ts-ignore
        onClose(option);
    };

    render() {
        const {
            children,
            className,
            option, // eslint-disable-line no-unused-vars
            onClose, // eslint-disable-line no-unused-vars
            color,
            onClick,
            onClickAriaLabel,
            asPlainText,
            ...rest
        } = this.props;
        const classes = classNames(
            'c-combo-box-pill',
            {
                'c-combo-box-pill--plainText': asPlainText,
            },
            className
        );

        if (onClose) {
            return (
                <I18n
                    token="c-combo-box-pill.removeSelection"
                    default="Remove {children} from selection in this group"
                    values={{children}}
                >
                    {removeSelection => (
                        <BadgeExtend
                            className={classes}
                            title={children}
                            iconOnClick={this.onCloseButtonClick}
                            iconOnClickAriaLabel={removeSelection}
                            iconType="cross"
                            iconSide="right"
                            color={color}
                            closeButtonProps={{
                                tabIndex: '-1',
                            }}
                            onClick={onClick}
                            onClickAriaLabel={onClickAriaLabel}
                            {...rest}
                        >
                            {children}
                        </BadgeExtend>
                    )}
                </I18n>
            );
        }

        if (asPlainText) {
            return (
                <span className={classes} {...rest}>
                  {children}
                </span>
            );
        }

        return (
            <BadgeExtend
                className={classes}
                title={children}
                color={color}
                {...rest}
                onClick={onClick}
                onClickAriaLabel={onClickAriaLabel}
            >
                {children}
            </BadgeExtend>
        );
    }
}
