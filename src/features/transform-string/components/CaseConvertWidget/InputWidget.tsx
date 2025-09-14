import { Textarea } from '@shared';

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
		</div>
	);
}
