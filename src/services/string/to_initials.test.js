import { toInitials } from './to_initials';
describe('toInitials', function () {
    var NAMES = [
        'Single',
        'Two words',
        'More Than Two Words',
        'lowercase words',
    ];
    var INITIALS_BY_DEFAULT = ['S', 'Tw', 'MT', 'lw'];
    var INITIALS_BY_2 = ['Si', 'Tw', 'MT', 'lw'];
    var INITIALS_BY_1 = ['S', 'T', 'M', 'l'];
    NAMES.forEach(function (name, index) {
        it("should return only the first letter of each word in '" + name + "'", function () {
            expect(toInitials(name)).toBe(INITIALS_BY_DEFAULT[index]);
        });
        it("should return two letters when initialsLength is 2 for '" + name + "'", function () {
            expect(toInitials(name, 2)).toBe(INITIALS_BY_2[index]);
        });
        it("should return one letter when initialsLength is 1 for '" + name + "'", function () {
            expect(toInitials(name, 1)).toBe(INITIALS_BY_1[index]);
        });
        it("should return the custom initials provided (truncated to 2) instead of '" + name + "'", function () {
            expect(toInitials(name, 2, 'INIT')).toBe('IN');
        });
    });
});
