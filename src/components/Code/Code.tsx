import React, {PureComponent} from 'react';

import {
    CodeBlockImpl,
} from './CodeBlockImpl';

export class Code extends PureComponent {
    static propTypes: any;

    render() {
        let {
            inline, // eslint-disable-line
            ...rest
        }: any = this.props;
        return (
            <CodeBlockImpl
                inline={true}
                {...rest}
            />
        );
    }
}
