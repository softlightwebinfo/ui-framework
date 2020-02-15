import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Popover} from './Popover';
import {Portal} from '../Portal';

/**
 * Injects the SoftPopover next to the button via SoftPortal
 * then the button element is moved into the popover dom.
 * On unmount, the button is moved back to its original location.
 */
export class WrappingPopover extends Component<{
    button?: any;
}> {
    private portal: null;
    private anchor: null;
    static propTypes: {};

    constructor(...args) {
        // @ts-ignore
        super(...args);

        this.portal = null;
        this.anchor = null;
    }

    componentDidMount() {
        // @ts-ignore
        this.anchor.insertAdjacentElement(
            'beforebegin',
            this.props.button
        );
    }

    componentWillUnmount() {
        if (this.props.button.parentNode) {
            // @ts-ignore
            this.portal.insertAdjacentElement(
                'beforebegin',
                this.props.button
            );
        }
    }

    setPortalRef = node => {
        this.portal = node;
    };

    setAnchorRef = node => {
        this.anchor = node;
    }

    render() {
        const {
            button, // eslint-disable-line no-unused-vars
            ...rest
        } = this.props;
        return (
            <Portal
                portalRef={this.setPortalRef}
                insert={{sibling: this.props.button, position: 'after'}}
            >
                <Popover
                    {...rest}
                    button={<div ref={this.setAnchorRef} className="c-wrappingPopover__anchor"/>}
                />
            </Portal>
        );
    }
}

WrappingPopover.propTypes = {
    button: PropTypes.element,
};
