export function isObject(
	this: any,
	message?: string | ((name: string) => string)
) {
	return this.newRule(
		(value: any) => !value || typeof value === 'object',
		message || ((name: string) => `The field ${name} must be an object`)
	);
}
