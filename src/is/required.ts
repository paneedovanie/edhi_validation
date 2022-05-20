export function isRequired(
	this: any,
	message?: string | ((name: string) => string)
) {
	return this.newRule(
		(value: any) => !!value && value !== '',
		message || ((name: string) => `The field ${name} is required`)
	);
}
