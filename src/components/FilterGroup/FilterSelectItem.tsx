import React, {Component} from 'react';
import classNames from 'classnames';

import {FlexGroup, FlexItem} from '../Flex';

import {Icon} from '../Icon';

const CHECKED_ON = 'on';
// const CHECKED_OFF = 'off';

const resolveIconAndColor = checked => {
    if (!checked) {
        return {icon: 'empty'};
    }
    return checked === CHECKED_ON
        ? {icon: 'check', color: 'text'}
        : {icon: 'cross', color: 'text'};
};

export class FilterSelectItem extends Component<{
    children?: any,
    className?: any,
    disabled?: any,
    checked?: any,
    isFocused?: any,
    showIcons?: any,
    onClick?: () => any,
    onKeyDown?: () => any
}> {
    private mounted: any;
    static propTypes: {};
    state = {hasFocus: false};
    private buttonRef: any;
    static defaultProps: { showIcons: boolean };

    constructor(props) {
        super(props);
    }

    focus = () => {
        if (this.buttonRef) {
            this.buttonRef.focus();
        }
    };

    onFocus = () => {
        if (this.mounted) {
            this.setState({hasFocus: true});
        }
    };

    onBlur = () => {
        if (this.mounted) {
            this.setState({hasFocus: false});
        }
    };

    hasFocus = () => {
        return this.state.hasFocus;
    };

    render() {
        const {
            children,
            className,
            disabled,
            checked,
            isFocused,
            showIcons,
            ...rest
        } = this.props;
        const classes = classNames(
            'c-filter-select-item',
            {
                'c-filter-select-item-isFocused': isFocused,
            },
            className
        );

        let iconNode;
        if (showIcons) {
            const {icon, color} = resolveIconAndColor(checked);
            iconNode = (
                <FlexItem grow={false}>
                    <Icon color={color} type={icon}/>
                </FlexItem>
            );
        }

        return (
            <button
                ref={ref => (this.buttonRef = ref)}
                role="option"
                type="button"
                aria-selected={isFocused}
                className={classes}
                disabled={disabled}
                aria-disabled={disabled}
                {...rest}
            >
                <FlexGroup
                    alignItems="center"
                    gutterSize="s"
                    component="span"
                    responsive={false}
                >
                    {iconNode}
                    <FlexItem className="c-filter-select-item__content">{children}</FlexItem>
                </FlexGroup>
            </button>
        );
    }
}
