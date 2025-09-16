import { ComponentPropsWithoutRef } from 'react';

export type LabelProps = ComponentPropsWithoutRef<'label'>;

export function Label(props: LabelProps) {
	return <label {...props} />;
}
