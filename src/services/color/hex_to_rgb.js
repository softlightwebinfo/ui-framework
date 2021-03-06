// Convert hexadecimal color into an array of RGB integer values
// Modified from https://stackoverflow.com/questions/5623838/rgb-to-hex-and-hex-to-rgb
export function hexToRgb(hex) {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r1, g1, b1) { return r1 + r1 + g1 + g1 + b1 + b1; });
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
        var r = result[1], g = result[2], b = result[3];
        return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
    }
    // fallback to prevent errors
    return [0, 0, 0];
}
