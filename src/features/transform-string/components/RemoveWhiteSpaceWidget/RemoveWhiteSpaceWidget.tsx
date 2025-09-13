import {
	Dispatch,
	SetStateAction,
	useCallback,
	useMemo,
	useState,
} from 'react';
import * as S from './RemoveWhiteSpaceWidget.style';
import {
	Option,
	OptionProps,
	TextareaProps,
	TextToText,
	replaceAction,
	ButtonProps,
} from '@shared';

export function RemoveWhiteSpaceWidget() {
	const [optionIdx, setOptionIdx] = useState<number>(0);

	const setOption = useCallback((value: number) => {
		setOptionIdx(value);
	}, []);

	const {
		inputTextareaState,
		outputTextareaState,
		optionState,
		textConversionActions,
		inputToolbarButtonState,
		setInputTextareaState,
		setOutputTextareaState,
	} = useRemoveWhiteSpaceWidget();

	return (
		<S.Wrapper>
			<S.Description>
				<div>텍스트 정리 도구</div>
				<S.DescriptionContents>
					텍스트의 공백, 줄바꿈 등을 정리하여 깔끔하게 만들어보세요.
				</S.DescriptionContents>
			</S.Description>
			<Option
				{...optionState}
				onChange={setOption}
				selected_idx={optionIdx}
			/>
			<TextToText
				inputTextareaProps={inputTextareaState}
				setInputTextareaState={setInputTextareaState}
				outputTextareaProps={outputTextareaState}
				setOutputTextareaState={setOutputTextareaState}
				action={textConversionActions[optionIdx]}
				inputToolbar={inputToolbarButtonState}
			/>
		</S.Wrapper>
	);
}

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

	const inputToolbarButtonState = [
		{
			display_value: '초기화',
			onClick: () => {
				setInputTextareaState((input_state) => ({
					...input_state,
					display_value: '',
				}));
			},
			variant: 'primary',
		},
		{
			display_value: '복사하기',
			onClick: () => {
				navigator.clipboard.writeText(
					outputTextareaState.display_value ?? ''
				);
			},
			variant: 'primary',
		},
	] as ButtonProps[];

	return {
		inputTextareaState,
		outputTextareaState,
		optionState,
		setInputTextareaState,
		setOutputTextareaState,
		setOptionState,
		textConversionActions,
		inputToolbarButtonState,
	};
}
