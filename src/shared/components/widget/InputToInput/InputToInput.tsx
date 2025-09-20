import styled from '@emotion/styled';

interface InputToInputProps {
	fromValue: string;
	toValue: string;
	onFromChange: (value: string) => void;
	onToChange: (value: string) => void;
	fromPlaceholder?: string;
	toPlaceholder?: string;
	width?: string;
}

const Container = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`;

/** TODO: 공백 포함시 높이 유지 안되는 버그 수정 */
const StyledInput = styled.input<{ width?: string }>`
	width: ${(props) => props.width || '40px'};
	height: 28px;
	padding: 2px 6px;
	border: 1px solid #d1d5db;
	border-radius: 4px;
	font-size: 12px;
	text-align: center;
	background: white;
	transition: border-color 0.2s ease;
	line-height: 1;

	&:focus {
		outline: none;
		border-color: #3b82f6;
		box-shadow: 0 0 0 1px #3b82f6;
	}

	&::placeholder {
		color: #9ca3af;
		font-size: 11px;
	}
`;

const Arrow = styled.span`
	font-size: 14px;
	color: #6b7280;
	font-weight: 500;
`;

export function InputToInput({
	fromValue,
	toValue,
	onFromChange,
	onToChange,
	fromPlaceholder = 'A',
	toPlaceholder = 'B',
	width = '70px',
}: InputToInputProps) {
	return (
		<Container>
			<StyledInput
				value={fromValue}
				onChange={(e) => onFromChange(e.target.value)}
				placeholder={fromPlaceholder}
				width={width}
			/>
			<Arrow>→</Arrow>
			<StyledInput
				value={toValue}
				onChange={(e) => onToChange(e.target.value)}
				placeholder={toPlaceholder}
				width={width}
			/>
		</Container>
	);
}
