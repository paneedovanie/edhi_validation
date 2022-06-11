export function isArray(
	this: any,
	message?: string | ((name: string) => string)
) {
	return this.newRule(
		(value: any) => !value || Array.isArray(value),
		message || ((name: string) => `The field ${name} must be an array`)
	);
}
