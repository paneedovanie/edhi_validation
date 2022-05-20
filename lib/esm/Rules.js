import * as Core from './core';
import * as Rule from './is';
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
export default Rules;
