import { Dispatch, SetStateAction, useCallback } from 'react';
import { TextareaState } from '../components/@base/Textarea';
import { ButtonState } from '../components';

export function useTextToText(
	input_state: TextareaState,
	output_state: TextareaState,
	button_state: ButtonState,
	setInputState: Dispatch<SetStateAction<TextareaState>>,
	setOutputState: Dispatch<SetStateAction<TextareaState>>,
	setButtonState: Dispatch<SetStateAction<TextareaState>>,
	action: (param: any) => any
) {
	const onInputChange = useCallback((e: any) => {
		setInputState((input_state) => ({
			...input_state,
			display_value: e.target.value,
		}));
	}, []);

	const dispatchMainAction = useCallback(() => {
		const result = action(input_state.display_value ?? '');

		setOutputState({
			...output_state,
			display_value: result,
		});
	}, [input_state.display_value, action]);

	return { onInputChange, dispatchMainAction };
}
