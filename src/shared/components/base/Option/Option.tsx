import * as S from './Option.style';
import { RadioItem } from '@shared';

export interface RadioGroupItem {
	value: string | number;
	label: string;
}

export interface RadioGroupProps {
	onChange?: (next: string | number) => void;
	options?: RadioGroupItem[];
	name?: string;
	value?: string | number;
	direction?: 'row' | 'column';
	gap?: number;
	wrap?: boolean;
}

export function RadioGroup(props: RadioGroupProps) {
	const {
		name,
		options,
		onChange,
		value,
		direction = 'column',
		gap,
		wrap,
	} = props;

	return (
		<S.Wrapper direction={direction} gap={gap} wrap={wrap}>
			{options?.map((opt) => (
				<RadioItem
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
