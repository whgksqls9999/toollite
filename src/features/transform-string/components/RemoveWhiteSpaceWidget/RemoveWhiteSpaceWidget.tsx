import { useMemo, useState } from 'react';
import * as S from './RemoveWhiteSpaceWidget.style';
import {
	RadioGroup,
	RadioGroupProps,
	TextToText,
	ButtonProps,
	CopyIcon,
	ResetIcon,
	useToastContext,
} from '@shared';

export function RemoveWhiteSpaceWidget() {
	const [selectedTransform, setSelectedTransform] = useState<number>(0);
	const [inputValue, setInputValue] = useState<string>('');
	const [fromValue, setFromValue] = useState<string>('');
	const [toValue, setToValue] = useState<string>('');
	const { showToast } = useToastContext();

	const transforms = useMemo(
		() => [
			{
				id: 0,
				label: '모든 공백 제거',
				fn: (s: string) => s.replace(/\s+/g, ''),
				type: 'default' as const,
			},
			{
				id: 1,
				label: '공백 하나로 합치기',
				fn: (s: string) => s.replace(/\s+/g, ' '),
				type: 'default' as const,
			},
			{
				id: 2,
				label: '문자열 변경',
				fn: (s: string) => {
					if (!fromValue) return s;
					return s.replace(
						new RegExp(
							fromValue.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'),
							'g'
						),
						toValue
					);
				},
				type: 'replace' as const,
			},
		],
		[fromValue, toValue]
	);

	const outputValue = transforms[selectedTransform].fn(inputValue);

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(outputValue);
			showToast('클립보드에 복사가 완료됐습니다!', 'success');
		} catch (error) {
			showToast('복사에 실패했습니다.', 'error');
		}
	};

	const toolbar: ButtonProps[] = [
		{
			display_value: '초기화',
			onClick: () => setInputValue(''),
			variant: 'monoOutline',
			Icon: <ResetIcon size={16} />,
		},
		{
			display_value: '복사하기',
			onClick: handleCopy,
			variant: 'mono',
			Icon: <CopyIcon size={16} />,
		},
	];

	const optionProps: RadioGroupProps = {
		name: 'remove_option',
		options: transforms.map((t) => ({
			value: t.id,
			label: t.label,
			type: t.type,
			fromValue: fromValue,
			toValue: toValue,
			onFromChange: setFromValue,
			onToChange: setToValue,
		})),
		value: selectedTransform,
		onChange: (v) => setSelectedTransform(Number(v)),
	};

	return (
		<S.Wrapper>
			<S.Description>
				<S.DescriptionTitle>텍스트 정리 도구</S.DescriptionTitle>
				<S.DescriptionContents>
					텍스트의 공백, 줄바꿈 등을 정리하여 깔끔하게 만들어보세요.
				</S.DescriptionContents>
			</S.Description>
			<RadioGroup {...optionProps} />
			<TextToText
				value={inputValue}
				onChange={setInputValue}
				outputValue={outputValue}
				toolbar={toolbar}
				inputProps={{
					placeholder: '변환할 텍스트를 입력해주세요',
					rows: 12,
				}}
				outputProps={{ readOnly: true, rows: 12 }}
			/>
		</S.Wrapper>
	);
}
