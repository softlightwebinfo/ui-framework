var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Component } from 'react';
var EuiWindowEvent = /** @class */ (function (_super) {
    __extends(EuiWindowEvent, _super);
    function EuiWindowEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EuiWindowEvent.prototype.componentDidMount = function () {
        this.addEvent(this.props);
    };
    EuiWindowEvent.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.event !== this.props.event ||
            prevProps.handler !== this.props.handler) {
            this.removeEvent(prevProps);
            this.addEvent(this.props);
        }
    };
    EuiWindowEvent.prototype.componentWillUnmount = function () {
        this.removeEvent(this.props);
    };
    EuiWindowEvent.prototype.addEvent = function (_a) {
        var event = _a.event, handler = _a.handler;
        window.addEventListener(event, handler);
    };
    EuiWindowEvent.prototype.removeEvent = function (_a) {
        var event = _a.event, handler = _a.handler;
        window.removeEventListener(event, handler);
    };
    EuiWindowEvent.prototype.render = function () {
        return null;
    };
    return EuiWindowEvent;
}(Component));
export { EuiWindowEvent };
