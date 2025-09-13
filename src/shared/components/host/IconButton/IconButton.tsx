import * as S from './IconButton.style';
import { ReactNode } from 'react';

export interface IconButtonProps {
	title?: string;
	onClick?: () => void;
	icon?: ReactNode; // slot: custom svg/icon
}

export function IconButton({ title, onClick, icon }: IconButtonProps) {
	return (
		<S.IconButton aria-label={title} title={title} onClick={onClick}>
			{icon}
		</S.IconButton>
	);
}
