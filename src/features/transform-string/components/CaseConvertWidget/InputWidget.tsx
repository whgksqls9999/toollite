import { Textarea, Button, ResetIcon } from '@shared';

export interface InputWidgetProps {
	value: string;
	onChange: (next: string) => void;
}

export function InputWidget({ value, onChange }: InputWidgetProps) {
	return (
		<div>
			<div style={{ fontWeight: 500, marginBottom: 8 }}>입력 텍스트</div>
			<Textarea
				value={value}
				onChange={(e) => onChange(e.target.value)}
				placeholder='변환할 텍스트를 입력해주세요'
				rows={6}
			/>
			<div style={{ marginTop: 8 }}>
				<Button
					display_value='초기화'
					onClick={() => onChange('')}
					variant='monoOutline'
					Icon={<ResetIcon size={16} />}
				/>
			</div>
		</div>
	);
}
