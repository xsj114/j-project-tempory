"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isUndefined(arg) {
    if (!arguments.length) {
        new TypeError('is.isUndefined should have at least one argument');
    }
    return ({}).toString.call(arg) === '[object Undefined]';
}
exports.default = isUndefined;
