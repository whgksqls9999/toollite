import * as S from './RadioItem.style';
import { ChangeEvent, useCallback } from 'react';
import { Input } from '@shared';

export interface RadioItemProps {
	name?: string;
	value: string | number;
	label: string;
	checked?: boolean;
	onChange?: (next: string | number) => void;
}

export function RadioItem(props: RadioItemProps) {
	const { name, checked, value, label } = props;

	const onChange = useCallback(
		(_e: ChangeEvent<HTMLInputElement>) => {
			props.onChange?.(value);
		},
		[props.onChange, value]
	);

	return (
		<S.RadioItemWrapper>
			<Input
				type='radio'
				checked={checked}
				onChange={onChange}
				name={name}
			/>
			<span>{label}</span>
		</S.RadioItemWrapper>
	);
}
