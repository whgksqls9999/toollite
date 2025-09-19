export function toTitleCase(input: string): string {
	return input
		.toLowerCase()
		.replace(/(^|\s|_|-)+(\w)/g, (_m, _sep, c: string) => c.toUpperCase())
		.replace(/[\s_-]+/g, ' ');
}

export function toCamelCase(input: string): string {
	const words = input.replace(/[_-]+/g, ' ').trim().split(/\s+/);
	if (words.length === 0) return '';
	const [first, ...rest] = words.map((w) => w.toLowerCase());
	return (
		first + rest.map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join('')
	);
}

export function toSnakeCase(input: string): string {
	return input
		.replace(/([a-z0-9])([A-Z])/g, '$1_$2')
		.replace(/[-\s]+/g, '_')
		.toLowerCase();
}

export function toKebabCase(input: string): string {
	return input
		.replace(/([a-z0-9])([A-Z])/g, '$1-$2')
		.replace(/[ _]+/g, '-')
		.toLowerCase();
}

export function toPascalCase(input: string): string {
	const words = input.replace(/[_-]+/g, ' ').trim().split(/\s+/);
	if (words.length === 0) return '';
	return words
		.map((w) => {
			const lower = w.toLowerCase();
			return lower.charAt(0).toUpperCase() + lower.slice(1);
		})
		.join('');
}
