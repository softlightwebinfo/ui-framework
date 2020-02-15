/**
 * This function calculates the initials/acronym for a given name.
 * It defaults to only 2 characters and will take the first character (of each word).
 * If only one word is supplied for the name, it will only pass back the first letter of the word,
 * unless forced to 2 letters by setting `initialsLength` to `2`.
 * It will pass back the characters with the same casing as the original string
 * unless otherwise specified.
 *
 * @param {string} name The full name of the item to turn into initials
 * @param {number} initialsLength (Optional) How many characters to show (max 2 allowed)
 * @param {string} initials (Optional) Custom initials (max 2 characters)
 * @returns {string} True if the color is dark, false otherwise.
 */
export declare const MAX_INITIALS: number;
export declare function toInitials(name: string, initialsLength?: 1 | 2, initials?: string): string | null;
