import { EuiPopoverPosition } from './types';
interface EuiPopoverBoundingBox {
    top: number;
    left: number;
    width: number;
    height: number;
}
interface EuiPopoverAnchorRect extends EuiPopoverBoundingBox {
    right: number;
    bottom: number;
}
interface EuiPopoverDimensions {
    width: number;
    height: number;
}
interface EuiPopoverPositionedBox extends EuiPopoverBoundingBox {
    position: EuiPopoverPosition;
}
/**
 * Determine the best position for a popover that avoids clipping by the window view port.
 *
 * @param {Object} anchorBounds - getBoundingClientRect() of the node the popover is tethered to (e.g. a button).
 * @param {Object} popoverBounds - getBoundingClientRect() of the popover node (e.g. the tooltip).
 * @param {string} requestedPosition - Position the user wants. One of ["top", "right", "bottom", "left"]
 * @param {number} buffer - The space between the wrapper and the popover. Also the minimum space between the
 * popover and the window.
 * @param {Array} positions - List of acceptable positions. Defaults to ["top", "right", "bottom", "left"].
 *
 * @returns {Object} With properties position (one of ["top", "right", "bottom", "left"]), left, top, width, and height.
 */
export declare function calculatePopoverPosition(anchorBounds: EuiPopoverAnchorRect, popoverBounds: EuiPopoverDimensions, requestedPosition: EuiPopoverPosition, buffer?: number, positions?: EuiPopoverPosition[]): EuiPopoverPositionedBox;
export {};
