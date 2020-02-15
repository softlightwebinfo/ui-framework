import React, {Component, HTMLAttributes} from 'react';
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
    xs: 'softFlexGroup--gutterExtraSmall',
    s: 'softFlexGroup--gutterSmall',
    m: 'softFlexGroup--gutterMedium',
    l: 'softFlexGroup--gutterLarge',
    xl: 'softFlexGroup--gutterExtraLarge',
};

export const GUTTER_SIZES = keysOf(gutterSizeToClassNameMap);

const alignItemsToClassNameMap = {
    stretch: null,
    flexStart: 'softFlexGroup--alignItemsFlexStart',
    flexEnd: 'softFlexGroup--alignItemsFlexEnd',
    center: 'softFlexGroup--alignItemsCenter',
    baseline: 'softFlexGroup--alignItemsBaseline',
};

export const ALIGN_ITEMS = keysOf(alignItemsToClassNameMap);

const justifyContentToClassNameMap = {
    flexStart: null,
    flexEnd: 'softFlexGroup--justifyContentFlexEnd',
    center: 'softFlexGroup--justifyContentCenter',
    spaceBetween: 'softFlexGroup--justifyContentSpaceBetween',
    spaceAround: 'softFlexGroup--justifyContentSpaceAround',
    spaceEvenly: 'softFlexGroup--justifyContentSpaceEvenly',
};

export const JUSTIFY_CONTENTS = keysOf(justifyContentToClassNameMap);

const directionToClassNameMap = {
    row: 'softFlexGroup--directionRow',
    rowReverse: 'softFlexGroup--directionRowReverse',
    column: 'softFlexGroup--directionColumn',
    columnReverse: 'softFlexGroup--directionColumnReverse',
};

export const DIRECTIONS = keysOf(directionToClassNameMap);

export class SoftFlexGroup extends Component<{
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
            'softFlexGroup',
            gutterSize ? gutterSizeToClassNameMap[gutterSize] : undefined,
            alignItems ? alignItemsToClassNameMap[alignItems] : undefined,
            justifyContent ? justifyContentToClassNameMap[justifyContent] : undefined,
            direction ? directionToClassNameMap[direction] : undefined,
            {
                'softFlexGroup--responsive': responsive,
                'softFlexGroup--wrap': wrap,
            },
            className
        );

        return (
            <Component className={classes} {...rest}>
                {children}
            </Component>
        );
    }
}
