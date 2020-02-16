import React, {Component} from 'react';
import classNames from 'classnames';

import {getSecureRelForTarget} from '../../services';
import {LinkInterface} from "./LinkInterface";

const colorsToClassNameMap = {
    'primary': 'c-link--primary',
    'subdued': 'c-link--subdued',
    'secondary': 'c-link--secondary',
    'accent': 'c-link--accent',
    'danger': 'c-link--danger',
    'warning': 'c-link--warning',
    'ghost': 'c-link--ghost',
    'text': 'c-link--text',
};

export class Link extends Component<LinkInterface> {
    static defaultProps = {color: ''};
    static propTypes: {};

    render() {
        let {
            children,
            color = '',
            className,
            href,
            target,
            rel,
            type,
            onClick,
            title,
            ...rest
        }: LinkInterface = this.props;
        const classes = classNames('c-link', colorsToClassNameMap[color], className);

        if (href === undefined) {
            return (
                <button
                    title={title}
                    className={classes}
                    // @ts-ignore
                    type={type}
                    onClick={onClick}
                    {...rest}
                >
                    {children}
                </button>
            );
        }

        const secureRel = getSecureRelForTarget({href, target, rel});

        return (
            <a
                title={title}
                className={classes}
                href={href}
                target={target}
                rel={secureRel}
                onClick={onClick}
                {...rest}
            >
                {children}
            </a>
        );
    }
}

Link.defaultProps = {
    color: ''
};
