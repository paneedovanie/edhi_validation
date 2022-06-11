export function isString(
	this: any,
	message?: string | ((name: string) => string)
) {
	return this.newRule(
		(value: any) => !value || typeof value === 'string',
		message || ((name: string) => `The field ${name} must be a string`)
	);
}
