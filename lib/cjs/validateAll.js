"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateAll = void 0;
var validateAll = function (Schema, input, showData) {
    var schema = new Schema();
    var errors = {};
    var keys = __spreadArray(__spreadArray([], Object.keys(schema), true), Object.keys(input), true);
    for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
        var key = keys_1[_i];
        if (!schema[key]) {
            errors[key] = ["The field ".concat(key, " is not needed")];
            continue;
        }
        if (!!input[key]) {
            var result = schema[key].validate(input, key);
            if (!!result.length) {
                errors[key] = result;
            }
        }
        else if (schema[key]._options.default) {
            input[key] = schema[key]._options.default;
        }
    }
    if (!showData) {
        return !!Object.keys(errors).length ? errors : undefined;
    }
    else {
        return {
            errors: !!Object.keys(errors).length ? errors : undefined,
            data: input,
        };
    }
};
exports.validateAll = validateAll;
