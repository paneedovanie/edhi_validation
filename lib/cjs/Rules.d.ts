import { ValidatorType, InputType } from './types';
export default class Rules {
    _options?: {
        async?: boolean | undefined;
        name?: string | undefined;
        default?: any;
    } | undefined;
    _validators: ValidatorType[];
    constructor(_options?: {
        async?: boolean | undefined;
        name?: string | undefined;
        default?: any;
    } | undefined);
    isRequired(message?: string | ((name: string) => string)): this;
    isString(message?: string | ((name: string) => string)): this;
    isNumber(message?: string | ((name: string) => string)): this;
    isBoolean(message?: string | ((name: string) => string)): this;
    isObject(message?: string | ((name: string) => string)): this;
    isArray(message?: string | ((name: string) => string)): this;
    min(minValue: number, message?: string | ((name: string) => string)): this;
    max(maxValue: number, message?: string | ((name: string) => string)): this;
    isEmail(message?: string | ((name: string) => string)): this;
    newRule(condition?: (values: InputType, key: string) => boolean | Promise<boolean>, message?: string | ((name: string) => string)): this;
    validate(values: InputType, key: string): (string | undefined)[];
    validateAsync(values: InputType, key: string): Promise<string[]>;
}
