import React, {
    cloneElement,
    Component,
} from 'react';
import classNames from 'classnames';

import {Icon} from '../Icon';
import {ToolTip} from '../Tooltip';

import {getSecureRelForTarget} from '../../services';

const layoutAlignToClassNames = {
    center: null,
    top: 'c-context-menu-extra__itemLayout--top',
    bottom: 'c-context-menu-extra__itemLayout--bottom',
};

export const LAYOUT_ALIGN = Object.keys(layoutAlignToClassNames);

export class ContextMenuExtraItem extends Component<{
    children?: any,
    className?: any,
    hasPanel?: any,
    icon?: any,
    buttonRef?: any,
    disabled?: any,
    layoutAlign?: any,
    toolTipTitle?: any,
    toolTipContent?: any,
    toolTipPosition?: any,
    href?: any,
    target?: any,
    rel?: any,
    onClick?: any
}> {
    static defaultProps: {};

    render() {

        const {
            children,
            className,
            hasPanel,
            icon,
            buttonRef,
            disabled,
            layoutAlign,
            toolTipTitle,
            toolTipContent,
            toolTipPosition,
            href,
            target,
            rel,
            ...rest
        } = this.props;

        let iconInstance;

        if (icon) {
            switch (typeof icon) {
                case 'string':
                    iconInstance = (
                        <Icon
                            type={icon}
                            size="m"
                            className="c-context-menu-extra__icon"
                        />
                    );
                    break;

                default:
                    // Assume it's already an instance of an icon.
                    iconInstance = cloneElement(icon, {
                        className: 'c-context-menu-extra__icon'
                    });
            }
        }

        let arrow;

        if (hasPanel) {
            arrow = (
                <Icon
                    type="arrowRight"
                    size="m"
                    className="c-context-menu-extra__arrow"
                />
            );
        }

        const classes = classNames('c-context-menu-extraItem', className, {
            'c-context-menu-extraItem-isDisabled': disabled,
        });

        const layoutClasses = classNames('c-context-menu-extra__itemLayout', layoutAlignToClassNames[layoutAlign]);

        const buttonInner = (
            <span className={layoutClasses}>
        {iconInstance}
                <span className="c-context-menu-extraItem__text">
          {children}
        </span>
                {arrow}
      </span>
        );

        let button;
        // <a> elements don't respect the `disabled` attribute. So if we're disabled, we'll just pretend
        // this is a button and piggyback off its disabled styles.
        if (href && !disabled) {
            const secureRel = getSecureRelForTarget({href, target, rel});

            button = (
                <a
                    className={classes}
                    href={href}
                    target={target}
                    rel={secureRel}
                    ref={buttonRef}
                    {...rest}
                >
                    {buttonInner}
                </a>
            );
        } else {
            button = (
                <button
                    disabled={disabled}
                    className={classes}
                    type="button"
                    ref={buttonRef}
                    {...rest}
                >
                    {buttonInner}
                </button>
            );
        }

        if (toolTipContent) {
            return (
                <ToolTip
                    title={toolTipTitle ? toolTipTitle : null}
                    content={toolTipContent}
                    anchorClassName="soft-displayBlock"
                    position={toolTipPosition}
                >
                    {button}
                </ToolTip>
            );
        } else {
            return (
                button
            );
        }

    }
}

ContextMenuExtraItem.defaultProps = {
    toolTipPosition: 'right',
    layoutAlign: 'center',
};
