export function isEmail(
	this: any,
	message?: string | ((name: string) => string)
) {
	return this.newRule(
		(value: any) => /^\S.*@\S+$/.test(value),
		message || ((name: string) => `The field ${name} is not an email`)
	);
}
