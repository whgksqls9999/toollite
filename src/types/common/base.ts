export interface BaseProps<T> {
	state: T;
}

export interface BaseState {
	[key: string]: string | number | boolean | undefined;
}
