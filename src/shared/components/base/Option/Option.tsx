import * as S from './Option.style';
import { RadioItem, ReplaceRadioItem } from '@shared';

export interface RadioGroupItem {
	value: string | number;
	label: string;
	type?: 'default' | 'replace';

	/** for replace type */
	fromValue?: string;
	toValue?: string;
	onFromChange?: (value: string) => void;
	onToChange?: (value: string) => void;
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
			{options?.map((opt) => {
				const commonProps = {
					key: opt.value,
					value: opt.value,
					label: opt.label,
					name: name,
					checked: value === opt.value,
					onChange: onChange,
				};

				if (opt.type === 'replace') {
					return (
						<ReplaceRadioItem
							{...commonProps}
							fromValue={opt.fromValue || ''}
							toValue={opt.toValue || ''}
							onFromChange={opt.onFromChange || (() => {})}
							onToChange={opt.onToChange || (() => {})}
						/>
					);
				}

				return <RadioItem {...commonProps} />;
			})}
		</S.Wrapper>
	);
}
