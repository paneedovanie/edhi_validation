import { ValidatorType, ValidatorResultType, InputType } from './types';

export default class Rules {
	public _validators: ValidatorType[] = [];

	constructor(
		public _options?: { async?: boolean; name?: string; default?: any }
	) {}

	isRequired(message?: string | ((name: string) => string)) {
		return this.newRule(
			(values, key) => values[key] && values[key] !== '',
			message || ((name) => `The field ${name} is required`)
		);
	}

	isString(message?: string | ((name: string) => string)) {
		return this.newRule(
			(values, key) => typeof values[key] === 'string',
			message || ((name) => `The field ${name} must be a string`)
		);
	}

	isNumber(message?: string | ((name: string) => string)) {
		return this.newRule(
			(values, key) => typeof values[key] === 'number',
			message || ((name) => `The field ${name} must be a number`)
		);
	}

	isBoolean(message?: string | ((name: string) => string)) {
		return this.newRule(
			(value: any) => typeof value === 'boolean',
			message || ((name) => `The field ${name} must be a boolean`)
		);
	}

	isObject(message?: string | ((name: string) => string)) {
		return this.newRule(
			(values, key) => typeof values[key] === 'object',
			message || ((name) => `The field ${name} must be an object`)
		);
	}

	isArray(message?: string | ((name: string) => string)) {
		return this.newRule(
			(values, key) => Array.isArray(values[key]),
			message || ((name) => `The field ${name} must be an array`)
		);
	}

	min(minValue: number, message?: string | ((name: string) => string)) {
		return this.newRule(
			(values, key) =>
				(typeof values[key] === 'string' && values[key].length >= minValue) ||
				(typeof values[key] === 'number' && values[key] >= minValue),
			message || ((name) => `The field ${name} minimum is ${minValue}`)
		);
	}

	max(maxValue: number, message?: string | ((name: string) => string)) {
		return this.newRule(
			(values, key) =>
				(typeof values[key] === 'string' && values[key].length <= maxValue) ||
				(typeof values[key] === 'number' && values[key] <= maxValue),
			message || ((name) => `The field ${name} maximum is ${maxValue}`)
		);
	}

	isEmail(message?: string | ((name: string) => string)) {
		return this.newRule(
			(values, key) => /^\S.*@\S+$/.test(values[key]),
			message || ((name) => `The field ${name} is not an email`)
		);
	}

	newRule(
		condition?: (values: InputType, key: string) => boolean | Promise<boolean>,
		message?: string | ((name: string) => string)
	) {
		if (!!this._options?.async) {
			const Validator = async (
				values: InputType,
				key: string,
				name?: string
			): Promise<ValidatorResultType> => {
				let error = undefined;

				if (!condition || (await condition(values, key))) {
					return { values };
				}

				if (!!message) {
					error = typeof message === 'string' ? message : message(name || key);
				}

				return { error, values };
			};

			this._validators.push(Validator);

			return this;
		}

		const Validator = (
			values: InputType,
			key: string,
			name?: string
		): ValidatorResultType => {
			let error = undefined;

			if (!condition || condition(values, key)) {
				return { values };
			}

			if (!!message) {
				error = typeof message === 'string' ? message : message(name || key);
			}

			return { error, values };
		};

		this._validators.push(Validator);

		return this;
	}

	validate(values: InputType, key: string) {
		let messages = [];

		for (const validator of this._validators) {
			const result = validator(values, key, this._options?.name || key);

			if (!!(result as ValidatorResultType).error) {
				messages.push((result as ValidatorResultType).error);
			}
		}

		return messages;
	}

	async validateAsync(values: InputType, key: string) {
		let messages = [];

		for (const validator of this._validators) {
			const result = await validator(values, key, this._options?.name || key);

			if (!!result.error) {
				messages.push(result.error);
			}
		}

		return messages;
	}
}
