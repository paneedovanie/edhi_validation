var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var Rules = /** @class */ (function () {
    function Rules(_options) {
        this._options = _options;
        this._validators = [];
    }
    Rules.prototype.isRequired = function (message) {
        return this.newRule(function (values, key) { return values[key] && values[key] !== ''; }, message || (function (name) { return "The field ".concat(name, " is required"); }));
    };
    Rules.prototype.isString = function (message) {
        return this.newRule(function (values, key) { return typeof values[key] === 'string'; }, message || (function (name) { return "The field ".concat(name, " must be a string"); }));
    };
    Rules.prototype.isNumber = function (message) {
        return this.newRule(function (values, key) { return typeof values[key] === 'number'; }, message || (function (name) { return "The field ".concat(name, " must be a number"); }));
    };
    Rules.prototype.isBoolean = function (message) {
        return this.newRule(function (value) { return typeof value === 'boolean'; }, message || (function (name) { return "The field ".concat(name, " must be a boolean"); }));
    };
    Rules.prototype.isObject = function (message) {
        return this.newRule(function (values, key) { return typeof values[key] === 'object'; }, message || (function (name) { return "The field ".concat(name, " must be an object"); }));
    };
    Rules.prototype.isArray = function (message) {
        return this.newRule(function (values, key) { return Array.isArray(values[key]); }, message || (function (name) { return "The field ".concat(name, " must be an array"); }));
    };
    Rules.prototype.min = function (minValue, message) {
        return this.newRule(function (values, key) {
            return (typeof values[key] === 'string' && values[key].length >= minValue) ||
                (typeof values[key] === 'number' && values[key] >= minValue);
        }, message || (function (name) { return "The field ".concat(name, " minimum is ").concat(minValue); }));
    };
    Rules.prototype.max = function (maxValue, message) {
        return this.newRule(function (values, key) {
            return (typeof values[key] === 'string' && values[key].length <= maxValue) ||
                (typeof values[key] === 'number' && values[key] <= maxValue);
        }, message || (function (name) { return "The field ".concat(name, " maximum is ").concat(maxValue); }));
    };
    Rules.prototype.isEmail = function (message) {
        return this.newRule(function (values, key) { return /^\S.*@\S+$/.test(values[key]); }, message || (function (name) { return "The field ".concat(name, " is not an email"); }));
    };
    Rules.prototype.newRule = function (condition, message) {
        var _this = this;
        var _a;
        if (!!((_a = this._options) === null || _a === void 0 ? void 0 : _a.async)) {
            var Validator_1 = function (values, key, name) { return __awaiter(_this, void 0, void 0, function () {
                var error, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            error = undefined;
                            _a = !condition;
                            if (_a) return [3 /*break*/, 2];
                            return [4 /*yield*/, condition(values, key)];
                        case 1:
                            _a = (_b.sent());
                            _b.label = 2;
                        case 2:
                            if (_a) {
                                return [2 /*return*/, { values: values }];
                            }
                            if (!!message) {
                                error = typeof message === 'string' ? message : message(name || key);
                            }
                            return [2 /*return*/, { error: error, values: values }];
                    }
                });
            }); };
            this._validators.push(Validator_1);
            return this;
        }
        var Validator = function (values, key, name) {
            var error = undefined;
            if (!condition || condition(values, key)) {
                return { values: values };
            }
            if (!!message) {
                error = typeof message === 'string' ? message : message(name || key);
            }
            return { error: error, values: values };
        };
        this._validators.push(Validator);
        return this;
    };
    Rules.prototype.validate = function (values, key) {
        var _a;
        var messages = [];
        for (var _i = 0, _b = this._validators; _i < _b.length; _i++) {
            var validator = _b[_i];
            var result = validator(values, key, ((_a = this._options) === null || _a === void 0 ? void 0 : _a.name) || key);
            if (!!result.error) {
                messages.push(result.error);
            }
        }
        return messages;
    };
    Rules.prototype.validateAsync = function (values, key) {
        var _a;
        return __awaiter(this, void 0, void 0, function () {
            var messages, _i, _b, validator, result;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        messages = [];
                        _i = 0, _b = this._validators;
                        _c.label = 1;
                    case 1:
                        if (!(_i < _b.length)) return [3 /*break*/, 4];
                        validator = _b[_i];
                        return [4 /*yield*/, validator(values, key, ((_a = this._options) === null || _a === void 0 ? void 0 : _a.name) || key)];
                    case 2:
                        result = _c.sent();
                        if (!!result.error) {
                            messages.push(result.error);
                        }
                        _c.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/, messages];
                }
            });
        });
    };
    return Rules;
}());
export default Rules;
