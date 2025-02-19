import { Dispatch, memo, SetStateAction, useEffect, useState } from 'react';
import { Button, ButtonProps, Textarea, TextareaProps } from '../../@base';
import * as S from './TextToText.style';
import { useTextToText } from '../../../hooks';

interface TextToTextProps {
	inputTextareaProps: TextareaProps;
	setInputTextareaState: Dispatch<SetStateAction<TextareaProps>>;
	outputTextareaProps: TextareaProps;
	setOutputTextareaState: Dispatch<SetStateAction<TextareaProps>>;
	inputToolbar?: ButtonProps[];
	outputToolbar?: ButtonProps[];
	buttonProps: ButtonProps;
	action: (param: any) => any;
}

export const TextToText = memo(function TextToText(props: TextToTextProps) {
	const {
		inputTextareaProps,
		setInputTextareaState,
		outputTextareaProps,
		setOutputTextareaState,
		inputToolbar,
		outputToolbar,
		action,
	} = props;

	const { onInputChange, dispatchMainAction } = useTextToText(
		inputTextareaProps,
		outputTextareaProps,
		setInputTextareaState,
		setOutputTextareaState,
		action
	);

	// 인풋이 변화했을 때, 조건에 따라 자동적으로 변환된 텍스트를 아웃풋에 반영하는 useEffect
	useEffect(() => {
		dispatchMainAction();
	}, [inputTextareaProps.display_value]);

	// action option이 변하면 즉각적으로 결과를 반영한다
	useEffect(() => {
		dispatchMainAction();
	}, [action]);

	return (
		<S.Wrapper>
			<S.VerticalSection>
				<Textarea {...inputTextareaProps} onChange={onInputChange} />
				{inputToolbar?.map((button) => {
					return <Button {...button} key={button.display_value} />;
				})}
			</S.VerticalSection>
			<S.VerticalSection>
				<Textarea {...outputTextareaProps} />
				{outputToolbar?.map((button) => {
					return <Button {...button} key={button.display_value} />;
				})}
			</S.VerticalSection>
		</S.Wrapper>
	);
});
