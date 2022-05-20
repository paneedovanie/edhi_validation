import { ValidatorType } from './types';
import * as Core from './core';
import * as Rule from './is';

class Rules {
	public _validators: ValidatorType[] = [];

	constructor(public _options?: { name?: string; default?: any }) {}

	newRule = Core.newRule;
	validate = Core.validate;
	validateAsync = Core.validateAsync;

	// Add new rules here
	isRequired = Rule.isRequired;
	isString = Rule.isString;
	isNumber = Rule.isNumber;
	isArray = Rule.isArray;
	isBoolean = Rule.isBoolean;
	isEmail = Rule.isEmail;
	isMax = Rule.isMax;
	isMin = Rule.isMin;
	isObject = Rule.isObject;
}

export default Rules;
