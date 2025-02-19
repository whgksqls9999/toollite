import { Dispatch, SetStateAction, useCallback } from 'react';
import { TextareaProps } from '../components/@base/Textarea';

export function useTextToText(
	input_state: TextareaProps,
	output_state: TextareaProps,
	setInputState: Dispatch<SetStateAction<TextareaProps>>,
	setOutputState: Dispatch<SetStateAction<TextareaProps>>,
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
