// TODO: Migrate to a service
import {RgbDefType} from "../../interfaces/types/RgbDefType";

export function checkValidColor(color) {
    const validHex = color && /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(color);
    if (color && !validHex) {
        throw new Error(
            `SoftAvatar needs to pass a valid color. This can either be a three ` +
            `or six character hex value`
        );
    }
}

export function checkValidInitials(initials) {
    // Must be a string of 1 or 2 characters
    if (initials && initials.length > 2) {
        // tslint:disable-next-line:no-console
        console.warn(
            `SoftAvatar only accepts a max of 2 characters for the initials as a string. It is displaying only the first 2 characters.`
        );
    }
}

export function isColorDark(red: number, green: number, blue: number): boolean {
    const [r, g, b] = [red, green, blue]
        .map(c => c / 255.0)
        .map(c => (c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4));
    const luminance = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    return luminance <= 0.179;
}

export function hexToRgb(hex: string): RgbDefType {
    // Expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
    const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(
        shorthandRegex,
        (_, r1, g1, b1) => r1 + r1 + g1 + g1 + b1 + b1
    );

    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)!;

    if (result) {
        const [, r, g, b] = result;
        return [parseInt(r, 16), parseInt(g, 16), parseInt(b, 16)];
    }

    // fallback to prevent errors
    return [0, 0, 0];
}
