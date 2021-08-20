"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeirdPause = void 0;
var events_1 = require("events");
var WeirdPause = /** @class */ (function (_super) {
    __extends(WeirdPause, _super);
    function WeirdPause() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WeirdPause.prototype.command = function (ms, cb) {
        var _this = this;
        if (cb === void 0) { cb = null; }
        if (!ms || ms % 2 === 0) {
            throw Error("I am weird, I only accept odd number");
        }
        setTimeout(function () {
            _this.emit("complete");
        }, ms);
        return this;
    };
    return WeirdPause;
}(events_1.default));
exports.WeirdPause = WeirdPause;
