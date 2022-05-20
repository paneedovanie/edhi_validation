import { ValidatorResultType, InputType } from '../types';

export function validate(
	this: any,
	values: InputType,
	key: string,
	options?: {
		singleError?: boolean;
	}
) {
	let messages = [];

	for (const validator of this._validators) {
		const result = validator(values, key, this._options?.name || key);

		if (!!(result as ValidatorResultType).error) {
			messages.push((result as ValidatorResultType).error);

			if (!!options?.singleError) {
				break;
			}
		}
	}

	return messages;
}
