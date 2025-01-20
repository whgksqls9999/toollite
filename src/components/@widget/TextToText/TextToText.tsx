import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Textarea, TextareaState } from '../../@base/Textarea/Textarea';
import { Button, ButtonState } from '../../@base';
import * as S from './TextToText.style';

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

	const input_state_ref = useRef(input_state);

	// input_state가 변화할 때, ref에 최신 값 반영
	// state가 변화해도 onClick등의 함수는 클로저에 저장된 첫 state만 참조하기에 ref를 통해 참조해야함
	useEffect(() => {
		input_state_ref.current = input_state;
	}, [input_state]);

	// 인풋이 변화했을 때, 조건에 따라 자동적으로 변환된 텍스트를 아웃풋에 반영하는 useEffect
	useEffect(() => {
		// @TODO - 디바운싱을 적용해 지연시간 적용
		onButtonClick();
	}, [input_state.display_value]);

	const onInputChange = useCallback((e: any) => {
		setInputState({ ...input_state, display_value: e.target.value });
	}, []);

	const onButtonClick = useCallback(() => {
		const result = action(input_state_ref.current.display_value ?? '');

		setOutputState({
			...output_state,
			display_value: result,
		});
	}, []);

	return (
		<S.Wrapper>
			<Textarea state={input_state} onChange={onInputChange} />
			<Button onClick={onButtonClick} state={button_state} />
			<Textarea state={output_state} />
		</S.Wrapper>
	);
});
