import {
	Dispatch,
	memo,
	SetStateAction,
	useCallback,
	useMemo,
	useState,
} from 'react';
import { TextToText } from '../@widget';
import { TextareaProps } from '../@base/Textarea';
import { ButtonProps } from '../@base';
import { Option, OptionProps } from '../@widget/Option';
import * as S from './RemoveWhiteSpaceWidget.style';
import { replaceAction } from '../../utils';

export const RemoveWhiteSpaceWidget = memo(function RemoveWhiteSpaceWidget() {
	const [optionIdx, setOptionIdx] = useState<number>(0);

	const setOption = useCallback((value: number) => {
		setOptionIdx(value);
	}, []);

	const {
		inputTextareaState,
		outputTextareaState,
		optionState,
		textConversionActions,
	} = useRemoveWhiteSpaceWidget();

	return (
		<S.Wrapper>
			<Option
				{...optionState}
				onChange={setOption}
				selected_idx={optionIdx}
			/>
			<TextToText
				buttonProps={{ onClick: () => {} }}
				inputTextareaProps={inputTextareaState}
				outputTextareaProps={outputTextareaState}
				action={textConversionActions[optionIdx]}
			/>
		</S.Wrapper>
	);
});

interface useRemoveWhiteSpaceWidget {
	inputTextareaState: TextareaProps;
	outputTextareaState: TextareaProps;
	optionState: OptionProps;
	setInputTextareaState: Dispatch<SetStateAction<TextareaProps>>;
	setOutputTextareaState: Dispatch<SetStateAction<TextareaProps>>;
	setOptionState: Dispatch<SetStateAction<OptionProps>>;
	textConversionActions: ((input: string) => string)[];
}

function useRemoveWhiteSpaceWidget() {
	const [inputTextareaState, setInputTextareaState] = useState<TextareaProps>(
		{
			placeholder: '변환할 텍스트를 입력해주세요',
			resize: false,
		}
	);

	const [outputTextareaState, setOutputTextareaState] =
		useState<TextareaProps>({
			disabled: true,
			readonly: true,
			resize: false,
		});

	const [optionState, setOptionState] = useState<OptionProps>({
		radio_values: [
			{ idx: 0, display_value: '모든 공백 제거' },
			{ idx: 1, display_value: '공백 하나로 합치기' },
		],
		name: 'remove_option',
	});

	const removeWhiteSpaceAction = useCallback((input: string) => {
		return replaceAction(input, /\s+/g, '');
	}, []);

	const abstractWhiteSpaceAction = useCallback((input: string) => {
		return replaceAction(input, /\s+/g, ' ');
	}, []);

	const textConversionActions = useMemo(() => {
		return [removeWhiteSpaceAction, abstractWhiteSpaceAction];
	}, [removeWhiteSpaceAction, abstractWhiteSpaceAction]);

	return {
		inputTextareaState,
		outputTextareaState,
		optionState,
		setInputTextareaState,
		setOutputTextareaState,
		setOptionState,
		textConversionActions,
	};
}
