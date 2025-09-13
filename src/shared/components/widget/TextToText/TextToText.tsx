import { ChangeEvent } from 'react';
import { Button, ButtonProps, Textarea } from '@shared';
import * as S from './TextToText.style';

type NativeTextarea = React.ComponentPropsWithoutRef<'textarea'>;

interface TextToTextProps {
	value: string;
	onChange: (next: string) => void;
	outputValue: string;
	toolbar?: ButtonProps[];
	inputProps?: Omit<NativeTextarea, 'value' | 'onChange'>;
	outputProps?: Omit<NativeTextarea, 'value' | 'onChange'>;
}

export function TextToText(props: TextToTextProps) {
	const { value, onChange, outputValue, toolbar, inputProps, outputProps } =
		props;

	const onInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
		onChange(e.target.value);
	};

	return (
		<>
			<S.Wrapper>
				<S.VerticalSection>
					<Textarea
						value={value}
						onChange={onInputChange}
						{...inputProps}
					/>
				</S.VerticalSection>
				<S.VerticalSection>
					<Textarea value={outputValue} readOnly {...outputProps} />
				</S.VerticalSection>
			</S.Wrapper>
			<S.ButtonSpace>
				{toolbar?.map((button) => (
					<Button {...button} key={button.display_value} />
				))}
			</S.ButtonSpace>
		</>
	);
}
