"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("./function");
exports.default = (arg) => {
    return (0, function_1.default)(arg[Symbol.iterator]);
};
