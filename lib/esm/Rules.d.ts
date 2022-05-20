import { ValidatorType } from './types';
import * as Core from './core';
import * as Rule from './is';
declare class Rules {
    _options?: {
        name?: string | undefined;
        default?: any;
    } | undefined;
    _validators: ValidatorType[];
    constructor(_options?: {
        name?: string | undefined;
        default?: any;
    } | undefined);
    newRule: typeof Core.newRule;
    validate: typeof Core.validate;
    validateAsync: typeof Core.validateAsync;
    isRequired: typeof Rule.isRequired;
    isString: typeof Rule.isString;
    isNumber: typeof Rule.isNumber;
    isArray: typeof Rule.isArray;
    isBoolean: typeof Rule.isBoolean;
    isEmail: typeof Rule.isEmail;
    isMax: typeof Rule.isMax;
    isMin: typeof Rule.isMin;
    isObject: typeof Rule.isObject;
}
export default Rules;
