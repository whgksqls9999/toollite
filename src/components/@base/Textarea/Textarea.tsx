/** @jsxImportSource @emotion/react */
import { memo } from 'react';
import * as S from './Textarea.style';
import { BaseProps } from '../../../types/common/base';

export interface TextareaProps extends BaseProps {
	onChange?: (e: any) => void;
	placeholder?: string;
	disabled?: boolean;
	readonly?: boolean;
	display_value?: string;
	resize?: boolean;
}

export const Textarea = memo((props: TextareaProps) => {
	const { onChange, display_value, placeholder, disabled, readonly, resize } =
		props;

	return (
		<S.Wrapper
			value={display_value}
			placeholder={placeholder}
			onChange={onChange}
			disabled={disabled}
			readOnly={readonly}
			resize={resize}
		/>
	);
});
