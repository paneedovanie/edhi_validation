export function isNumber(
	this: any,
	message?: string | ((name: string) => string)
) {
	return this.newRule(
		(value: any) => !value || typeof value === 'number',
		message || ((name: string) => `The field ${name} must be a number`)
	);
}
