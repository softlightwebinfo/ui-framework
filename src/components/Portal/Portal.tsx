/**
 * NOTE: We can't test this component because Enzyme doesn't support rendering
 * into portals.
 */

import React from 'react';
import {createPortal} from 'react-dom';
import {keysOf} from "../../functions";

export const insertPositions = {
  after: 'afterend',
  before: 'beforebegin',
};

export const INSERT_POSITIONS = keysOf(
  insertPositions
);

export class Portal extends React.Component<{
  insert?: any,
  portalRef?: any
}> {
  portalNode: HTMLDivElement;

  constructor(props) {
    super(props);

    const {insert} = this.props;

    this.portalNode = document.createElement('div');

    if (insert == null) {
      // no insertion defined, append to body
      document.body.appendChild(this.portalNode);
    } else {
      // inserting before or after an element
      const {sibling, position} = insert;
      sibling.insertAdjacentElement(insertPositions[position], this.portalNode);
    }
  }

  componentDidMount() {
    this.updatePortalRef(this.portalNode);
  }

  componentWillUnmount() {
    if (this.portalNode.parentNode) {
      this.portalNode.parentNode.removeChild(this.portalNode);
    }
    this.updatePortalRef(null);
  }

  updatePortalRef(ref) {
    if (this.props.portalRef) {
      this.props.portalRef(ref);
    }
  }

  render(): any {
    return createPortal(this.props.children, this.portalNode);
  }
}
