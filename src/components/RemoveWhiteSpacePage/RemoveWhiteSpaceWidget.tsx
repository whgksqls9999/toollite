import { memo } from 'react';
import { TextWorkspace } from '../@widget';
import { TextareaState } from '../@base/Textarea';
import { ButtonState } from '../@base';

export const RemoveWhiteSpaceWidget = memo(() => {
	const inputTextareaState: TextareaState = {
		placeholder: '변환할 텍스트를 입력해주세요',
	};

	const outputTextareaState: TextareaState = {
		disabled: true,
		readonly: true,
	};

	const buttonState: ButtonState = {
		display_value: '변환하기',
	};

	return (
		<TextWorkspace
			buttonState={buttonState}
			inputTextareaState={inputTextareaState}
			outputTextareaState={outputTextareaState}
		/>
	);
});
