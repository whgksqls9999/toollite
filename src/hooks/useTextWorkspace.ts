import { useCallback, useState } from 'react';
import { ButtonState } from '../components';
import { TextareaState } from '../components/@base/Textarea';

export interface useTextWorkspace {
	input_state: any;
	setInputState: any;
	output_state: any;
	setOutputState: any;
	button_state: any;
	setButtonState: any;
}

export function useTextWorkspace({
	input_state,
	setInputState,
	output_state,
	setOutputState,
	button_state,
	setButtonState,
}: useTextWorkspace) {
	const onInputChange = useCallback((e: any) => {
		setInputState({ ...input_state, display_value: e.target.value });
	}, []);

	const onButtonClick = useCallback(() => {
		setOutputState({
			...output_state,
			display_value: input_state.display_value,
		});
	}, []);

	return {
		input_state,
		output_state,
		button_state,
		setInputState,
		setOutputState,
		setButtonState,
		onInputChange,
		onButtonClick,
	};
}
