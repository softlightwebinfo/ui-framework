import { hexToRgb } from './hex_to_rgb';
/**
 * Create the color object for manipulation by other functions
 */
var Color = /** @class */ (function () {
    function Color(r, g, b) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.collection = [r, g, b];
        this.text = createHex(this.collection);
    }
    return Color;
}());
/**
 * This function takes a color palette name and returns an array of hex color
 * codes for use in UI elements such as charts.
 *
 * @param {string} hexStart The beginning hexadecimal color code
 * @param {string} hexEnd The ending hexadecimal color code
 * @param {number} len The number of colors in the resulting array (default 10)
 * @returns {Array} Returns an array of hexadecimal color codes
 */
export function colorPalette(hexStart, hexEnd, len) {
    if (len === void 0) { len = 10; }
    if (isHex(hexStart) && isHex(hexEnd)) {
        var colorArray = [];
        var hexPalette = [];
        var count = len - 1;
        var startHex = hexToRgb(hexStart); // get RGB equivalent values as array
        var endHex = hexToRgb(hexEnd); // get RGB equivalent values as array
        colorArray[0] = new Color(startHex[0], startHex[1], startHex[2]); // create first color obj
        colorArray[count] = new Color(endHex[0], endHex[1], endHex[2]); // create last color obj
        var step = stepCalc(count, colorArray[0], colorArray[count]); // create array of step increments
        // build the color palette array
        hexPalette[0] = colorArray[0].text; // set the first color in the array
        for (var i = 1; i < count; i++) {
            // set the intermediate colors in the array
            var r = colorArray[0].r + step[0] * i;
            var g = colorArray[0].g + step[1] * i;
            var b = colorArray[0].b + step[2] * i;
            colorArray[i] = new Color(r, g, b);
            hexPalette[i] = colorArray[i].text;
        } // all the colors in between
        hexPalette[count] = colorArray[count].text; // set the last color in the array
        return hexPalette;
    }
    else {
        throw new Error('Please provide two valid hex color codes.');
    }
}
/**
 * Check if argument is a valid 3 or 6 character hexadecimal color code
 */
function isHex(value) {
    return /^#?([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(value);
}
/**
 * Calculate and construct the hexadecimal color code from RGB values
 */
function createHex(rgbValues) {
    var result = '';
    var val = 0;
    var piece;
    var base = 16;
    for (var k = 0; k < 3; k++) {
        val = Math.round(rgbValues[k]);
        piece = val.toString(base); // Converts to radix 16 based value (0-9, A-F)
        if (piece.length < 2) {
            piece = "0" + piece;
        }
        result = result + piece;
    }
    result = "#" + result.toUpperCase(); // Return in #RRGGBB format
    return result;
}
/**
 * Calculate the step increment for each piece of the hexadecimal color code
 */
function stepCalc(st, cStart, cEnd) {
    var steps = st;
    var step = [
        (cEnd.r - cStart.r) / steps,
        (cEnd.g - cStart.g) / steps,
        (cEnd.b - cStart.b) / steps,
    ];
    return step;
}
