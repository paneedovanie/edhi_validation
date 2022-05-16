import { InputType } from './types';

export const validateAll = (
	Schema: { new (): any },
	input: InputType,
	showData?: boolean
) => {
	const schema = new Schema();
	const errors: { [key: string]: any } = {};

	const keys = [...Object.keys(schema), ...Object.keys(input)];
	for (const key of keys) {
		if (!schema[key]) {
			errors[key] = [`The field ${key} is not needed`];
			continue;
		}

		if (!!input[key]) {
			const result = schema[key].validate(input, key);

			if (!!result.length) {
				errors[key] = result;
			}
		} else if (schema[key]._options.default) {
			input[key] = schema[key]._options.default;
		}
	}

	if (!showData) {
		return !!Object.keys(errors).length ? errors : undefined;
	} else {
		return {
			errors: !!Object.keys(errors).length ? errors : undefined,
			data: input,
		};
	}
};
