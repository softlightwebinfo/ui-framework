import { isNil } from '../predicate';
export var formatText = function (value, options) {
    if (options === void 0) { options = { nil: '' }; }
    return isNil(value) ? options.nil : value.toString();
};
