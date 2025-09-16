import { BaseProps } from '@shared';
import { useCallback } from 'react';
import * as S from './Button.styled';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export interface ButtonProps extends BaseProps {
	onClick: () => void;
	Icon?: string;
	display_value?: string;
	variant: ButtonVariant;
}

export function Button(props: ButtonProps) {
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
}
