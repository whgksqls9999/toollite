import { memo } from 'react';
import * as S from './Textarea.style';
import { BaseProps } from '../../../types/common/BaseProps';

export interface TextareaProps extends BaseProps<TextareaState> {
	onChange?: (e: any) => void;
}

export interface TextareaState {
	placeholder?: string;
	disabled?: boolean;
	readonly?: boolean;
	display_value?: string;
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
		/>
	);
});
