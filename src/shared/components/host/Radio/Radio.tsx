import { useCallback } from 'react';
import { BaseProps } from '@shared';
import * as S from './Radio.style';

export interface RadioProps extends BaseProps {
	onChange?: (param?: any) => any;
	name?: string;
	idx?: number;
	display_value?: string;
	is_checked?: boolean;
}

export function Radio(props: RadioProps) {
	const { name, is_checked, idx, display_value } = props;

	const onChange = useCallback(() => {
		props.onChange?.(idx);
	}, [props.onChange]);

	return (
		<S.RadioWrapper>
			<input
				type='radio'
				checked={is_checked}
				onChange={onChange}
				name={name}
			/>
			<span>{display_value}</span>
		</S.RadioWrapper>
	);
}
