"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const arguments_1 = require("./arguments");
const array_1 = require("./array");
const async_function_1 = require("./async-function");
const boolean_1 = require("./boolean");
const error_1 = require("./error");
const formdata_1 = require("./formdata");
const function_1 = require("./function");
const iterable_1 = require("./iterable");
const map_1 = require("./map");
const null_1 = require("./null");
const number_1 = require("./number");
const object_1 = require("./object");
const promise_1 = require("./promise");
const regexp_1 = require("./regexp");
const set_1 = require("./set");
const string_1 = require("./string");
const symbol_1 = require("./symbol");
const undefined_1 = require("./undefined");
const weak_map_1 = require("./weak-map");
const weak_set_1 = require("./weak-set");
const window_1 = require("./window");
const is = {
    arguments: arguments_1.default,
    array: array_1.default,
    asyncFunction: async_function_1.default,
    boolean: boolean_1.default,
    error: error_1.default,
    formdata: formdata_1.default,
    function: function_1.default,
    iterable: iterable_1.default,
    map: map_1.default,
    null: null_1.default,
    number: number_1.default,
    object: object_1.default,
    promise: promise_1.default,
    regexp: regexp_1.default,
    set: set_1.default,
    string: string_1.default,
    symbol: symbol_1.default,
    undefined: undefined_1.default,
    weakmap: weak_map_1.default,
    weakset: weak_set_1.default,
    window: window_1.default
};
exports.default = is;
module.exports = is;
module.exports.default = is;
