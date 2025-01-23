import { memo, useCallback, useState } from 'react';
import { TextToText } from '../@widget';
import { TextareaProps } from '../@base/Textarea';
import { ButtonProps } from '../@base';
import { Option, OptionProps } from '../@widget/Option';
import * as S from './RemoveWhiteSpaceWidget.style';

export const RemoveWhiteSpaceWidget = memo(() => {
	const inputTextareaProps = getInputTextareaProps();
	const outputTextareaProps = getOutputTextareaProps();
	const buttonProps = getbuttonProps();
	const optionProps = getOptionProps();

	const removeWhiteSpaceAction = useCallback((param: string) => {
		return param.replace(/\s+/g, '');
	}, []);

	const abstractWhiteSpaceAction = useCallback((param: string) => {
		return param.replace(/\s+/g, ' ');
	}, []);

	const [optionIdx, setOptionIdx] = useState<number>(0);

	const setOption = useCallback((value: number) => {
		setOptionIdx(value);
	}, []);

	const textConversionActions = [
		removeWhiteSpaceAction,
		abstractWhiteSpaceAction,
	];

	return (
		<S.Wrapper>
			<Option
				{...optionProps}
				onChange={setOption}
				selected_idx={optionIdx}
			/>
			<TextToText
				buttonProps={buttonProps}
				inputTextareaProps={inputTextareaProps}
				outputTextareaProps={outputTextareaProps}
				action={textConversionActions[optionIdx]}
			/>
		</S.Wrapper>
	);
});

function getInputTextareaProps(): TextareaProps {
	const state: TextareaProps = {
		placeholder: '변환할 텍스트를 입력해주세요',
		resize: false,
	};

	return state;
}

function getOutputTextareaProps(): TextareaProps {
	const state: TextareaProps = {
		disabled: true,
		readonly: true,
		resize: false,
	};

	return state;
}

function getbuttonProps(): ButtonProps {
	const props = {
		display_value: '변환하기',
	} as ButtonProps;

	return props;
}

function getOptionProps() {
	const props = {
		radio_values: [
			{ idx: 0, display_value: '모든 공백 제거' },
			{ idx: 1, display_value: '공백 합치기' },
		],
		name: 'remove_option',
	} as OptionProps;

	return props;
}
