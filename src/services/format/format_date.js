var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { isNil, isFunction, isString } from '../predicate';
import moment from 'moment';
var calendar = function (value, options) {
    if (options === void 0) { options = {}; }
    var refTime = options.refTime;
    return moment(value).calendar(refTime, options);
};
export var dateFormatAliases = {
    date: 'D MMM YYYY',
    longDate: 'DD MMMM YYYY',
    shortDate: 'D MMM YY',
    dateTime: 'D MMM YYYY HH:mm',
    longDateTime: 'DD MMMM YYYY HH:mm:ss',
    shortDateTime: 'D MMM YY HH:mm',
    dobShort: 'Do MMM YY',
    dobLong: 'Do MMMM YYYY',
    iso8601: 'YYYY-MM-DDTHH:mm:ss.SSSZ',
    calendar: calendar,
    calendarDateTime: function (value, options) {
        return calendar(value, __assign({ sameDay: '[Today at] H:mmA', nextDay: '[Tomorrow at] H:mmA', nextWeek: 'dddd [at] H:mmA', lastDay: '[Yesterday at] H:mmA', lastWeek: '[Last] dddd [at] H:mmA', sameElse: 'Do MMM YYYY [at] H:mmA' }, options));
    },
    calendarDate: function (value, options) {
        return calendar(value, __assign({ sameDay: '[Today]', nextDay: '[Tomorrow]', nextWeek: 'dddd', lastDay: '[Yesterday]', lastWeek: '[Last] dddd', sameElse: 'Do MMM YYYY' }, options));
    },
};
function isStringADateFormat(x) {
    return dateFormatAliases.hasOwnProperty(x);
}
function instanceOfFormatDateConfig(x) {
    return (typeof x === 'object' &&
        (x.hasOwnProperty('format') ||
            x.hasOwnProperty('nil') ||
            x.hasOwnProperty('options')));
}
export var formatDate = function (value, dateFormatKeyOrConfig) {
    if (dateFormatKeyOrConfig === void 0) { dateFormatKeyOrConfig = 'dateTime'; }
    if (isString(dateFormatKeyOrConfig)) {
        if (isNil(value)) {
            return '';
        }
        var dateFormatStrOrFunc = isStringADateFormat(dateFormatKeyOrConfig)
            ? dateFormatAliases[dateFormatKeyOrConfig]
            : dateFormatKeyOrConfig;
        if (isFunction(dateFormatStrOrFunc)) {
            return dateFormatStrOrFunc(value, {});
        }
        if (isString(dateFormatStrOrFunc)) {
            return moment(value).format(dateFormatStrOrFunc);
        }
    }
    if (instanceOfFormatDateConfig(dateFormatKeyOrConfig)) {
        var _a = dateFormatKeyOrConfig.format, format = _a === void 0 ? 'dateTime' : _a, _b = dateFormatKeyOrConfig.nil, nil = _b === void 0 ? '' : _b, options = dateFormatKeyOrConfig.options;
        var dateFormat = dateFormatAliases[format] || format;
        if (isNil(value)) {
            return nil;
        }
        if (isFunction(dateFormat)) {
            return dateFormat(value, options);
        }
        if (isString(dateFormat)) {
            return moment(value).format(dateFormat);
        }
    }
};
