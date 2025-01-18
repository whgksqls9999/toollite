/** @jsxImportSource @emotion/react */
import { BaseProps } from '../../../types/common/BaseProps';
import { memo } from 'react';
import * as S from './Button.styled';

interface ButtonProps extends BaseProps<ButtonState> {
	onClick: () => void;
	Icon?: string;
}

interface ButtonState {
	display_value: string;
	color: string;
	background_color: string;
}

export const Button = memo((props: ButtonProps) => {
	const { onClick, Icon, state } = props;
	const { display_value, color, background_color } = state;

	return (
		<S.Wrapper
			onClick={onClick}
			color={color}
			background_color={background_color}
		>
			{Icon ? <S.Icon>{Icon}</S.Icon> : null}
			<S.Text>{display_value}</S.Text>
		</S.Wrapper>
	);
});
