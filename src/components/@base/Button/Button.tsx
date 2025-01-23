import { BaseProps, BaseState } from '../../../types/common/base';
import { memo, useCallback } from 'react';
import * as S from './Button.styled';

export interface ButtonProps extends BaseProps<any> {
	onClick: () => void;
	Icon?: string;
	display_value?: string;
	color?: string;
	background_color?: string;
}

// @TODO - Icon을 포함한 버튼인 경우, Icon을 조건부로 출력할 방식 구상
export const Button = memo((props: ButtonProps) => {
	const { Icon, display_value, color, background_color } = props;

	const onClick = useCallback(() => {
		props.onClick?.();
	}, [props.onClick]);

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
