import { BaseProps } from '@shared';
import { ReactNode, useCallback } from 'react';
import * as S from './Button.styled';

export type ButtonVariant =
	| 'primary'
	| 'secondary'
	| 'danger'
	| 'mono'
	| 'monoOutline';
export interface ButtonProps extends BaseProps {
	onClick: () => void;
	Icon?: ReactNode;
	display_value?: string;
	variant: ButtonVariant;
	disabled?: boolean;
}

export function Button(props: ButtonProps) {
	const { Icon, display_value, variant, disabled } = props;

	const onClick = useCallback(() => {
		props.onClick?.();
	}, [props.onClick]);

	return (
		<S.Button onClick={onClick} variant={variant} disabled={disabled}>
			{Icon ? <S.Icon>{Icon}</S.Icon> : null}
			<S.Text>{display_value}</S.Text>
		</S.Button>
	);
}
