import * as S from './RadioItem.style';
import { ChangeEvent, useCallback } from 'react';
import { Input } from '@shared';

export interface CheckboxRadioItemProps {
	name?: string;
	value: string | number;
	label: string;
	checked?: boolean;
	onChange?: (next: string | number) => void;
	checkboxLabel: string;
	checkboxChecked?: boolean;
	onCheckboxChange?: (checked: boolean) => void;
	checkboxId?: string;
}

export function CheckboxRadioItem(props: CheckboxRadioItemProps) {
	const {
		name,
		checked,
		value,
		label,
		checkboxLabel,
		checkboxChecked,
		onCheckboxChange,
		checkboxId,
	} = props;

	const onRadioChange = useCallback(
		(_e: ChangeEvent<HTMLInputElement>) => {
			props.onChange?.(value);
		},
		[props.onChange, value]
	);

	const onCheckboxClick = useCallback((e: React.MouseEvent) => {
		e.stopPropagation();
	}, []);

	return (
		<S.RadioItemWrapper as="div" checked={checked}>
			<label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', flex: 1 }}>
				<Input type='radio' checked={checked} onChange={onRadioChange} name={name} />
				<span>{label}</span>
			</label>
			<div onClick={onCheckboxClick} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
				<Input
					type='checkbox'
					id={checkboxId}
					checked={checkboxChecked}
					onChange={(e) => onCheckboxChange?.(e.target.checked)}
				/>
				<label htmlFor={checkboxId} style={{ cursor: 'pointer', fontSize: 14 }}>
					{checkboxLabel}
				</label>
			</div>
		</S.RadioItemWrapper>
	);
}
