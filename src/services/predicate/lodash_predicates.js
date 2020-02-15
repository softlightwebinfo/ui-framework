import _isFunction from 'lodash/isFunction';
import _isArray from 'lodash/isArray';
import _isString from 'lodash/isString';
import _isBoolean from 'lodash/isBoolean';
import _isNumber from 'lodash/isNumber';
import _isNaN from 'lodash/isNaN';
// wrap the lodash functions to avoid having lodash's TS type definition from being
// exported, which can conflict with the lodash namespace if other versions are used
// tslint:disable-next-line:ban-types
export var isFunction = function (value) {
    return _isFunction(value);
};
export var isArray = function (value) { return _isArray(value); };
export var isString = function (value) { return _isString(value); };
export var isBoolean = function (value) { return _isBoolean(value); };
export var isNumber = function (value) { return _isNumber(value); };
export var isNaN = function (value) { return _isNaN(value); };
