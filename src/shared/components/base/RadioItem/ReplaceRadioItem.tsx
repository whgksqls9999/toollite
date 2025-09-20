import * as S from './RadioItem.style';
import { ChangeEvent, useCallback } from 'react';
import { Input, InputToInput } from '@shared';

export interface ReplaceRadioItemProps {
	name?: string;
	value: string | number;
	label: string;
	checked?: boolean;
	onChange?: (next: string | number) => void;
	fromValue: string;
	toValue: string;
	onFromChange: (value: string) => void;
	onToChange: (value: string) => void;
}

export function ReplaceRadioItem(props: ReplaceRadioItemProps) {
	const {
		name,
		checked,
		value,
		label,
		fromValue,
		toValue,
		onFromChange,
		onToChange,
	} = props;

	const onChange = useCallback(
		(_e: ChangeEvent<HTMLInputElement>) => {
			props.onChange?.(value);
		},
		[props.onChange, value]
	);

	return (
		<S.RadioItemWrapper checked={checked}>
			<Input
				type='radio'
				checked={checked}
				onChange={onChange}
				name={name}
			/>
			<span>{label}</span>
			<InputToInput
				fromValue={fromValue}
				toValue={toValue}
				onFromChange={onFromChange}
				onToChange={onToChange}
			/>
		</S.RadioItemWrapper>
	);
}
