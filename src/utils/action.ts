export function replaceAction(
	input: string,
	target: RegExp,
	replaceValue: string
) {
	return input.replace(target, replaceValue);
}
