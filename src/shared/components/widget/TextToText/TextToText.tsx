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
	/** 입력 영역(좌측 textarea) 직하단에 렌더링할 내용 (예: 에러 메시지) */
	inputFooter?: React.ReactNode;
}

export function TextToText(props: TextToTextProps) {
	const { value, onChange, outputValue, toolbar, inputProps, outputProps, inputFooter } =
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
					{inputFooter}
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
