import { ComponentPropsWithoutRef } from 'react';

export type InputProps = ComponentPropsWithoutRef<'input'>;

export function Input(props: InputProps) {
	return <input {...props} />;
}
