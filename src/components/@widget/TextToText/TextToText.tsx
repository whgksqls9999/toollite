import { memo, useEffect, useState } from 'react';
import { ButtonProps, Textarea, TextareaProps } from '../../@base';
import * as S from './TextToText.style';
import { useTextToText } from '../../../hooks';

interface TextToTextProps {
	inputTextareaProps: TextareaProps;
	outputTextareaProps: TextareaProps;
	inputToolbar?: ButtonProps[];
	outputToolbar?: ButtonProps[];
	buttonProps: ButtonProps;
	action: (param: any) => any;
}

export const TextToText = memo(function TextToText(props: TextToTextProps) {
	const { inputTextareaProps, outputTextareaProps, buttonProps, action } =
		props;

	const [input_state, setInputState] = useState(inputTextareaProps);
	const [output_state, setOutputState] = useState(outputTextareaProps);
	const [button_state, setButtonState] = useState(buttonProps);
	const { onInputChange, dispatchMainAction } = useTextToText(
		input_state,
		output_state,
		button_state,
		setInputState,
		setOutputState,
		setButtonState,
		action
	);

	// 인풋이 변화했을 때, 조건에 따라 자동적으로 변환된 텍스트를 아웃풋에 반영하는 useEffect
	useEffect(() => {
		dispatchMainAction();
	}, [input_state.display_value]);

	// action option이 변하면 즉각적으로 결과를 반영한다
	useEffect(() => {
		dispatchMainAction();
	}, [action]);

	return (
		<S.Wrapper>
			<S.VerticalSection>
				<Textarea {...input_state} onChange={onInputChange} />
			</S.VerticalSection>
			<S.VerticalSection>
				<Textarea {...output_state} />
			</S.VerticalSection>
		</S.Wrapper>
	);
});
