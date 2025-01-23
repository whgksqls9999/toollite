import { memo, useCallback, useEffect } from 'react';
import { BaseProps } from '../../../types/common';
import * as S from './Radio.style';

export interface RadioProps extends BaseProps<any> {
	onChange?: (param?: any) => any;
	name: string;
	idx: number;
	display_value?: string;
	is_checked: boolean;
}

export const Radio = memo((props: RadioProps) => {
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
});
