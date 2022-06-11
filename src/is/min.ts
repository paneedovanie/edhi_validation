export function isMin(
	this: any,
	minValue: number,
	message?: string | ((name: string) => string)
) {
	return this.newRule(
		(value: any) =>
			!value ||
			(typeof value === 'string' && value.length >= minValue) ||
			(typeof value === 'number' && value >= minValue),
		message || ((name: string) => `The field ${name} minimum is ${minValue}`)
	);
}
