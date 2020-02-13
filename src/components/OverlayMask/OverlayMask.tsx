/**
 * NOTE: We can't test this component because Enzyme doesn't support rendering
 * into portals.
 */

import {Component} from 'react';
import {createPortal} from 'react-dom';
import classNames from 'classnames';
import {keysOf} from '../../functions';

export class OverlayMask extends Component<{
  className?: any,
  children?: any,
  onClick?: any,
}> {
  private overlayMaskNode: any;

  constructor(props) {
    super(props);

    const {className, children, onClick, ...rest} = this.props;

    this.overlayMaskNode = document.createElement('div');
    this.overlayMaskNode.className = classNames('c-overlay-mask', className);
    if (onClick) {
      this.overlayMaskNode.addEventListener('click', onClick);
    }
    keysOf(rest).forEach(key => {
      if (typeof rest[key] !== 'string') {
        throw new Error(
          `Unhandled property type. SoftOverlayMask property ${key} is not a string.`
        );
      }
      this.overlayMaskNode.setAttribute(key, rest[key]);
    });

    document.body.appendChild(this.overlayMaskNode);
  }

  componentDidMount() {
    document.body.classList.add('h-body-hasOverlayMask');
  }

  componentWillUnmount() {
    document.body.classList.remove('h-Body-hasOverlayMask');

    if (this.props.onClick) {
      this.overlayMaskNode.removeEventListener('click', this.props.onClick);
    }
    document.body.removeChild(this.overlayMaskNode);
    this.overlayMaskNode = undefined;
  }

  render(): any {
    return createPortal(this.props.children, this.overlayMaskNode);
  }
}
