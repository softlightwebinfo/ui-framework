import React, {
    cloneElement,
    Component,
} from 'react';
import classNames from 'classnames';

import {FormControlLayoutIcons} from './FormControlLayoutIcons';

export const ICON_SIDES = ['left', 'right'];

export class FormControlLayout extends Component<{
    children?: any,
    icon?: any,
    clear?: any,
    fullWidth?: any,
    isLoading?: any,
    compressed?: any,
    className?: any,
    prepend?: any,
    append?: any,
}> {
    static propTypes: {};
    static defaultProps: {};

    render() {
        const {
            children,
            icon,
            clear,
            fullWidth,
            isLoading,
            compressed,
            className,
            prepend,
            append,
            ...rest
        } = this.props;

        const classes = classNames(
            'c-form-control-layout',
            {
                'c-form-control-layout--fullWidth': fullWidth,
                'c-form-control-layout--compressed': compressed,
                'c-form-control-layout--group': prepend || append,
            },
            className
        );

        const prependNodes = this.renderPrepends();
        const appendNodes = this.renderAppends();

        let clonedChildren;
        if ((prepend || append) && children) {
            clonedChildren = cloneElement(children, {
                className: `${children.props.className} c-form-control-layout__child--noStyle`,
            });
        }

        return (
            <div className={classes} {...rest}>
                {prependNodes}
                <div className="c-form-control-layout__childrenWrapper">
                    {clonedChildren || children}

                    <FormControlLayoutIcons
                        icon={icon}
                        clear={clear}
                        isLoading={isLoading}
                    />
                </div>
                {appendNodes}
            </div>
        );
    }

    renderPrepends() {
        const {prepend} = this.props;

        if (!prepend) {
            return;
        }

        let prependNodes;

        if (Array.isArray(prepend)) {
            prependNodes = prepend.map((item, index) => {
                return this.createSideNode(item, 'prepend', index);
            });
        } else {
            prependNodes = this.createSideNode(prepend, 'prepend');
        }

        return prependNodes;
    }

    renderAppends() {
        const {append} = this.props;

        if (!append) {
            return;
        }

        let appendNodes;

        if (Array.isArray(append)) {
            appendNodes = append.map((item, index) => {
                return this.createSideNode(item, 'append', index);
            });
        } else {
            appendNodes = this.createSideNode(append, 'append');
        }

        return appendNodes;
    }

    createSideNode(node: any, side: any, key?: any) {
        return cloneElement(node, {
            className: `c-form-control-layout__${side}`,
            key: key
        });
    }
}

FormControlLayout.defaultProps = {
    isLoading: false,
    compressed: false,
};
