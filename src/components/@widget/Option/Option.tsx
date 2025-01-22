import { memo } from 'react';
import { Radio, RadioState } from '../../@base/Radio';
import * as S from './Option.style';

export interface OptionProps {
	action: (param?: any) => any;
	radio_values: RadioState[];
	default_value?: number;
	name: string;
}

export const Option = memo((props: OptionProps) => {
	const { default_value, name, radio_values, action } = props;
	const checked_radio = default_value ?? 0;

	radio_values[checked_radio].is_checked = true;

	return (
		<S.Wrapper>
			{radio_values.map((radio_state: RadioState) => (
				<Radio
					key={radio_state.idx}
					state={radio_state}
					onChange={action}
					name={name}
				/>
			))}
		</S.Wrapper>
	);
});
