import _times from 'lodash/times';
import _memoize from 'lodash/memoize';
export function times(count, iteratee) {
    if (iteratee === undefined) {
        return _times(count);
    }
    return _times(count, iteratee);
}
export function memoize(func, resolver) {
    return _memoize(func, resolver);
}
export var browserTick = function (callback) {
    requestAnimationFrame(callback);
};
