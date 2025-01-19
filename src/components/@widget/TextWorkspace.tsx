import { memo, useCallback, useEffect, useState } from 'react';
import { Textarea, TextareaState } from '../@base/Textarea/Textarea';
import { Button, ButtonState } from '../@base';
import { useTextWorkspace } from '../../hooks/useTextWorkspace';

interface TextWorkspaceProps {
	inputTextareaState: TextareaState;
	outputTextareaState: TextareaState;
	buttonState: ButtonState;
}

export const TextWorkspace = memo((props: TextWorkspaceProps) => {
	const { inputTextareaState, outputTextareaState, buttonState } = props;

	const [input_state, setInputState] = useState(inputTextareaState);
	const [output_state, setOutputState] = useState(outputTextareaState);
	const [button_state, setButtonState] = useState(buttonState);

	const { onInputChange, onButtonClick } = useTextWorkspace({
		input_state,
		setInputState,
		output_state,
		setOutputState,
		button_state,
		setButtonState,
	});

	// 인풋이 변화했을 때, 조건에 따라 자동적으로 변환된 텍스트를 아웃풋에 반영하는 useEffect
	useEffect(() => {
		// @TODO - 디바운싱을 적용해 어느정도 지연을 적용시킨다
		// setOutputState({
		// 	...output_state,
		// 	display_value: input_state.display_value,
		// });
	}, [input_state.display_value]);

	return (
		<>
			<Textarea state={input_state} onChange={onInputChange} />
			<Button onClick={onButtonClick} state={button_state} />
			<Textarea state={output_state} />
		</>
	);
});
