import numeral from 'numeral';
import { isNil, isString } from '../predicate';
var numberFormatAliases = {
    decimal1: '0,0.0',
    decimal2: '0,0.00',
    decimal3: '0,0.000',
    ordinal: '0o',
    integer: '0,0',
};
export var formatNumber = function (value, numberFormatOrConfig) {
    if (numberFormatOrConfig === void 0) { numberFormatOrConfig = {}; }
    var format;
    var nil = '';
    var round;
    if (isString(numberFormatOrConfig)) {
        format = numberFormatOrConfig;
    }
    else {
        format = numberFormatOrConfig.format;
        nil = numberFormatOrConfig.nil || '';
        round = numberFormatOrConfig.round;
    }
    if (!format) {
        return isNil(value) ? nil : value.toString();
    }
    var roundingFunc = round ? Math.round : Math.floor;
    var numberFormat = numberFormatAliases[format] || format;
    return isNil(value) ? nil : numeral(value).format(numberFormat, roundingFunc);
};
