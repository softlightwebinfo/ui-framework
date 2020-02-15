import React, {Component, HTMLAttributes, ReactNode} from 'react';
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
  s: 'softFlexGrid--gutterSmall',
  m: 'softFlexGrid--gutterMedium',
  l: 'softFlexGrid--gutterLarge',
  xl: 'softFlexGrid--gutterXLarge',
};

// @ts-ignore
export const GUTTER_SIZES: FlexGridGutterSize[] = keysOf(
  gutterSizeToClassNameMap
);

const columnsToClassNameMap = {
  0: 'softFlexGrid--wrap',
  1: 'softFlexGrid--single',
  2: 'softFlexGrid--halves',
  3: 'softFlexGrid--thirds',
  4: 'softFlexGrid--fourths',
};

export const COLUMNS = Object.keys(columnsToClassNameMap).map(
  (columns: string) => parseInt(columns, 10)
) as FlexGridColumns[];

export class SoftFlexGrid extends Component<{ children: any, className?: any, gutterSize?: string, responsive?: boolean, columns?: number }> {
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
      'softFlexGrid',
      gutterSize ? gutterSizeToClassNameMap[gutterSize] : undefined,
      columns != null ? columnsToClassNameMap[columns] : undefined,
      {
        'softFlexGrid--responsive': responsive,
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
