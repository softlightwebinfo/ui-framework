var Timer = /** @class */ (function () {
    function Timer(callback, timeMs) {
        var _this = this;
        this.pause = function () {
            clearTimeout(_this.id);
            _this.id = undefined;
            _this.timeRemaining = (_this.finishTime || 0) - Date.now();
        };
        this.resume = function () {
            _this.id = setTimeout(_this.finish, _this.timeRemaining);
            _this.finishTime = Date.now() + (_this.timeRemaining || 0);
            _this.timeRemaining = undefined;
        };
        this.clear = function () {
            clearTimeout(_this.id);
            _this.id = undefined;
            _this.callback = undefined;
            _this.finishTime = undefined;
            _this.timeRemaining = undefined;
        };
        this.finish = function () {
            if (_this.callback) {
                _this.callback();
            }
            _this.clear();
        };
        this.id = setTimeout(this.finish, timeMs);
        this.callback = callback;
        this.finishTime = Date.now() + timeMs;
        this.timeRemaining = undefined;
    }
    return Timer;
}());
export { Timer };
