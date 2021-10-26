"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./function");
exports.default = (arg) => {
    return function_1.default(arg[Symbol.iterator]);
};
