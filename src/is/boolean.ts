export function isBoolean(
	this: any,
	message?: string | ((name: string) => string)
) {
	return this.newRule(
		(value: any) => !value || typeof value === 'boolean',
		message || ((name: string) => `The field ${name} must be a boolean`)
	);
}
