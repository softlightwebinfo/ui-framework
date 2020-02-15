import { EuiPopoverPosition } from './types';
export declare const POSITIONS: EuiPopoverPosition[];
interface BoundingBox {
    [position: string]: number;
    top: number;
    right: number;
    bottom: number;
    left: number;
}
export interface EuiClientRect extends BoundingBox {
    height: number;
    width: number;
}
interface FindPopoverPositionArgs {
    anchor: any;
    popover: any;
    align?: EuiPopoverPosition;
    position: EuiPopoverPosition;
    forcePosition?: boolean;
    buffer?: number;
    offset?: number;
    allowCrossAxis?: boolean;
    container?: any;
    arrowConfig?: {
        arrowWidth: number;
        arrowBuffer: number;
    };
}
/**
 * Calculates the absolute positioning (relative to document.body) to place a popover element
 *
 * @param anchor {any} Element to anchor the popover to
 * @param popover {any} Element containing the popover content
 * @param position {string} Position the user wants. One of ["top", "right", "bottom", "left"]
 * @param [forcePosition] {boolean} If true, use only the provided `position` value and don't try any other position
 * @param [align] {string} Cross-axis alignment. One of ["top", "right", "bottom", "left"]
 * @param [buffer=16] {number} Minimum distance between the popover and the bounding container
 * @param [offset=0] {number} Distance between the popover and the anchor
 * @param [allowCrossAxis=true] {boolean} Whether to allow the popover to be positioned on the cross-axis
 * @param [container] {any} Element the popover must be constrained to fit within
 * @param [arrowConfig] {{arrowWidth: number, arrowBuffer: number}} If
 *  present, describes the size & constraints for an arrow element, and the
 *  function return value will include an `arrow` param with position details
 *
 * @returns {{
 *   top: number,
 *   left: number,
 *   position: string,
 *   fit: number,
 *   arrow?: {left: number, top: number}
 * } | null} absolute page coordinates for the popover, and the
 *  placements's relation to the anchor; if there's no room this returns null
 */
export declare function findPopoverPosition({ anchor, popover, align, position, forcePosition, buffer, offset, allowCrossAxis, container, arrowConfig, }: FindPopoverPositionArgs): any;
interface GetPopoverScreenCoordinatesArgs {
    position: EuiPopoverPosition;
    align?: EuiPopoverPosition;
    anchorBoundingBox: EuiClientRect;
    popoverBoundingBox: EuiClientRect;
    windowBoundingBox: EuiClientRect;
    containerBoundingBox: EuiClientRect;
    arrowConfig?: {
        arrowWidth: number;
        arrowBuffer: number;
    };
    offset?: number;
    buffer?: number;
}
/**
 * Given a target position and the popover's surrounding context, returns either an
 * object with {top, left} screen coordinates or `null` if it's not possible to show
 * content in the target position
 * @param position {string} the target position, one of ["top", "right", "bottom", "left"]
 * @param align {string} target alignment on the cross-axis, one of ["top", "right", "bottom", "left"]
 * @param anchorBoundingBox {Object} bounding box of the anchor element
 * @param popoverBoundingBox {Object} bounding box of the popover element
 * @param windowBoundingBox {Object} bounding box of the window
 * @param containerBoundingBox {Object} bounding box of the container
 * @param [arrowConfig] {{arrowWidth: number, arrowBuffer: number}} If present, describes the size &
 *  constraints for an arrow element, and the function return value will include an `arrow` param
 *  with position details
 * @param [offset=0] {number} Distance between the popover and the anchor
 * @param [buffer=0] {number} Minimum distance between the popover's
 *  placement and the container edge
 *
 * @returns {{top: number, left: number, relativePlacement: string, fit:
 * number, arrow?: {top: number, left: number}}|null}
 *  object with top/left coordinates, the popover's relative position to the anchor, and how well the
 *  popover fits in the location (0.0 -> 1.0) oordinates and the popover's relative position, if
 *  there is no room in this placement then null
 */
export declare function getPopoverScreenCoordinates({ position, align, anchorBoundingBox, popoverBoundingBox, windowBoundingBox, containerBoundingBox, arrowConfig, offset, buffer, }: GetPopoverScreenCoordinatesArgs): {
    fit: number;
    top: number;
    left: number;
    arrow: {
        [x: string]: any;
    };
};
/**
 * Finds the client pixel coordinate of each edge for the element's bounding box,
 * and the bounding box's width & height
 *
 * @param {any} element
 * @returns {{top: number, right: number, bottom: number, left: number, height: number, width: number}}
 */
export declare function getElementBoundingBox(element: any): EuiClientRect;
/**
 * Calculates the available content space between anchor and container
 *
 * @param {Object} anchorBoundingBox Client bounding box of the anchor element
 * @param {Object} containerBoundingBox Client bounding box of the container element
 * @param {number} buffer Minimum distance between the popover and the bounding container
 * @param {number} offset Distance between the popover and the anchor
 * @param {string} offsetSide Side the offset needs to be applied to, one
 *  of ["top", "right", "bottom", "left"]
 * @returns {{top: number, right: number, bottom: number, left: number}}
 */
export declare function getAvailableSpace(anchorBoundingBox: BoundingBox, containerBoundingBox: BoundingBox, buffer: number, offset: number, offsetSide: EuiPopoverPosition): BoundingBox;
/**
 * Computes the fit (overlap) of the content within the container, fit is in range 0.0 => 1.0
 * @param contentBoundingBox bounding box of content to calculate fit for
 * @param containerBoundingBox bounding box of container
 * @returns {number}
 */
export declare function getVisibleFit(contentBoundingBox: BoundingBox, containerBoundingBox: BoundingBox): number;
/**
 * Calculates the intersection space between two bounding boxes
 *
 * @param firstBox
 * @param secondBox
 * @returns {EuiClientRect}
 */
export declare function intersectBoundingBoxes(firstBox: BoundingBox, secondBox: BoundingBox): EuiClientRect;
/**
 * Returns the top-most defined z-index in the element's ancestor hierarchy
 * relative to the `target` element; if no z-index is defined, returns "0"
 * @param element {any}
 * @param cousin {any}
 * @returns {string}
 */
export declare function getElementZIndex(element: any, cousin: any): string;
export {};
