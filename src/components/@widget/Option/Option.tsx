import { memo } from 'react';
import { Radio, RadioProps } from '../../@base/Radio';
import * as S from './Option.style';

export interface OptionProps {
	onChange: (param?: any) => any;
	radio_values: RadioProps[];
	name: string;
	selected_idx: number;
}

export const Option = memo((props: OptionProps) => {
	const { name, radio_values, onChange, selected_idx } = props;

	return (
		<S.Wrapper>
			{radio_values.map((radio_props: RadioProps) => (
				<Radio
					key={radio_props.idx}
					idx={radio_props.idx}
					onChange={onChange}
					name={name}
					is_checked={selected_idx === radio_props.idx}
					display_value={radio_props.display_value}
				/>
			))}
		</S.Wrapper>
	);
});
