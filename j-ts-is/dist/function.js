"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const async_function_1 = require("./async-function");
exports.default = (arg) => {
    return ({}).toString.call(arg) === '[object Function]' || async_function_1.default(arg);
};
