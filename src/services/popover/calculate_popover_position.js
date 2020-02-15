var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var getVisibleArea = function (bounds, windowWidth, windowHeight) {
    var left = bounds.left, top = bounds.top, width = bounds.width, height = bounds.height;
    // This is a common algorithm for finding the intersected area among two rectangles.
    var dx = Math.min(left + width, windowWidth) - Math.max(left, 0);
    var dy = Math.min(top + height, windowHeight) - Math.max(top, 0);
    return dx * dy;
};
var positionAtTop = function (anchorBounds, width, height, buffer) {
    var widthDifference = width - anchorBounds.width;
    var left = anchorBounds.left - widthDifference * 0.5;
    var top = anchorBounds.top - height - buffer;
    return { left: left, top: top, width: width, height: height };
};
var positionAtRight = function (anchorBounds, width, height, buffer) {
    var left = anchorBounds.right + buffer;
    var heightDifference = height - anchorBounds.height;
    var top = anchorBounds.top - heightDifference * 0.5;
    return { left: left, top: top, width: width, height: height };
};
var positionAtBottom = function (anchorBounds, width, height, buffer) {
    var widthDifference = width - anchorBounds.width;
    var left = anchorBounds.left - widthDifference * 0.5;
    var top = anchorBounds.bottom + buffer;
    return { left: left, top: top, width: width, height: height };
};
var positionAtLeft = function (anchorBounds, width, height, buffer) {
    var left = anchorBounds.left - width - buffer;
    var heightDifference = height - anchorBounds.height;
    var top = anchorBounds.top - heightDifference * 0.5;
    return { left: left, top: top, width: width, height: height };
};
var positionToPositionerMap = {
    top: positionAtTop,
    right: positionAtRight,
    bottom: positionAtBottom,
    left: positionAtLeft,
};
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
export function calculatePopoverPosition(anchorBounds, popoverBounds, requestedPosition, buffer, positions) {
    if (buffer === void 0) { buffer = 16; }
    if (positions === void 0) { positions = ['top', 'right', 'bottom', 'left']; }
    if (typeof buffer !== 'number') {
        throw new Error("calculatePopoverPosition received a buffer argument of " + buffer + "' but expected a number");
    }
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var popoverWidth = popoverBounds.width, popoverHeight = popoverBounds.height;
    var positionToBoundsMap = {};
    var positionToVisibleAreaMap = {};
    positions.forEach(function (position) {
        var bounds = positionToPositionerMap[position](anchorBounds, popoverWidth, popoverHeight, buffer);
        positionToBoundsMap[position] = bounds;
        // Calculate how much area of the popover is visible at each position.
        positionToVisibleAreaMap[position] = getVisibleArea(bounds, windowWidth, windowHeight);
    });
    // If the requested position clips the popover, find the position which clips the popover the least.
    // Default to use the requested position.
    var calculatedPopoverPosition = positions.reduce(function (mostVisiblePosition, position) {
        if (positionToVisibleAreaMap[position] >
            positionToVisibleAreaMap[mostVisiblePosition]) {
            return position;
        }
        return mostVisiblePosition;
    }, requestedPosition);
    return __assign({ position: calculatedPopoverPosition }, positionToBoundsMap[calculatedPopoverPosition]);
}
