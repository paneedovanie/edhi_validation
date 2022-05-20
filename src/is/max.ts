export function isMax(
	this: any,
	maxValue: number,
	message?: string | ((name: string) => string)
) {
	return this.newRule(
		(value: any) =>
			(typeof value === 'string' && value.length <= maxValue) ||
			(typeof value === 'number' && value <= maxValue),
		message || ((name: string) => `The field ${name} maximum is ${maxValue}`)
	);
}
