import {PureComponent} from "react";
import React from "react";
import {PropsInterface} from "../../interfaces/interfaces/PropsInterface";
import classNames from 'classnames';

export interface TabInterfaceProps extends PropsInterface {
    isSelected?: boolean;
    disabled?: boolean;
}

export class Tab extends PureComponent<TabInterfaceProps> {
    static defaultProps: {};
    static propTypes: {};

    render() {
        let {
            isSelected,
            onClick,
            children,
            className,
            disabled,
            ...rest
        } = this.props;
        const classes = classNames('c-tab', className, {
            'c-tab-isSelected': isSelected,
            'c-tab-isDisabled': disabled,
        });

        return (
            <button
                role="tab"
                aria-selected={isSelected}
                type="button"
                className={classes}
                onClick={onClick}
                disabled={disabled}
                {...rest}
            >
                <span className="c-tab__content">
                  {children}
                </span>
            </button>
        );
    }
}
