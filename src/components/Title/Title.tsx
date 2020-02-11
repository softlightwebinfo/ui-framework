import React, {PureComponent} from 'react';
import classNames from 'classnames';

const titleSizeToClassNameMap = {
    xxxs: 'c-title--xxxsmall',
    xxs: 'c-title--xxsmall',
    xs: 'c-title--xsmall',
    s: 'c-title--small',
    m: 'c-title--medium',
    l: 'c-title--large',
};

const textTransformToClassNameMap = {
    uppercase: 'c-title--uppercase',
};

type TitleType = {
    size?: string;
    children?: any;
    className?: any;
    textTransform?: any;
    id?: any;
    tabIndex?: any
    style?: object;
    title?: string;
    subtitle?: string;
}

export class Title extends PureComponent<TitleType> {
    static defaultProps = {size: 'm'};

    render() {
        let {
            size = 'm',
            children,
            className,
            textTransform,
            ...rest
        } = this.props;
        const classes = classNames(
            'c-title',
            titleSizeToClassNameMap[size],
            textTransform ? textTransformToClassNameMap[textTransform] : undefined,
            className
        );

        const props = {
            className: classes,
            ...rest,
        };
        return React.cloneElement(children, props);
    }
}
