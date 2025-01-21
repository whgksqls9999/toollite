import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Textarea, TextareaState } from '../../@base/Textarea/Textarea';
import { Button, ButtonState } from '../../@base';
import * as S from './TextToText.style';
import { useTextToText } from '../../../hooks/useTextToText';

interface TextToTextProps {
	inputTextareaState: TextareaState;
	outputTextareaState: TextareaState;
	buttonState: ButtonState;
	action: (param: any) => any;
}

export const TextToText = memo((props: TextToTextProps) => {
	const { inputTextareaState, outputTextareaState, buttonState, action } =
		props;

	const [input_state, setInputState] = useState(inputTextareaState);
	const [output_state, setOutputState] = useState(outputTextareaState);
	const [button_state, setButtonState] = useState(buttonState);
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
		// @TODO - 디바운싱을 적용해 지연시간 적용
		dispatchMainAction();
	}, [input_state.display_value]);

	// action option이 변하면 즉각적으로 결과를 반영한다
	useEffect(() => {
		dispatchMainAction();
	}, [action]);

	return (
		<S.Wrapper>
			<Textarea state={input_state} onChange={onInputChange} />
			<Button onClick={dispatchMainAction} state={button_state} />
			<Textarea state={output_state} />
		</S.Wrapper>
	);
});
