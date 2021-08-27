"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sleep = void 0;
var sleep = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
};
exports.sleep = sleep;
