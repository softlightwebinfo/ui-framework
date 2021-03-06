import React, {PureComponent, ReactNode} from 'react';
import classNames from 'classnames';
import {BetaBadge} from "../Badge/beta_badge";


const paddingSizeToClassNameMap = {
    none: null,
    s: 'c-panel--paddingSmall',
    m: 'c-panel--paddingMedium',
    l: 'c-panel--paddingLarge',
};

export const SOFT_PANEL_SIZES = Object.keys(paddingSizeToClassNameMap);

export class Panel extends PureComponent<{
    children: ReactNode;
    className?: string;
    /**
     * If active, adds a deeper shadow to the panel
     */
    hasShadow?: boolean;
    /**
     * Padding applied to the panel
     */
    paddingSize?: string;
    /**
     * When true the panel will grow to match `SoftFlexItem`
     */
    grow?: boolean;
    panelRef?: any;
    onClick?: () => any;
    /**
     * Add a badge to the panel to label it as "Beta" or other non-GA state
     */
    betaBadgeLabel?: string;
    /**
     * Add a description to the beta badge (will appear in a tooltip)
     */
    betaBadgeTooltipContent?: ReactNode;
    /**
     * Optional title will be supplied as tooltip title or title attribute otherwise the label will be used
     */
    betaBadgeTitle?: string;
    tabIndex?: any;
    style?: object;
}> {
    static defaultProps = {
        paddingSize: 'm',
        hasShadow: false,
        grow: true,
    };
    static propTypes: {};

    render() {
        let {
            children,
            className,
            paddingSize,
            hasShadow,
            grow,
            panelRef,
            onClick,
            betaBadgeLabel,
            betaBadgeTooltipContent,
            betaBadgeTitle,
            ...rest
        }: any = this.props;

        const classes = classNames(
            'c-panel',
            paddingSizeToClassNameMap[paddingSize],
            {
                'c-panel--shadow': hasShadow,
                'c-panel--flexGrowZero': !grow,
                'c-panel--isClickable': onClick,
                'c-panel--hasBetaBadge': betaBadgeLabel,
            },
            className
        );

        const PanelTag = onClick ? 'button' : 'div';

        const props: { ref: string, className: string, onClick?: () => any } = {
            ref: panelRef,
            className: classes,
        };

        // Avoid passing down this prop if it hasn't been supplied, in order to
        // avoid noise in react-test-renderer snapshots.
        if (onClick != null) {
            props.onClick = onClick;
        }

        let optionalBetaBadge;
        if (betaBadgeLabel) {
            optionalBetaBadge = (
                <span className="c-panel__betaBadgeWrapper">
                  <BetaBadge
                      label={betaBadgeLabel}
                      title={betaBadgeTitle}
                      tooltipContent={betaBadgeTooltipContent}
                      className="c-panel__betaBadge"
                  />
                </span>
            );
        }

        return (
            <PanelTag {...props} {...rest}>
                {optionalBetaBadge}
                {children}
            </PanelTag>
        );

    }
}
