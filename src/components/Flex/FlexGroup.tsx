import React, {Component} from 'react';
import classNames from 'classnames';
import {keysOf} from '../common';

export type FlexGroupAlignItems = keyof typeof alignItemsToClassNameMap;
export type FlexGroupComponentType = 'div' | 'span';
export type FlexGroupDirection = keyof typeof directionToClassNameMap;
export type FlexGroupGutterSize = keyof typeof gutterSizeToClassNameMap;
export type FlexGroupJustifyContent = keyof typeof justifyContentToClassNameMap;

export interface SoftFlexGroupProps {
    alignItems?: FlexGroupAlignItems;
    component?: FlexGroupComponentType;
    direction?: FlexGroupDirection;
    gutterSize?: FlexGroupGutterSize;
    justifyContent?: FlexGroupJustifyContent;
    responsive?: boolean;
    wrap?: boolean;
}

const gutterSizeToClassNameMap = {
    none: null,
    xs: 'c-flex-group--gutterExtraSmall',
    s: 'c-flex-group--gutterSmall',
    m: 'c-flex-group--gutterMedium',
    l: 'c-flex-group--gutterLarge',
    xl: 'c-flex-group--gutterExtraLarge',
};

export const GUTTER_SIZES = keysOf(gutterSizeToClassNameMap);

const alignItemsToClassNameMap = {
    stretch: null,
    flexStart: 'c-flex-group--alignItemsFlexStart',
    flexEnd: 'c-flex-group--alignItemsFlexEnd',
    center: 'c-flex-group--alignItemsCenter',
    baseline: 'c-flex-group--alignItemsBaseline',
};

export const ALIGN_ITEMS = keysOf(alignItemsToClassNameMap);

const justifyContentToClassNameMap = {
    flexStart: null,
    flexEnd: 'c-flex-group--justifyContentFlexEnd',
    center: 'c-flex-group--justifyContentCenter',
    spaceBetween: 'c-flex-group--justifyContentSpaceBetween',
    spaceAround: 'c-flex-group--justifyContentSpaceAround',
    spaceEvenly: 'c-flex-group--justifyContentSpaceEvenly',
};

export const JUSTIFY_CONTENTS = keysOf(justifyContentToClassNameMap);

const directionToClassNameMap = {
    row: 'c-flex-group--directionRow',
    rowReverse: 'c-flex-group--directionRowReverse',
    column: 'c-flex-group--directionColumn',
    columnReverse: 'c-flex-group--directionColumnReverse',
};

export const DIRECTIONS = keysOf(directionToClassNameMap);

export class FlexGroup extends Component<{
    children: any, className?: any, gutterSize?: string, alignItems?: string, responsive?: boolean,
    justifyContent?: string, direction?: string, wrap?: boolean, component?: string,
    style?: object;
    [p: string]: any;
}> {
    static defaultProps = {gutterSize: 'l', alignItems: 'stretch', responsive: true, justifyContent: 'flexStart', direction: 'row', wrap: false, component: 'div'};

    render() {
        let {
            children,
            className,
            gutterSize,
            alignItems,
            responsive,
            justifyContent,
            direction,
            wrap,
            component: Component,
            ...rest
        } = this.props;
        const classes = classNames(
            'c-flex-group',
            gutterSize ? gutterSizeToClassNameMap[gutterSize] : undefined,
            alignItems ? alignItemsToClassNameMap[alignItems] : undefined,
            justifyContent ? justifyContentToClassNameMap[justifyContent] : undefined,
            direction ? directionToClassNameMap[direction] : undefined,
            {
                'c-flex-group--responsive': responsive,
                'c-flex-group--wrap': wrap,
            },
            className
        );

        return (
            // @ts-ignore
            <Component className={classes} {...rest}>
                {children}
            </Component>
        );
    }
}
