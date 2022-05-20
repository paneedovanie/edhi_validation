"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Core = __importStar(require("./core"));
var Rule = __importStar(require("./is"));
var Rules = /** @class */ (function () {
    function Rules(_options) {
        this._options = _options;
        this._validators = [];
        this.newRule = Core.newRule;
        this.validate = Core.validate;
        this.validateAsync = Core.validateAsync;
        this.isRequired = Rule.isRequired;
        this.isString = Rule.isString;
        this.isNumber = Rule.isNumber;
        this.isArray = Rule.isArray;
        this.isBoolean = Rule.isBoolean;
        this.isEmail = Rule.isEmail;
        this.isMax = Rule.isMax;
        this.isMin = Rule.isMin;
        this.isObject = Rule.isObject;
    }
    return Rules;
}());
exports.default = Rules;
