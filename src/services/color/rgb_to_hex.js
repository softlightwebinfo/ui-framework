export function asHex(value) {
    var hex = parseInt(value, 10).toString(16);
    return hex.length === 1 ? "0" + hex : hex;
}
export function rgbToHex(rgb) {
    var withoutWhitespace = rgb.replace(/\s+/g, '');
    var rgbMatch = withoutWhitespace.match(/^rgba?\((\d+),(\d+),(\d+)(?:,(?:1(?:\.0*)?|0(?:\.\d+)?))?\)$/i);
    if (!rgbMatch) {
        return '';
    }
    var r = rgbMatch[1], g = rgbMatch[2], b = rgbMatch[3];
    return "#" + asHex(r) + asHex(g) + asHex(b);
}
