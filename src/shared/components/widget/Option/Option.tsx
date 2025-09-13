import * as S from './Option.style';
import { Radio } from '@shared';

export interface OptionItem {
	value: string | number;
	label: string;
}

export interface OptionProps {
	onChange?: (next: string | number) => void;
	options?: OptionItem[];
	name?: string;
	value?: string | number;
}

export function Option(props: OptionProps) {
	const { name, options, onChange, value } = props;

	return (
		<S.Wrapper>
			{options?.map((opt) => (
				<Radio
					key={opt.value}
					value={opt.value}
					label={opt.label}
					name={name}
					checked={value === opt.value}
					onChange={onChange}
				/>
			))}
		</S.Wrapper>
	);
}
