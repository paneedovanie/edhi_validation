import { InputType } from '../types';

export async function validateAsync(
	this: any,
	values: InputType,
	key: string,
	options?: {
		singleError?: boolean;
	}
) {
	let messages = [];

	for (const validator of this._validators) {
		const result = await validator(values, key, this._options?.name || key);

		if (!!result.error) {
			messages.push(result.error);

			if (!!options?.singleError) {
				break;
			}
		}
	}

	return messages;
}
