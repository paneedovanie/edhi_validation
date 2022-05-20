import { InputType } from './types';

export const validateAll = (
	Schema: { new (): any },
	input: InputType,
	options?: {
		showData?: boolean;
		singleError?: boolean;
	}
) => {
	const schema = new Schema();
	const errors: { [key: string]: any } = {};

	const keys = [...Object.keys(schema), ...Object.keys(input)];
	for (const key of keys) {
		if (!schema[key]) {
			errors[key] = [`The field ${key} is not needed`];
			continue;
		}

		const defaultValue: any = schema[key]._options?.default;

		if (!!input[key] || (!input[key] && !defaultValue)) {
			const result = schema[key].validate(input, key, {
				singleError: options?.singleError,
			});

			if (!!result.length) {
				errors[key] = result;
			}
		} else {
			input[key] = defaultValue;
		}
	}

	if (!options?.showData) {
		return !!Object.keys(errors).length ? errors : undefined;
	} else {
		return {
			errors: !!Object.keys(errors).length ? errors : undefined,
			data: input,
		};
	}
};
