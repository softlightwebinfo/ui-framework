import React, {PureComponent} from 'react';
import classNames from 'classnames';
import {ToolTip} from '../../Tooltip';
import {Icon} from '../../Icon';

export class BetaBadge extends PureComponent<{
    className?: any
    /**
     * One word label like "Beta" or "Lab"
     */
    label?: any
    /**
     * Supply an icon type if the badge should just be an icon
     */
    iconType?: any
    /**
     * Content for the tooltip
     */
    tooltipContent?: any
    /**
     * Custom position of the tooltip
     */
    tooltipPosition?: any
    /**
     * Optional title will be supplied as tooltip title or title attribute otherwise the label will be used
     */
    title?: any
}> {
    static defaultProps = {
        tooltipPosition: 'top',
    };
    static propTypes: {};

    render() {
        let {
            className,
            label,
            tooltipContent,
            tooltipPosition,
            title,
            iconType,
            ...rest
        }: any = this.props;

        const classes = classNames(
            'c-beta-badge',
            {
                'c-beta-badge--iconOnly': iconType,
            },
            className
        );

        let icon;
        if (iconType) {
            icon = (
                <Icon
                    className="c-beta-badge__icon"
                    type={iconType}
                    size="m"
                    aria-hidden="true"
                />
            );
        }

        if (tooltipContent) {
            return (
                <ToolTip
                    position={tooltipPosition}
                    content={tooltipContent}
                    title={title || label}
                >
        <span
            className={classes}
            {...rest}
        >
          {icon || label}
        </span>
                </ToolTip>
            );
            return null;
        } else {
            return (
                <span
                    className={classes}
                    title={title || label}
                    {...rest}
                >
                    {icon || label}
                </span>
            );
        }
    }
}
