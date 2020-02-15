import moment from 'moment';
export var always = function (value) { return true; };
export var never = function (value) { return false; };
export var isUndefined = function (value) {
    return value === undefined;
};
export var isNull = function (value) {
    return value === null;
};
export var isNil = function (value) {
    return isUndefined(value) || isNull(value);
};
export var isMoment = function (value) {
    return moment.isMoment(value);
};
export var isDate = function (value) {
    return moment.isDate(value);
};
export var isDateLike = function (value) {
    return isMoment(value) || isDate(value);
};
