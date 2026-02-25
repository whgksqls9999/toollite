import * as S from './Option.style';
import { RadioItem, ReplaceRadioItem, CheckboxRadioItem } from '@shared';

export interface RadioGroupItem {
	value: string | number;
	label: string;
	type?: 'default' | 'replace' | 'checkbox';

	/** for replace type */
	fromValue?: string;
	toValue?: string;
	onFromChange?: (value: string) => void;
	onToChange?: (value: string) => void;

	/** for checkbox type: 라디오 옵션 우측에 체크박스 표시 */
	checkboxLabel?: string;
	checkboxChecked?: boolean;
	onCheckboxChange?: (checked: boolean) => void;
	checkboxId?: string;
}

export interface RadioGroupProps {
	onChange?: (next: string | number) => void;
	options?: RadioGroupItem[];
	name?: string;
	value?: string | number;
	direction?: 'row' | 'column';
	gap?: number;
	wrap?: boolean;
	/** 'naked'면 테두리/배경/패딩 없음. 옵션 그룹을 한 상자로 묶을 때 사용 */
	variant?: 'default' | 'naked';
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
		variant = 'default',
	} = props;

	return (
		<S.Wrapper direction={direction} gap={gap} wrap={wrap} variant={variant}>
			{options?.map((opt) => {
				const commonProps = {
					value: opt.value,
					label: opt.label,
					name: name,
					checked: value === opt.value,
					onChange: onChange,
				};

				if (opt.type === 'replace') {
					return (
						<ReplaceRadioItem
							key={opt.value}
							{...commonProps}
							fromValue={opt.fromValue || ''}
							toValue={opt.toValue || ''}
							onFromChange={opt.onFromChange || (() => {})}
							onToChange={opt.onToChange || (() => {})}
						/>
					);
				}

				if (opt.type === 'checkbox') {
					return (
						<CheckboxRadioItem
							key={opt.value}
							{...commonProps}
							checkboxLabel={opt.checkboxLabel ?? ''}
							checkboxChecked={opt.checkboxChecked}
							onCheckboxChange={opt.onCheckboxChange}
							checkboxId={opt.checkboxId}
						/>
					);
				}

				return <RadioItem key={opt.value} {...commonProps} />;
			})}
		</S.Wrapper>
	);
}
