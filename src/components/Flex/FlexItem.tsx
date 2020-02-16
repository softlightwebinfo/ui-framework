import React, {PureComponent} from 'react';
import classNames from 'classnames';

export type FlexItemGrowSize =
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | true
    | false
    | null;
export type FlexItemComponentType = 'div' | 'span' | 'figure';

export interface FlexItemProps {
    grow?: FlexItemGrowSize;
    component?: FlexItemComponentType;
}

export const GROW_SIZES: FlexItemGrowSize[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export class FlexItem extends PureComponent<{ style?: object, children: any, className?: any, grow?: boolean, component?: string }> {
    static defaultProps = {grow: true, component: 'div'};

    render() {
        let {
            children,
            className,
            grow,
            component: Component,
            ...rest
        } = this.props;
        validateGrowValue(grow);

        const classes = classNames(
            'c-flex-item',
            {
                'c-flex-item--flexGrowZero': !grow,
                [`c-flex-item--flexGrow${grow}`]:
                    typeof grow === 'number' ? GROW_SIZES.indexOf(grow) >= 0 : undefined,
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

function validateGrowValue(value: FlexItemProps['grow']) {
    const validValues = [null, undefined, true, false, ...GROW_SIZES];

    if (validValues.indexOf(value) === -1) {
        throw new Error(
            `Prop \`grow\` passed to \`FlexItem\` must be a boolean or an integer between 1 and 10, received \`${value}\``
        );
    }
}
