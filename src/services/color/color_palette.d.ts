/**
 * This function takes a color palette name and returns an array of hex color
 * codes for use in UI elements such as charts.
 *
 * @param {string} hexStart The beginning hexadecimal color code
 * @param {string} hexEnd The ending hexadecimal color code
 * @param {number} len The number of colors in the resulting array (default 10)
 * @returns {Array} Returns an array of hexadecimal color codes
 */
export declare function colorPalette(hexStart: string, hexEnd: string, len?: number): string[];
