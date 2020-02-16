import React, {Component, ReactNode} from 'react';
import classNames from 'classnames';
import {keysOf} from '../common';

export type FlexGridGutterSize = keyof typeof gutterSizeToClassNameMap;
export type FlexGridColumns = 0 | 1 | 2 | 3 | 4;

export interface SoftFlexGridProps {
    children?: ReactNode;
    columns?: FlexGridColumns;
    gutterSize?: FlexGridGutterSize;
    responsive?: boolean;
}

const gutterSizeToClassNameMap = {
    none: null,
    s: 'c-flex-grid--gutterSmall',
    m: 'c-flex-grid--gutterMedium',
    l: 'c-flex-grid--gutterLarge',
    xl: 'c-flex-grid--gutterXLarge',
};

// @ts-ignore
export const GUTTER_SIZES: FlexGridGutterSize[] = keysOf(
    gutterSizeToClassNameMap
);

const columnsToClassNameMap = {
    0: 'c-flex-grid--wrap',
    1: 'c-flex-grid--single',
    2: 'c-flex-grid--halves',
    3: 'c-flex-grid--thirds',
    4: 'c-flex-grid--fourths',
};

export const COLUMNS = Object.keys(columnsToClassNameMap).map(
    (columns: string) => parseInt(columns, 10)
) as FlexGridColumns[];

export class FlexGrid extends Component<{ children: any, className?: any, gutterSize?: string, responsive?: boolean, columns?: number }> {
    static defaultProps = {gutterSize: 'l', responsive: true, columns: 0};

    render() {
        let {
            children,
            className,
            gutterSize,
            responsive,
            columns,
            ...rest
        } = this.props;
        const classes = classNames(
            'c-flex-grid',
            gutterSize ? gutterSizeToClassNameMap[gutterSize] : undefined,
            columns != null ? columnsToClassNameMap[columns] : undefined,
            {
                'c-flex-grid--responsive': responsive,
            },
            className
        );

        return (
            <div className={classes} {...rest}>
                {children}
            </div>
        );
    }
}
