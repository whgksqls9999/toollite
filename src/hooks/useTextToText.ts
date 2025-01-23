import { Dispatch, SetStateAction, useCallback } from 'react';
import { TextareaState } from '../components/@base/Textarea';
import { ButtonProps } from '../components';

export function useTextToText(
	input_state: TextareaState,
	output_state: TextareaState,
	button_state: ButtonProps,
	setInputState: Dispatch<SetStateAction<TextareaState>>,
	setOutputState: Dispatch<SetStateAction<TextareaState>>,
	setButtonState: Dispatch<SetStateAction<ButtonProps>>,
	action: (param: any) => any
) {
	button_state;
	setButtonState;

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
