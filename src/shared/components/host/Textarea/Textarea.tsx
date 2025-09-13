import { ChangeEvent, ComponentPropsWithoutRef } from 'react';
import * as S from './Textarea.style';
import { BaseProps } from '@shared';

export interface TextareaProps
	extends Omit<ComponentPropsWithoutRef<'textarea'>, 'onChange'>,
		BaseProps {
	resize?: boolean;
	value?: string;
	onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function Textarea(props: TextareaProps) {
	const { onChange, resize, ...nativeProps } = props;
	return <S.Wrapper onChange={onChange} resize={resize} {...nativeProps} />;
}
