import { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Textarea, TextareaState } from '../../@base/Textarea/Textarea';
import { Button, ButtonState } from '../../@base';
import * as S from './TextWorkspace.style';

interface TextWorkspaceProps {
	inputTextareaState: TextareaState;
	outputTextareaState: TextareaState;
	buttonState: ButtonState;
}

export const TextWorkspace = memo((props: TextWorkspaceProps) => {
	const { inputTextareaState, outputTextareaState, buttonState } = props;

	const [input_state, setInputState] = useState(inputTextareaState);
	const [output_state, setOutputState] = useState(outputTextareaState);
	const [button_state] = useState(buttonState);

	const input_state_ref = useRef(input_state);

	const onInputChange = useCallback((e: any) => {
		setInputState({ ...input_state, display_value: e.target.value });
	}, []);

	const onButtonClick = useCallback(() => {
		setOutputState({
			...output_state,
			display_value: input_state_ref.current.display_value,
		});
	}, []);

	// 인풋이 변화했을 때, 조건에 따라 자동적으로 변환된 텍스트를 아웃풋에 반영하는 useEffect
	useEffect(() => {
		// @TODO - 디바운싱을 적용해 어느정도 지연을 적용시킨다
		// setOutputState({
		// 	...output_state,
		// 	display_value: input_state.display_value,
		// });
	}, [input_state.display_value]);

	// input_state가 변화할 때, ref에 최신 값 반영
	useEffect(() => {
		input_state_ref.current = input_state;
	}, [input_state]);

	return (
		<S.Wrapper>
			<Textarea state={input_state} onChange={onInputChange} />
			<Button onClick={onButtonClick} state={button_state} />
			<Textarea state={output_state} />
		</S.Wrapper>
	);
});
