import { memo, ReactNode } from 'react';
import * as S from './container.styled';

export interface ContainerProps {
	children?: ReactNode;
}

export const Container = memo(function Container({ children }: ContainerProps) {
	return <S.Wrapper>{children}</S.Wrapper>;
});
