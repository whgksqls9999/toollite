import { memo, useCallback, useState } from 'react';
import { TextToText } from '../@widget';
import { TextareaState } from '../@base/Textarea';
import { ButtonState } from '../@base';
import { Option, OptionProps } from '../@widget/Option';
import * as S from './RemoveWhiteSpaceWidget.style';

export const RemoveWhiteSpaceWidget = memo(() => {
	const inputTextareaState = getInputTextareaState();
	const outputTextareaState = getOutputTextareaState();
	const buttonState = getButtonState();
	const optionProps = getOptionProps();

	const removeWhiteSpaceAction = useCallback((param: string) => {
		return param.replace(/\s+/g, '');
	}, []);

	const abstractWhiteSpaceAction = useCallback((param: string) => {
		return param.replace(/\s+/g, ' ');
	}, []);

	const [optionIdx, setOptionIdx] = useState<number>(0);

	const setOption = (value: number) => {
		setOptionIdx(value);
	};

	const textConversionActions = [
		removeWhiteSpaceAction,
		abstractWhiteSpaceAction,
	];

	return (
		<S.Wrapper>
			<Option {...optionProps} action={setOption} />
			<TextToText
				buttonState={buttonState}
				inputTextareaState={inputTextareaState}
				outputTextareaState={outputTextareaState}
				action={textConversionActions[optionIdx]}
			/>
		</S.Wrapper>
	);
});

function getInputTextareaState(): TextareaState {
	const state: TextareaState = {
		placeholder: '변환할 텍스트를 입력해주세요',
		resize: false,
	};

	return state;
}

function getOutputTextareaState(): TextareaState {
	const state: TextareaState = {
		disabled: true,
		readonly: true,
		resize: false,
	};

	return state;
}

function getButtonState(): ButtonState {
	const state: ButtonState = {
		display_value: '변환하기',
	};

	return state;
}

function getOptionProps() {
	const state = {
		radio_values: [
			{ idx: 0, display_value: '모든 공백 제거' },
			{ idx: 1, display_value: '공백 합치기' },
		],
		name: 'remove_option',
		default_value: 0,
	} as OptionProps;

	return state;
}
