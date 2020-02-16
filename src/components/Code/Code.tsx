import React, {PureComponent} from 'react';

import {
  SoftCodeBlockImpl,
} from './SoftCodeBlockImpl';

export class SoftCode extends PureComponent {
  static propTypes: any;

  render() {
    let {
      inline, // eslint-disable-line
      ...rest
    }: any = this.props;
    return (
      <SoftCodeBlockImpl
        inline={true}
        {...rest}
      />
    );
  }
}

SoftCode.propTypes = {
  ...SoftCodeBlockImpl.propTypes
};
