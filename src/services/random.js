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
import moment from 'moment';
import { isNil } from './predicate';
import { times } from './utils';
var defaultRand = Math.random;
var Random = /** @class */ (function () {
    function Random(rand) {
        var _this = this;
        if (rand === void 0) { rand = defaultRand; }
        this.boolean = function () {
            return _this.rand() > 0.5;
        };
        this.number = function (options) {
            if (options === void 0) { options = {}; }
            var min = isNil(options.min) ? Number.MIN_VALUE : options.min;
            var max = isNil(options.max) ? Number.MAX_VALUE : options.max;
            var delta = _this.rand() * (max - min);
            return min + delta;
        };
        this.integer = function (options) {
            if (options === void 0) { options = {}; }
            var min = Math.ceil(isNil(options.min) ? Number.MIN_VALUE : options.min);
            var max = Math.floor(isNil(options.max) ? Number.MAX_VALUE : options.max);
            var delta = Math.floor(_this.rand() * (max - min + 1));
            return min + delta;
        };
        this.oneOf = function (values) {
            return values[Math.floor(_this.rand() * values.length)];
        };
        this.oneToOne = function (values, index) {
            return values[index];
        };
        this.setOf = function (values, options) {
            if (options === void 0) { options = {}; }
            var count = _this.integer(__assign({ min: 0, max: values.length }, options));
            var copy = values.slice();
            return times(count, function () {
                var value = _this.oneOf(copy);
                copy.splice(copy.indexOf(value), 1);
                return value;
            });
        };
        this.date = function (options) {
            if (options === void 0) { options = {}; }
            var min = isNil(options.min) ? new Date(0) : options.min;
            var max = isNil(options.max) ? new Date(Date.now()) : options.max;
            var minMls = min.getTime();
            var maxMls = max.getTime();
            var time = _this.integer({ min: minMls, max: maxMls });
            return new Date(time);
        };
        this.moment = function (options) {
            if (options === void 0) { options = {}; }
            var min = isNil(options.min) ? moment(0) : options.min;
            var max = isNil(options.max) ? moment() : options.max;
            var minMls = +min;
            var maxMls = +max;
            var time = _this.integer({ min: minMls, max: maxMls });
            return moment(time);
        };
        this.rand = rand;
    }
    return Random;
}());
export { Random };
