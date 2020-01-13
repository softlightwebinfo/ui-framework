import {Component, cloneElement} from 'react';
import {keyCodes} from "../../interfaces/enum/keyCodes";

export class KeyboardAccessible extends Component<{
    children?: any;

}> {
    onKeyDown = (e) => {
        // Prevent a scroll from occurring if the user has hit space.
        if (e.keyCode === keyCodes.SPACE) {
            e.preventDefault();
        }

        if (this.props.children.props.onKeyDown) {
            this.props.children.props.onKeyDown(e);
        }
    };

    onKeyUp = (e) => {
        // Support keyboard accessibility by emulating mouse click on ENTER or SPACE keypress.
        if (e.keyCode === keyCodes.ENTER || e.keyCode === keyCodes.SPACE) {
            // Delegate to the click handler on the element.
            this.props.children.props.onClick(e);
        }

        if (this.props.children.props.onKeyUp) {
            this.props.children.props.onKeyUp(e);
        }
    };

    applyKeyboardAccessibility = (child): any => {
        // Add attributes required for accessibility unless they are already specified.
        const props = {
            tabIndex: '0',
            role: 'button',
            ...child.props,
            onKeyDown: this.onKeyDown,
            onKeyUp: this.onKeyUp,
        };

        return cloneElement(child, props);
    };

    render() {
        return this.applyKeyboardAccessibility(this.props.children);
    }
}

