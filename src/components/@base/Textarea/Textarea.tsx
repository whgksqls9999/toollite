/** @jsxImportSource @emotion/react */
import { memo } from 'react';
import * as S from './Textarea.style';
import { BaseProps, BaseState } from '../../../types/common/base';

export interface TextareaProps extends BaseProps<TextareaState> {
	onChange?: (e: any) => void;
}

export interface TextareaState extends BaseState {
	placeholder?: string;
	disabled?: boolean;
	readonly?: boolean;
	display_value?: string;
	resize?: boolean;
}

export const Textarea = memo((props: TextareaProps) => {
	const { state, onChange } = props;

	return (
		<S.Wrapper
			value={state.display_value}
			placeholder={state.placeholder}
			onChange={onChange}
			disabled={state.disabled}
			readOnly={state.readonly}
			resize={state.resize}
		/>
	);
});
