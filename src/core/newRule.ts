import { ValidatorResultType, InputType } from '../types';

export function newRule(
	this: any,
	condition?: (value: any, values: InputType) => boolean | Promise<boolean>,
	message?: string | ((name: string) => string)
) {
	const Validator =
		condition?.constructor.name === 'AsyncFunction'
			? async (
					values: InputType,
					key: string,
					name?: string
			  ): Promise<ValidatorResultType> => {
					let error = undefined;

					if (!condition || (await condition(values[key], values))) {
						return { values };
					}

					if (!!message) {
						error =
							typeof message === 'string' ? message : message(name || key);
					}

					return { error, values };
			  }
			: (
					values: InputType,
					key: string,
					name?: string
			  ): ValidatorResultType => {
					let error = undefined;

					if (!condition || condition(values[key], values)) {
						return { values };
					}

					if (!!message) {
						error =
							typeof message === 'string' ? message : message(name || key);
					}

					return { error, values };
			  };

	this._validators.push(Validator);

	return this;
}
