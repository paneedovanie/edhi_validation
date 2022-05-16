export type InputType = {
	[key: string]: any;
};

export type ValidatorResultType = {
	values: InputType;
	error?: string;
};

export type ValidatorType = (
	value: any,
	key: string,
	name: string
) => ValidatorResultType | Promise<ValidatorResultType>;
