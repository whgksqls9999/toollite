import styled from '@emotion/styled';
import { theme } from '@style';

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: ${theme.spacing(4)};
`;

export const DropArea = styled.div<{ isOver: boolean }>`
	border: 2px dashed
		${({ isOver }) =>
			isOver ? theme.colors.primary : theme.colors.gray300};
	border-radius: ${theme.borderRadius.md};
	padding: ${theme.spacing(8)};
	background-color: ${({ isOver }) =>
		isOver ? theme.colors.gray100 : theme.colors.white};
	transition: all 0.2s ease;
	cursor: pointer;

	&:hover {
		border-color: ${theme.colors.black};
		background-color: ${theme.colors.gray100};
	}
`;

export const Row = styled.div`
	display: flex;
	gap: ${theme.spacing(3)};
	justify-content: center;
	align-items: center;
	margin-top: ${theme.spacing(4)};
`;
