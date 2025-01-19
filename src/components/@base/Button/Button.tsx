import { BaseProps } from '../../../types/common/BaseProps';
import { memo } from 'react';
import * as S from './Button.styled';

export interface ButtonProps extends BaseProps<ButtonState> {
	onClick: () => void;
	Icon?: string;
}

export interface ButtonState {
	display_value?: string;
	color?: string;
	background_color?: string;
}

// @TODO - Icon을 포함한 버튼인 경우, Icon을 조건부로 출력할 방식 구상
export const Button = memo((props: ButtonProps) => {
	const { onClick, Icon, state } = props;
	const { display_value, color, background_color } = state;

	return (
		<S.Wrapper
			onClick={onClick}
			color={color}
			background_color={background_color}
		>
			{Icon ? <S.Icon>{}</S.Icon> : null}
			<S.Text>{display_value}</S.Text>
		</S.Wrapper>
	);
});
