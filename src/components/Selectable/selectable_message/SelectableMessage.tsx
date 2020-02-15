import React, {Component} from 'react';
import classNames from 'classnames';
import {Text} from '../../Text';

export class SelectableMessage extends Component<{ children?: any, className?: any }> {
    render() {
        let {children, className, ...rest} = this.props;
        const classes = classNames('c-selectableMessage', className);

        return (
            <Text color="subdued" size="xs" className={classes} {...rest}>
                {children}
            </Text>
        );
    }
}
