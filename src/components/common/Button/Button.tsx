import { BaseProps } from '../../../types/common/BaseProps';
import { memo } from 'react';
import * as S from './Button.styled';

interface ButtonProps extends BaseProps {}
export const Button = memo(({ value }: ButtonProps) => {
	return <S.Button>{value}</S.Button>;
});
