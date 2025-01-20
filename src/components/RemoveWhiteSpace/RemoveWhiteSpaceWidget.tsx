import { memo } from 'react';
import { TextToText } from '../@widget';
import { TextareaState } from '../@base/Textarea';
import { ButtonState } from '../@base';

export const RemoveWhiteSpaceWidget = memo(() => {
	const inputTextareaState: TextareaState = {
		placeholder: '변환할 텍스트를 입력해주세요',
		resize: false,
	};

	const outputTextareaState: TextareaState = {
		disabled: true,
		readonly: true,
		resize: false,
	};

	const buttonState: ButtonState = {
		display_value: '변환하기',
	};

	const removeWhiteSpaceAction = (param: string) => {
		return param.replace(/\s+/g, '');
	};

	return (
		<TextToText
			buttonState={buttonState}
			inputTextareaState={inputTextareaState}
			outputTextareaState={outputTextareaState}
			action={removeWhiteSpaceAction}
		/>
	);
});
