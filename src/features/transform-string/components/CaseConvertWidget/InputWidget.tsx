import { Textarea, Button, ResetIcon } from '@shared';
import { useTranslation } from 'react-i18next';

export interface InputWidgetProps {
	value: string;
	onChange: (next: string) => void;
}

export function InputWidget({ value, onChange }: InputWidgetProps) {
	const { t } = useTranslation();

	return (
		<div>
			<div style={{ fontWeight: 500, marginBottom: 8 }}>
				{t('caseConvert.inputLabel')}
			</div>
			<Textarea
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder={t('removeWhitespace.inputPlaceholder')}
				rows={6}
			/>
			<div style={{ marginTop: 8 }}>
				<Button
					display_value={t('common.buttons.reset')}
					onClick={() => onChange('')}
					variant='monoOutline'
					Icon={<ResetIcon size={16} />}
				/>
			</div>
		</div>
	);
}
