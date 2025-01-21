import { memo, useCallback } from 'react';
import { BaseProps, BaseState } from '../../../types/common';

export interface RadioProps extends BaseProps<RadioState> {
	onChange?: (param?: any) => any;
	name: string;
}

export interface RadioState extends BaseState {
	idx: number;
	display_value?: string;
	is_checked?: boolean;
}

export const Radio = memo((props: RadioProps) => {
	const { state } = props;

	const onChange = useCallback(() => {
		props.onChange?.(state.idx);
	}, []);

	return (
		<label>
			<input
				type='radio'
				defaultChecked={state.is_checked}
				onChange={onChange}
				name={props.name}
			/>
			<span>{state.display_value}</span>
		</label>
	);
});
