import { ChangeEvent, useCallback } from 'react';
import { BaseProps } from '@shared';
import * as S from './Radio.style';

export interface RadioProps extends BaseProps {
	name?: string;
	value: string | number;
	label: string;
	checked?: boolean;
	onChange?: (next: string | number) => void;
}

export function Radio(props: RadioProps) {
	const { name, checked, value, label } = props;

	const onChange = useCallback(
		(_e: ChangeEvent<HTMLInputElement>) => {
			props.onChange?.(value);
		},
		[props.onChange, value]
	);

	return (
		<S.RadioWrapper>
			<input
				type='radio'
				checked={checked}
				onChange={onChange}
				name={name}
			/>
			<span>{label}</span>
		</S.RadioWrapper>
	);
}
