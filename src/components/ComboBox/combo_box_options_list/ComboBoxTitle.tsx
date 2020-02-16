import React, {Component} from 'react';

export class ComboBoxTitle extends Component<{ children: any }> {
  render() {
    let {children} = this.props;
    return (
      <div className="c-combo-box-title">{children}</div>
    );
  }
}
