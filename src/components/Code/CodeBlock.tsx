import React, {PureComponent} from 'react';

import {
  SoftCodeBlockImpl,
} from './SoftCodeBlockImpl';

export class SoftCodeBlock extends PureComponent {
  static propTypes: any;

  render() {
    let {
      inline, // eslint-disable-line
      ...rest
    }: any = this.props;
    return (
      <SoftCodeBlockImpl
        inline={false}
        {...rest}
      />
    );
  }
}

SoftCodeBlock.propTypes = {
  ...SoftCodeBlockImpl.propTypes
};
