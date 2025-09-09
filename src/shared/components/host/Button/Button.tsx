import { BaseProps } from '@shared';
import { memo, useCallback } from 'react';
import * as S from './Button.styled';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export interface ButtonProps extends BaseProps {
	onClick: () => void;
	Icon?: string;
	display_value?: string;
	variant: ButtonVariant;
}

// @TODO - Icon을 포함한 버튼인 경우, Icon을 조건부로 출력할 방식 구상
export const Button = memo(function Button(props: ButtonProps) {
	const { Icon, display_value, variant } = props;

	const onClick = useCallback(() => {
		props.onClick?.();
	}, [props.onClick]);

	return (
		<S.Button onClick={onClick} variant={variant}>
			{Icon ? <S.Icon>{}</S.Icon> : null}
			<S.Text>{display_value}</S.Text>
		</S.Button>
	);
});
