import { useMemo, useState } from 'react';
import * as S from './RemoveWhiteSpaceWidget.style';
import {
	Option,
	OptionProps,
	TextToText,
	replaceAction,
	ButtonProps,
} from '@shared';

export function RemoveWhiteSpaceWidget() {
	const [selectedTransform, setSelectedTransform] = useState<number>(0);
	const [inputValue, setInputValue] = useState<string>('');

	const transforms = useMemo(
		() => [
			{
				id: 0,
				label: '모든 공백 제거',
				fn: (s: string) => replaceAction(s, /\s+/g, ''),
			},
			{
				id: 1,
				label: '공백 하나로 합치기',
				fn: (s: string) => replaceAction(s, /\s+/g, ' '),
			},
		],
		[]
	);

	const outputValue = transforms[selectedTransform].fn(inputValue);

	const toolbar: ButtonProps[] = [
		{
			display_value: '초기화',
			onClick: () => setInputValue(''),
			variant: 'primary',
		},
		{
			display_value: '복사하기',
			onClick: () => {
				navigator.clipboard.writeText(outputValue);
			},
			variant: 'primary',
		},
	];

	const optionProps: OptionProps = {
		name: 'remove_option',
		options: transforms.map((t) => ({ value: t.id, label: t.label })),
		value: selectedTransform,
		onChange: (v) => setSelectedTransform(Number(v)),
	};

	return (
		<S.Wrapper>
			<S.Description>
				<div>텍스트 정리 도구</div>
				<S.DescriptionContents>
					텍스트의 공백, 줄바꿈 등을 정리하여 깔끔하게 만들어보세요.
				</S.DescriptionContents>
			</S.Description>
			<Option {...optionProps} />
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
